import { Aluno } from '../../../alunos/domain/aluno';
import { Curso } from '../../domain/curso';

export abstract class ICursoRepository {
  abstract salvar(curso: Curso): Curso;
  abstract matricula(cursoId: string, aluno: Aluno);
}
