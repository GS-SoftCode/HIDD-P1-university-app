import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CarreraModule } from './carrera/carrera.module';
import { CicloModule } from './ciclo/ciclo.module';
import { DocenteModule } from './docente/docente.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MateriaModule } from './materia/materia.module';
import { AdminModule } from './admin/admin.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [PrismaModule, AuthModule, CarreraModule, CicloModule, DocenteModule, EstudianteModule, MateriaModule, AdminModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
