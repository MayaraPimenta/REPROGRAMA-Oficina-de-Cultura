import { Aluno } from '../../domain/aluno';

export abstract class AlunoRepository {
  abstract salvar(aluno: Aluno): Promise<Aluno>;
  abstract listar(): Promise<Aluno[]>;
  abstract encontrarAluno(email: string): Promise<Aluno>;
}

//portas ficam na aplicação
//a porta é uma interface que define o contrato de implementação a ser implementado por um adaptador
// para que seja possível acessar a camada de dados
//na porta a classe e os metodos sao abstratos, o adapter que vai implementar pois ele acessa a camada de dados
