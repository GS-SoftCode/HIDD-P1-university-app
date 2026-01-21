import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class EstudianteService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createEstudianteDto: CreateEstudianteDto) {
    return await this.prisma.estudiante.create({
      data: {
        userId: createEstudianteDto.userId,
        fecha_nacimiento: createEstudianteDto.fecha_nacimiento,
        id_carrera: createEstudianteDto.id_carrera,
        estado: (createEstudianteDto.estado as any) || 'ACTIVO',
      }
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
    const dataToUpdate: any = {};
    
    if (updateEstudianteDto.fecha_nacimiento !== undefined) {
      dataToUpdate.fecha_nacimiento = updateEstudianteDto.fecha_nacimiento;
    }
    
    if (updateEstudianteDto.estado !== undefined) {
      dataToUpdate.estado = updateEstudianteDto.estado;
    }
    
    const estudiante = await this.prisma.estudiante.update({
      where: { id_estudiante: id },
      data: dataToUpdate
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
