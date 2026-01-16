import { IsInt, IsNotEmpty, IsDateString, IsString, IsOptional } from 'class-validator';

export class CreateEstudianteDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsDateString()
  @IsNotEmpty()
  fecha_nacimiento: string;

  @IsInt()
  @IsNotEmpty()
  id_carrera: number;

  @IsString()
  @IsOptional()
  estado?: string;
}
