import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    return await this.prisma.estudiante.create({
      data: createEstudianteDto
    });
  }

  async findAll() {
    return await this.prisma.estudiante.findMany();
  }

  async findOne(id: number) {
    const estudiante = await this.prisma.estudiante.findUnique({
      where: { id_estudiante: id }
    });
    if (!estudiante) {
      throw new NotFoundException(`Estudiante with ID ${id} not found`);
    }
    return estudiante;
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    const estudiante = await this.prisma.estudiante.update({
      where: { id_estudiante: id },
      data: updateEstudianteDto
    });
    return estudiante;
  }

  async remove(id: number) {
    const estudiante = await this.prisma.estudiante.delete({
      where: { id_estudiante: id }
    });
    return estudiante;
  }
}
