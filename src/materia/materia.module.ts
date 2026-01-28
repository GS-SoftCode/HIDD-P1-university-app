import { Module } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { MateriaController } from './materia.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [MateriaController],
  providers: [MateriaService, MainPrismaService],
})
export class MateriaModule {}