import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [EstudianteController],
  providers: [EstudianteService, MainPrismaService],
})
export class EstudianteModule {}