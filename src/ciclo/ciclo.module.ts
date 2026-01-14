import { Module } from '@nestjs/common';
import { CicloService } from './ciclo.service';
import { CicloController } from './ciclo.controller';

@Module({
  controllers: [CicloController],
  providers: [CicloService],
})
export class CicloModule {}
