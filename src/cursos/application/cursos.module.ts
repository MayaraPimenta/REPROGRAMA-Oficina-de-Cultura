import { Module } from '@nestjs/common';
import { CursosService } from './cursos.service';
import { CursosController } from '../presenter/http/cursos.controller';
import { Aluno } from 'src/alunos/domain/aluno';
import { CursoRepository } from '../persistence/cursos.repository';

@Module({
  controllers: [CursosController],
  providers: [CursosService, CursoRepository],
  imports: [Aluno],
})
export class CursosModule {}
