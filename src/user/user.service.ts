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

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
