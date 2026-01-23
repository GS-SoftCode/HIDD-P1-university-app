import { Injectable, ConflictException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPrismaService } from '../prisma/user-prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userPrisma: UserPrismaService) {}

  async create(createUserDto: CreateUserDto) {
    // Verificar si el usuario ya existe
    const existingUser = await this.userPrisma.user.findUnique({
      where: { correo: createUserDto.correo },
    });

    if (existingUser) {
      throw new ConflictException('El correo ya está registrado');
    }

    // Hash del password
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // Crear usuario
    const user = await this.userPrisma.user.create({
      data: {
        nombre: createUserDto.nombre,
        apellido: createUserDto.apellido,
        correo: createUserDto.correo,
        password: hashedPassword,
        rol: createUserDto.rol || 'ESTUDIANTE', // Por defecto ESTUDIANTE
      },
    });

    // Retornar sin el password
    const { password, ...result } = user;
    return result;
  }

  async findAll() {
    const users = await this.userPrisma.user.findMany();
    // Excluir el campo password de cada usuario
    return users.map(({ password, ...rest }) => rest);
  }

  async findOne(id: number) {
    const user = await this.userPrisma.user.findUnique({ where: { id } });
    if (!user) return null;
    const { password, ...rest } = user;
    return rest;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
