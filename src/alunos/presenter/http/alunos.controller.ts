import { Controller, Post, Body } from '@nestjs/common';
import { AlunosService } from '../../application/alunos.service';
import { CreateAlunoDto } from '../dto/create-aluno.dto';
import { CreateAlunoCommand } from '../../application/commands/create-aluno-command';

@Controller('alunos')
export class AlunosController {
  constructor(private readonly alunosService: AlunosService) {}

  @Post()
  cadastrar(@Body() createAlunoDto: CreateAlunoDto) {
    const commandAluno = new CreateAlunoCommand(
      createAlunoDto.nome,
      createAlunoDto.endereco,
      createAlunoDto.email,
      createAlunoDto.telefone,
      createAlunoDto.anoNascimento,
    );

    return this.alunosService.cadastrar(commandAluno);
  }
}
