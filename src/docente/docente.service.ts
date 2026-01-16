import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class DocenteService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createDocenteDto: CreateDocenteDto) {
    return await this.prisma.docente.create({
      data: createDocenteDto
    });
  }

  async findAll() {
    return await this.prisma.docente.findMany();
  }

  async findOne(id: number) {
    const docente = await this.prisma.docente.findUnique({
      where: { id_docente: id }
    });
    if (!docente) {
      throw new NotFoundException(`Docente with ID ${id} not found`);
    }
    return docente;
  }

  async update(id: number, updateDocenteDto: UpdateDocenteDto) {
    const docente = await this.prisma.docente.update({
      where: { id_docente: id },
      data: updateDocenteDto
    });
    return docente;
  }

  async remove(id: number) {
    const docente = await this.prisma.docente.delete({
      where: { id_docente: id }
    });
    return docente;
  }
}
