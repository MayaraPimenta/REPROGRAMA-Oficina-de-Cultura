export class Aluno {
  cursos: string[];

  constructor(
    public nome: string,
    public endereco: string,
    public telefone: string,
    public email: string,
  ) {}
}
