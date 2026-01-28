import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createAdminDto: CreateAdminDto) {
    return await this.prisma.admin.create({
      data: createAdminDto
    });
  }

  async findAll() {
    return await this.prisma.admin.findMany();
  }

  async findOne(id: number) {
    const admin = await this.prisma.admin.findUnique({
      where: { id_admin: id }
    });
    if (!admin) {
      throw new NotFoundException(`Admin with ID ${id} not found`);
    }
    return admin;
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    const admin = await this.prisma.admin.update({
      where: { id_admin: id },
      data: updateAdminDto
    });
    return admin;
  }

  async remove(id: number) {
    const admin = await this.prisma.admin.delete({
      where: { id_admin: id }
    });
    return admin;
  }
}