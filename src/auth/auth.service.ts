import { Injectable, UnauthorizedException, ConflictException, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserPrismaService } from '../prisma/user-prisma.service';
import { MainPrismaService } from '../prisma/main-prisma.service';
import { UserLoginDto } from './dto/login.dto';
import { RegisterAdminDto } from './dto/register-admin.dto';
import { RegisterDocenteDto } from './dto/register-docente.dto';
import { RegisterEstudianteDto } from './dto/register-estudiante.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userPrisma: UserPrismaService,
    private mainPrisma: MainPrismaService,
  ) {}

  async login(loginDto: UserLoginDto) {
    // Buscar usuario
    const user = await this.userPrisma.user.findUnique({
      where: { correo: loginDto.correo },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Verificar password
    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    // Generar token
    const payload = { sub: user.id, correo: user.correo, role: user.rol };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        role: user.rol,
      },
    };
  }

  async registerAdmin(dto: RegisterAdminDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hash del password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Transacción: crear usuario Y admin
    try {
      return await this.userPrisma.$transaction(async (tx) => {
        // Crear usuario en db_user
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'ADMIN',
          },
        });

        // Crear admin en db_main
        const admin = await this.mainPrisma.admin.create({
          data: {
            userId: user.id,
          },
        });

        // Generar token
        const payload = { sub: user.id, correo: user.correo, role: user.rol };
        const access_token = this.jwtService.sign(payload);

        return {
          access_token,
          user: {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            role: user.rol,
          },
          admin,
        };
      });
    } catch (error) {
      // Si falla la creación en main-schema, la transacción revertirá automáticamente el User
      throw new ConflictException('Error al crear el administrador: ' + error.message);
    }
  }

  async registerDocente(dto: RegisterDocenteDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hash del password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Transacción: crear usuario Y docente
    try {
      return await this.userPrisma.$transaction(async (tx) => {
        // Crear usuario en db_user
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'DOCENTE',
          },
        });

        // Crear docente en db_main
        const docente = await this.mainPrisma.docente.create({
          data: {
            userId: user.id,
            especialidad: dto.especialidad,
          },
        });

        // Generar token
        const payload = { sub: user.id, correo: user.correo, role: user.rol };
        const access_token = this.jwtService.sign(payload);

        return {
          access_token,
          user: {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            role: user.rol,
          },
          docente,
        };
      });
    } catch (error) {
      // Si falla la creación en main-schema, la transacción revertirá automáticamente el User
      throw new ConflictException('Error al crear el docente: ' + error.message);
    }
  }

  async registerEstudiante(dto: RegisterEstudianteDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Validar que la carrera existe
    const carrera = await this.mainPrisma.carrera.findUnique({
      where: { id_carrera: dto.id_carrera },
    });

    if (!carrera) {
      throw new NotFoundException('La carrera especificada no existe');
    }

    // Hash del password
    const hashedPassword = await bcrypt.hash(dto.password, 10);

    // Transacción: crear usuario Y estudiante
    try {
      return await this.userPrisma.$transaction(async (tx) => {
        // Crear usuario en db_user
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'ESTUDIANTE',
          },
        });

        // Crear estudiante en db_main
        const estudiante = await this.mainPrisma.estudiante.create({
          data: {
            userId: user.id,
            fecha_nacimiento: dto.fecha_nacimiento,
            id_carrera: dto.id_carrera,
            estado: (dto.estado as any) || 'ACTIVO',
          },
        });

        // Generar token
        const payload = { sub: user.id, correo: user.correo, role: user.rol };
        const access_token = this.jwtService.sign(payload);

        return {
          access_token,
          user: {
            id: user.id,
            nombre: user.nombre,
            apellido: user.apellido,
            correo: user.correo,
            role: user.rol,
          },
          estudiante,
        };
      });
    } catch (error) {
      // Si falla la creación en main-schema, la transacción revertirá automáticamente el User
      throw new ConflictException('Error al crear el estudiante: ' + error.message);
    }
  }

  async validateUser(userId: number) {
    return await this.userPrisma.user.findUnique({
      where: { id: userId },
    });
  }
}