import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  codigo: string;

  @IsInt()
  @IsNotEmpty()
  creditos: number;

  @IsInt()
  @IsNotEmpty()
  id_ciclo: number;
}