import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCicloDto } from './dto/create-ciclo.dto';
import { UpdateCicloDto } from './dto/update-ciclo.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class CicloService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createCicloDto: CreateCicloDto) {
    return await this.prisma.ciclo.create({
      data: createCicloDto
    });
  }

  async findAll() {
    return await this.prisma.ciclo.findMany();
  }

  async findOne(id: number) {
    const ciclo = await this.prisma.ciclo.findUnique({
      where: { id_ciclo: id }
    });
    if (!ciclo) {
      throw new NotFoundException(`Ciclo with ID ${id} not found`);
    }
    return ciclo;
  }

  async update(id: number, updateCicloDto: UpdateCicloDto) {
    const ciclo = await this.prisma.ciclo.update({
      where: { id_ciclo: id },
      data: updateCicloDto
    });
    return ciclo;
  }

  async remove(id: number) {
    const ciclo = await this.prisma.ciclo.delete({
      where: { id_ciclo: id }
    });
    return ciclo;
  }
}