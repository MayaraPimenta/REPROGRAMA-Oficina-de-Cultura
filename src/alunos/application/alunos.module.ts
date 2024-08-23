import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from '../presenter/http/alunos.controller';
import { AlunoRepository } from '../persistence/alunos.repository';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, AlunoRepository],
})
export class AlunosModule {}
