import { Module } from '@nestjs/common';
import { DocenteMateriaService } from './docente-materia.service';
import { DocenteMateriaController } from './docente-materia.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [DocenteMateriaController],
  providers: [DocenteMateriaService, MainPrismaService],
})
export class DocenteMateriaModule {}