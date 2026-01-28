import { IsInt, IsNotEmpty, IsDateString, IsEnum, IsOptional } from 'class-validator';

export class CreateEstudianteDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDateString()
  @IsNotEmpty()
  fecha_nacimiento: Date;

  @IsInt()
  @IsNotEmpty()
  id_carrera: number;

  @IsEnum(['ACTIVO', 'INACTIVO', 'GRADUADO', 'RETIRADO'])
  @IsOptional()
  estado?: 'ACTIVO' | 'INACTIVO' | 'GRADUADO' | 'RETIRADO';
}