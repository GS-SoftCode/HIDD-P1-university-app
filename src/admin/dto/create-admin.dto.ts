import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateAdminDto {
  @IsInt()
  @IsNotEmpty()
  userId: number;
}