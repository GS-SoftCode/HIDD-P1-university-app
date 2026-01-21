import { IsString, IsEmail, MinLength } from 'class-validator';

export class RegisterDocenteDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  especialidad: string;
}
