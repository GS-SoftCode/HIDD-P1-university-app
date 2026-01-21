import { IsString, IsEmail, MinLength, IsDateString, IsInt, IsEnum, IsOptional } from 'class-validator';

export class RegisterEstudianteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsDateString()
  fecha_nacimiento: Date;

  @IsInt()
  id_carrera: number;

  @IsOptional()
  @IsEnum(['ACTIVO', 'INACTIVO', 'GRADUADO', 'RETIRADO'])
  estado?: string;
}
