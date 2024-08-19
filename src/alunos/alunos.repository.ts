import { Injectable } from '@nestjs/common';
import { Aluno } from './entities/aluno.entity';
import { uuid } from 'uuid';

@Injectable()
export class AlunosRepository {
  private readonly alunos: Aluno[] = [];

  salvar(aluno: Aluno): void {
    aluno.id = uuid();
    this.alunos.push(aluno);

    console.log(`salvando aluno ${aluno}`);
  }

  encontrarAluno(email): Aluno | undefined {
    return this.alunos.find((aluno) => aluno.email === email);
  }
}
