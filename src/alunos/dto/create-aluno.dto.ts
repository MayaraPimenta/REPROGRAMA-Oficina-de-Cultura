import { IsEmail, IsNumber, IsString, Min } from 'class-validator';

export class CreateAlunoDto {
  @IsString()
  nome: string;

  @IsString()
  endereco: string;

  @IsString()
  telefone: string;

  @IsEmail()
  email: string;

  @IsNumber()
  @Min(16)
  idade: number;
}
