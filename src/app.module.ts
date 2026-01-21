import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CarreraModule } from './carrera/carrera.module';
import { CicloModule } from './ciclo/ciclo.module';
import { DocenteModule } from './docente/docente.module';
import { EstudianteModule } from './estudiante/estudiante.module';
import { MateriaModule } from './materia/materia.module';
import { AdminModule } from './admin/admin.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ".env",
    }),
    AuthModule, CarreraModule, CicloModule, DocenteModule, EstudianteModule, MateriaModule, AdminModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
