import { IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateEstudianteMateriaDto {
  @IsInt()
  @IsNotEmpty()
  id_estudiante: number;

  @IsInt()
  @IsNotEmpty()
  id_materia: number;

  @IsInt()
  @IsNotEmpty()
  id_periodo: number;

  @IsDateString()
  @IsNotEmpty()
  fecha_inscripcion: Date;
}
