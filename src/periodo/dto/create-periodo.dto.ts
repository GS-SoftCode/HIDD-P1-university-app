import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';

export class CreatePeriodoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsBoolean()
  @IsOptional()
  activo?: boolean;
}