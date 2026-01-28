import { Module } from '@nestjs/common';
import { CarreraService } from './carrera.service';
import { CarreraController } from './carrera.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [CarreraController],
  providers: [CarreraService, MainPrismaService],
})
export class CarreraModule {}