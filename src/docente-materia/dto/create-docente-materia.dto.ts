import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateDocenteMateriaDto {
  @IsInt()
  @IsNotEmpty()
  id_docente: number;

  @IsInt()
  @IsNotEmpty()
  id_materia: number;

  @IsInt()
  @IsNotEmpty()
  id_periodo: number;
}