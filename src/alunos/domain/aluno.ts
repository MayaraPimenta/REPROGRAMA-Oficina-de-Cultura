export class Aluno {
  cursos: string[];
  id: string;

  constructor(
    public nome: string,
    public endereco: string,
    public telefone: string,
    public email: string,
  ) {}
}

//o nest ve a entidade como uma representação da tabela no código - uma entidade persiste o dominio modela
