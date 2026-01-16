import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserPrismaService } from '../prisma/user-prisma.service';
import { UserLoginDto } from './dto/login.dto';
import { UserRegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userPrisma: UserPrismaService,
  ) {}

  async register(registerDto: UserRegisterDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: registerDto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    // Crear usuario
    const user = await this.userPrisma.user.create({
      data: {
        nombre: registerDto.nombre,
        apellido: registerDto.apellido,
        correo: registerDto.correo,
        password: hashedPassword,
        roleId: registerDto.roleId,
      },
      include: {
        role: true,
      },
    });

    // Generar token
    const payload = { sub: user.id, correo: user.correo, role: user.role.nombre };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        role: user.role.nombre,
      },
    };
  }

  async login(loginDto: UserLoginDto) {
    // Buscar usuario
    const user = await this.userPrisma.user.findUnique({
      where: { correo: loginDto.correo },
      include: { role: true },
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
    const payload = { sub: user.id, correo: user.correo, role: user.role.nombre };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        id: user.id,
        nombre: user.nombre,
        apellido: user.apellido,
        correo: user.correo,
        role: user.role.nombre,
      },
    };
  }

  async validateUser(userId: number) {
    return await this.userPrisma.user.findUnique({
      where: { id: userId },
      include: { role: true },
    });
  }
}
