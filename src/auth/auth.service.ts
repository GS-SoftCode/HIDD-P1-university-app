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
    const user = await this.userPrisma.user.findUnique({
      where: { correo: loginDto.correo },
    });

    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const isPasswordValid = await bcrypt.compare(loginDto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

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
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      return await this.userPrisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'ADMIN',
          },
        });

        const admin = await this.mainPrisma.admin.create({
          data: {
            userId: user.id,
          },
        });

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
      throw new ConflictException('Error al crear el administrador: ' + error.message);
    }
  }

  async registerDocente(dto: RegisterDocenteDto) {
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      return await this.userPrisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'DOCENTE',
          },
        });

        const docente = await this.mainPrisma.docente.create({
          data: {
            userId: user.id,
            especialidad: dto.especialidad,
          },
        });

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
      throw new ConflictException('Error al crear el docente: ' + error.message);
    }
  }

  async registerEstudiante(dto: RegisterEstudianteDto) {
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: dto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    const carrera = await this.mainPrisma.carrera.findUnique({
      where: { id_carrera: dto.id_carrera },
    });

    if (!carrera) {
      throw new NotFoundException('La carrera especificada no existe');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    try {
      return await this.userPrisma.$transaction(async (tx) => {
        const user = await tx.user.create({
          data: {
            nombre: dto.nombre,
            apellido: dto.apellido,
            correo: dto.correo,
            password: hashedPassword,
            rol: 'ESTUDIANTE',
          },
        });

        const estudiante = await this.mainPrisma.estudiante.create({
          data: {
            userId: user.id,
            fecha_nacimiento: new Date(dto.fecha_nacimiento),
            id_carrera: dto.id_carrera,
            estado: dto.estado ? (dto.estado.charAt(0).toUpperCase() + dto.estado.slice(1).toLowerCase() as any) : 'Activo',
          },
        });

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
      throw new ConflictException('Error al crear el estudiante: ' + error.message);
    }
  }

  async validateUser(userId: number) {
    return await this.userPrisma.user.findUnique({
      where: { id: userId },
    });
  }
}