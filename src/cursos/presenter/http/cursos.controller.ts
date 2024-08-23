import { Controller, Post, Body, Param } from '@nestjs/common';
import { CursosService } from '../../application/cursos.service';
import { CreateCursoDto } from '../dto/create-curso.dto';
import { Aluno } from '../../../alunos/domain/aluno';
// import { UpdateCursoDto } from '../dto/update-curso.dto';

@Controller('cursos')
export class CursosController {
  constructor(private readonly cursosService: CursosService) {}

  @Post()
  create(@Body() createCursoDto: CreateCursoDto) {
    return this.cursosService.cadastrar(createCursoDto);
  }

  @Post(':id/matricula')
  matricular(@Param('id') id: string, @Body() aluno: Aluno) {
    return this.cursosService.matricular(id, aluno);
  }

  // @Get()
  // findAll() {
  //   return this.cursosService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.cursosService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
  //   return this.cursosService.update(+id, updateCursoDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.cursosService.remove(+id);
  // }
}
