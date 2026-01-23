import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return this.estudianteService.create(createEstudianteDto);
  }

  @Get()
  findAll() {
    return this.estudianteService.findAll();
  }

  @Get('matriculas')
  findMatriculasByPeriodo(
    @Query('id_estudiante') id_estudiante: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.estudianteService.findMatriculasByPeriodo(Number(id_estudiante), Number(id_periodo));
  }

  @Get('filter-carrera-periodo')
  findEstudiantesFiltrados(
    @Query('id_carrera') id_carrera: number,
    @Query('id_periodo') id_periodo: number
  ) {
    return this.estudianteService.findEstudiantesFiltrados(Number(id_carrera), Number(id_periodo));
  }

  @Get('reporte-estudiantes')
  getReporte() {
    return this.estudianteService.getReporte();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estudianteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstudianteDto: UpdateEstudianteDto) {
    return this.estudianteService.update(+id, updateEstudianteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estudianteService.remove(+id);
  }
}