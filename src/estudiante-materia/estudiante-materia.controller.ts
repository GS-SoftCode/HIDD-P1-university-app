import { Controller, Get, Post, Body, Param, Delete, Query } from '@nestjs/common';
import { EstudianteMateriaService } from './estudiante-materia.service';
import { CreateEstudianteMateriaDto } from './dto/create-estudiante-materia.dto';

@Controller('estudiante-materia')
export class EstudianteMateriaController {
  constructor(private readonly estudianteMateriaService: EstudianteMateriaService) {}

  @Post()
  create(@Body() createEstudianteMateriaDto: CreateEstudianteMateriaDto) {
    return this.estudianteMateriaService.create(createEstudianteMateriaDto);
  }

  @Get()
  findAll() {
    return this.estudianteMateriaService.findAll();
  }

  @Get('buscar')
  findOne(
    @Query('id_estudiante') id_estudiante: number,
    @Query('id_materia') id_materia: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.estudianteMateriaService.findOne(+id_estudiante, +id_materia, +id_periodo);
  }

  @Delete('eliminar')
  remove(
    @Query('id_estudiante') id_estudiante: number,
    @Query('id_materia') id_materia: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.estudianteMateriaService.remove(+id_estudiante, +id_materia, +id_periodo);
  }
}