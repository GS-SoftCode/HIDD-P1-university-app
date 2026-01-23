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
  
  async findDocentesMultiMaterias() {
    const docentes = await this.prisma.docente.findMany({
      include: {
        materias: {
          include: {
            materia: true,
            periodo: true
          }
        }
      }
    });

    // Filtramos solo los docentes que tienen más de una materia
    const docentesConMultiplesMaterias = docentes.filter(docente => {
      // Contamos materias únicas (sin repetir por periodo)
      const materiasUnicas = new Set(docente.materias.map(dm => dm.id_materia));
      return materiasUnicas.size > 1;
    });

    return docentesConMultiplesMaterias;
  }

  async findDocentesFiltrados(especialidad?: string) {
    return await this.prisma.docente.findMany({
      where: {
        AND: [
          {
            OR: [
              { especialidad: especialidad || 'Ingeniería' },
              {
                materias: {
                  some: {}  // Que dicten al menos una materia
                }
              }
            ]
          },
          {
            NOT: {
              materias: {
                none: {}  // NOT (que NO tenga materias) = que sí tenga materias
              }
            }
          }
        ]
      },
      include: {
        materias: {
          include: {
            materia: true,
            periodo: true
          }
        }
      }
    });
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