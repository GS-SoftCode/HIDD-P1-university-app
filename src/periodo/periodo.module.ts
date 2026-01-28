import { Module } from '@nestjs/common';
import { PeriodoService } from './periodo.service';
import { PeriodoController } from './periodo.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [PeriodoController],
  providers: [PeriodoService, MainPrismaService],
})
export class PeriodoModule {}