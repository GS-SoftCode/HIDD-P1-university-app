import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { DocenteService } from './docente.service';
import { CreateDocenteDto } from './dto/create-docente.dto';
import { UpdateDocenteDto } from './dto/update-docente.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('docente')
export class DocenteController {
  constructor(private readonly docenteService: DocenteService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createDocenteDto: CreateDocenteDto) {
    return this.docenteService.create(createDocenteDto);
  }

  @Get()
  findAll() {
    return this.docenteService.findAll();
  }

  @Get('filter-multiples-materias')
  findDocentesMultiMaterias() {
    return this.docenteService.findDocentesMultiMaterias();
  }

  @Get('filter')
  findDocentesFiltrados(@Query('especialidad') especialidad?: string) {
    return this.docenteService.findDocentesFiltrados(especialidad);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.docenteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocenteDto: UpdateDocenteDto) {
    return this.docenteService.update(+id, updateDocenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.docenteService.remove(+id);
  }
}