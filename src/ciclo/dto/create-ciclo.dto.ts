import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateCicloDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  numero: number;

  @IsInt()
  @IsNotEmpty()
  id_carrera: number;
}