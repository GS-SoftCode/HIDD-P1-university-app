import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDocenteDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;

  @IsString()
  @IsNotEmpty()
  especialidad: string;
}