import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateCarreraDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsInt()
  @IsNotEmpty()
  duracion: number;

  @IsString()
  @IsNotEmpty()
  facultad: string;
}
