import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from '../presenter/dto/create-curso.dto';
import { Curso } from '../domain/curso';
import { CursoRepository } from '../persistence/cursos.repository';
import { Aluno } from '../../alunos/domain/aluno';
// import { UpdateCursoDto } from '../presenter/dto/update-curso.dto';

@Injectable()
export class CursosService {
  constructor(private readonly cursoRepository: CursoRepository) {}

  cadastrar(createCursoDto: CreateCursoDto) {
    const curso = new Curso(
      createCursoDto.nome,
      createCursoDto.professor,
      createCursoDto.tempoDuracao,
      createCursoDto.diaDaSemana,
    );

    this.cursoRepository.salvar(curso);
  }

  matricular(cursoId: string, aluno: Aluno) {
    this.cursoRepository.matricula(cursoId, aluno);
  }
  // findAll() {
  //   return `This action returns all cursos`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} curso`;
  // }

  // update(id: number, updateCursoDto: UpdateCursoDto) {
  //   return `This action updates a #${id} curso`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} curso`;
  // }
}
