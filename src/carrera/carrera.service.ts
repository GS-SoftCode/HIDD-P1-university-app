import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarreraDto } from './dto/create-carrera.dto';
import { UpdateCarreraDto } from './dto/update-carrera.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class CarreraService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createCarreraDto: CreateCarreraDto) {
    return await this.prisma.carrera.create({
      data: createCarreraDto
    });
  }

  async findAll() {
    return await this.prisma.carrera.findMany();
  }

  async findOne(id: number) {
    const carrera = await this.prisma.carrera.findUnique({
      where: { id_carrera: id }
    });
    if (!carrera) {
      throw new NotFoundException(`Carrera with ID ${id} not found`);
    }
    return carrera;
  }

  async update(id: number, updateCarreraDto: UpdateCarreraDto) {
    const carrera = await this.prisma.carrera.update({
      where: { id_carrera: id },
      data: updateCarreraDto
    });
    return carrera;
  }

  async remove(id: number) {
    const carrera = await this.prisma.carrera.delete({
      where: { id_carrera: id }
    });
    return carrera;
  }
}
