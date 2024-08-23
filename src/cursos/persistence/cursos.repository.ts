import { Aluno } from 'src/alunos/domain/aluno';
import { ICursoRepository } from '../application/ports/cursos.repository';
import { Curso } from '../domain/curso';
import uuid from 'uuid';

export class CursoRepository implements ICursoRepository {
  public cursos: Curso[] = [
    {
      id: '1',
      nome: 'Curso introdutório',
      professor: ['Ana', 'Maria'],
      tempoDuracao: 4,
      diaDaSemana: ['segunda-feira'],
      alunos: [],
    },
  ];
  //variavel cursos simula BD por enquanto

  salvar(curso: Curso): Curso {
    curso.id = uuid();
    this.cursos.push(curso);

    return curso;
  }

  matricula(cursoId: string, aluno: Aluno) {
    const curso = this.cursos.find((curso) => curso.id === cursoId);

    curso.alunos.push(aluno);
  }
}
