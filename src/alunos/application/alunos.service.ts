import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from '../presenter/dto/create-aluno.dto';
import { Aluno } from '../domain/aluno';
import { AlunoRepository } from './../persistence/alunos.repository';

@Injectable()
export class AlunosService {
  constructor(private readonly alunoRepository: AlunoRepository) {}

  cadastrar(createAlunoDto: CreateAlunoDto): void {
    const aluno = new Aluno(
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.email,
      createAlunoDto.telefone,
    );

    if (this.alunoRepository.encontrarAluno(aluno.email)) {
      throw new NotFoundException('Aluno já cadastrado!');
    }

    this.alunoRepository.salvar(aluno);
  }
}
