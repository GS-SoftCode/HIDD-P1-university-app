import { Module } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CicloController } from './ciclo.controller';
import { MainPrismaService } from '../prisma/main-prisma.service';

@Module({
  controllers: [CicloController],
  providers: [CicloService, MainPrismaService],
})
export class CicloModule {}
