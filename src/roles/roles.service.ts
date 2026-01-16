import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { UserPrismaService } from '../prisma/user-prisma.service';

@Injectable()
export class RolesService {
  constructor(private readonly prisma: UserPrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    return await this.prisma.role.create({
      data: createRoleDto
    });
  }

  async findAll() {
    return await this.prisma.role.findMany();
  }

  async findOne(id: number) {
    const role = await this.prisma.role.findUnique({
      where: { id: id }
    });
    if (!role) {
      throw new NotFoundException(`Role with ID ${id} not found`);
    }
    return role;
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    const role = await this.prisma.role.update({
      where: { id: id },
      data: updateRoleDto
    });
    return role;
  }

  async remove(id: number) {
    const role = await this.prisma.role.delete({
      where: { id: id }
    });
    return role;
  }
}
