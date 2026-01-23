import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { DocenteMateriaService } from './docente-materia.service';
import { CreateDocenteMateriaDto } from './dto/create-docente-materia.dto';

@Controller('docente-materia')
export class DocenteMateriaController {
  constructor(private readonly docenteMateriaService: DocenteMateriaService) {}

  @Post()
  create(@Body() createDocenteMateriaDto: CreateDocenteMateriaDto) {
    return this.docenteMateriaService.create(createDocenteMateriaDto);
  }

  @Get()
  findAll() {
    return this.docenteMateriaService.findAll();
  }

  @Get('buscar')
  findOne(
    @Query('id_docente') id_docente: number,
    @Query('id_materia') id_materia: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.docenteMateriaService.findOne(+id_docente, +id_materia, +id_periodo);
  }

  @Delete('eliminar')
  remove(
    @Query('id_docente') id_docente: number,
    @Query('id_materia') id_materia: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.docenteMateriaService.remove(+id_docente, +id_materia, +id_periodo);
  }
}
