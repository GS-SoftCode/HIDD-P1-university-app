import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class MateriaService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createMateriaDto: CreateMateriaDto) {
    return await this.prisma.materia.create({
      data: createMateriaDto
    });
  }

  async findAll() {
    return await this.prisma.materia.findMany();
  }

  async findOne(id: number) {
    const materia = await this.prisma.materia.findUnique({
      where: { id_materia: id }
    });
    if (!materia) {
      throw new NotFoundException(`Materia with ID ${id} not found`);
    }
    return materia;
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    const materia = await this.prisma.materia.update({
      where: { id_materia: id },
      data: updateMateriaDto
    });
    return materia;
  }

  async remove(id: number) {
    const materia = await this.prisma.materia.delete({
      where: { id_materia: id }
    });
    return materia;
  }
}