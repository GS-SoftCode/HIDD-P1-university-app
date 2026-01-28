import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class PeriodoService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createPeriodoDto: CreatePeriodoDto) {
    return await this.prisma.periodo.create({
      data: createPeriodoDto
    });
  }

  async findAll() {
    return await this.prisma.periodo.findMany();
  }

  async findOne(id: number) {
    const periodo = await this.prisma.periodo.findUnique({
      where: { id_periodo: id }
    });
    if (!periodo) {
      throw new NotFoundException(`Periodo with ID ${id} not found`);
    }
    return periodo;
  }

  async update(id: number, updatePeriodoDto: UpdatePeriodoDto) {
    const periodo = await this.prisma.periodo.update({
      where: { id_periodo: id },
      data: updatePeriodoDto
    });
    return periodo;
  }

  async remove(id: number) {
    const periodo = await this.prisma.periodo.delete({
      where: { id_periodo: id }
    });
    return periodo;
  }
}