import { Module } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { DocenteController } from './docente.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [DocenteController],
  providers: [DocenteService, MainPrismaService],
})
export class DocenteModule {}
