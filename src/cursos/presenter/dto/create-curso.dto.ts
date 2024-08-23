import { IsArray, IsNumber, IsString, Max, Min } from 'class-validator';

export class CreateCursoDto {
  @IsString()
  nome: string;

  @IsArray()
  professor: string[];

  @IsNumber()
  @Min(1)
  @Max(10)
  tempoDuracao: number;

  @IsString()
  diaDaSemana: string[];
}
