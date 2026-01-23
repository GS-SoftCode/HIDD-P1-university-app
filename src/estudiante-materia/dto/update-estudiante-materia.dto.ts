import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteMateriaDto } from './create-estudiante-materia.dto';

export class UpdateEstudianteMateriaDto extends PartialType(CreateEstudianteMateriaDto) {}
