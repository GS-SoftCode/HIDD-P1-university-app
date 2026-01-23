import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEstudianteMateriaDto } from './dto/create-estudiante-materia.dto';
import { UpdateEstudianteMateriaDto } from './dto/update-estudiante-materia.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class EstudianteMateriaService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createEstudianteMateriaDto: CreateEstudianteMateriaDto) {
    return await this.prisma.estudiante_Materia.create({
      data: createEstudianteMateriaDto
    });
  }

  async findAll() {
    return await this.prisma.estudiante_Materia.findMany({
      include: {
        estudiante: true,
        materia: true,
        periodo: true
      }
    });
  }

  async findOne(id_estudiante: number, id_materia: number, id_periodo: number) {
    const estudianteMateria = await this.prisma.estudiante_Materia.findUnique({
      where: {
        id_estudiante_id_materia_id_periodo: {
          id_estudiante,
          id_materia,
          id_periodo
        }
      },
      include: {
        estudiante: true,
        materia: true,
        periodo: true
      }
    });
    if (!estudianteMateria) {
      throw new NotFoundException(`Estudiante-Materia not found`);
    }
    return estudianteMateria;
  }

  async remove(id_estudiante: number, id_materia: number, id_periodo: number) {
    const estudianteMateria = await this.prisma.estudiante_Materia.delete({
      where: {
        id_estudiante_id_materia_id_periodo: {
          id_estudiante,
          id_materia,
          id_periodo
        }
      }
    });
    return estudianteMateria;
  }
}
