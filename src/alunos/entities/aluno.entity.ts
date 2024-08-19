export class Aluno {
  cursos: string[];
  id: string;

  constructor(
    public nome: string,
    public endereco: string,
    public telefone: string,
    public email: string,
  ) {
    this.cursos = [];
  }
}
