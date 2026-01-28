import { IsDateString, IsEnum, IsOptional } from 'class-validator';

export class UpdateEstudianteDto {
  @IsDateString()
  @IsOptional()
  fecha_nacimiento?: Date;

  @IsEnum(['ACTIVO', 'INACTIVO', 'GRADUADO', 'RETIRADO'])
  @IsOptional()
  estado?: 'ACTIVO' | 'INACTIVO' | 'GRADUADO' | 'RETIRADO';
}