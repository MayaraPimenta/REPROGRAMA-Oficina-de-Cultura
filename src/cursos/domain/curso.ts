import { Aluno } from '../../alunos/domain/aluno';

export class Curso {
  public id: string;
  public alunos: Aluno[];

  constructor(
    public nome: string,
    public professor: string[],
    public tempoDuracao: number,
    public diaDaSemana: string[],
  ) {}
}
