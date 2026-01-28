import { IsString, IsEmail, MinLength, IsEnum, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsEnum(['ADMIN', 'DOCENTE', 'ESTUDIANTE'])
  rol?: 'ADMIN' | 'DOCENTE' | 'ESTUDIANTE';
}