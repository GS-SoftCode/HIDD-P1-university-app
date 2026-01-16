import { IsEmail, IsNotEmpty, IsString, IsInt, MinLength } from 'class-validator';

export class UserRegisterDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsEmail()
  @IsNotEmpty()
  correo: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsInt()
  @IsNotEmpty()
  roleId: number;
}
