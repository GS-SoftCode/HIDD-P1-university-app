import { Module } from '@nestjs/common';
import { EstudianteMateriaService } from './estudiante-materia.service';
import { EstudianteMateriaController } from './estudiante-materia.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [EstudianteMateriaController],
  providers: [EstudianteMateriaService, MainPrismaService],
})
export class EstudianteMateriaModule {}
