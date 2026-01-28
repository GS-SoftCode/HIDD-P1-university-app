import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDocenteMateriaDto } from './dto/create-docente-materia.dto';
import { UpdateDocenteMateriaDto } from './dto/update-docente-materia.dto';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Injectable()
export class DocenteMateriaService {
  constructor(private readonly prisma: MainPrismaService) {}

  async create(createDocenteMateriaDto: CreateDocenteMateriaDto) {
    return await this.prisma.docente_Materia.create({
      data: createDocenteMateriaDto
    });
  }

  async findAll() {
    return await this.prisma.docente_Materia.findMany({
      include: {
        docente: true,
        materia: true,
        periodo: true
      }
    });
  }

  async findOne(id_docente: number, id_materia: number, id_periodo: number) {
    const docenteMateria = await this.prisma.docente_Materia.findUnique({
      where: {
        id_docente_id_materia_id_periodo: {
          id_docente,
          id_materia,
          id_periodo
        }
      },
      include: {
        docente: true,
        materia: true,
        periodo: true
      }
    });
    if (!docenteMateria) {
      throw new NotFoundException(`Docente-Materia not found`);
    }
    return docenteMateria;
  }

  async remove(id_docente: number, id_materia: number, id_periodo: number) {
    const docenteMateria = await this.prisma.docente_Materia.delete({
      where: {
        id_docente_id_materia_id_periodo: {
          id_docente,
          id_materia,
          id_periodo
        }
      }
    });
    return docenteMateria;
  }
}