import { Module } from '@nestjs/common';
import { AlunosService } from './alunos.service';
import { AlunosController } from './alunos.controller';
import { AlunosRepository } from './alunos.repository';

@Module({
  controllers: [AlunosController, AlunosRepository],
  providers: [AlunosService],
})
export class AlunosModule {}
