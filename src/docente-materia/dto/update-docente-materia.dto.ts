import { PartialType } from '@nestjs/mapped-types';
import { CreateDocenteMateriaDto } from './create-docente-materia.dto';

export class UpdateDocenteMateriaDto extends PartialType(CreateDocenteMateriaDto) {}