import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { Aluno } from './entities/aluno.entity';
import { AlunosRepository } from './alunos.repository';

@Injectable()
export class AlunosService {
  constructor(private readonly alunoRepository: AlunosRepository) {}

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

    console.log(aluno);
    // this.alunoRepository.salvar(aluno);
  }
}
