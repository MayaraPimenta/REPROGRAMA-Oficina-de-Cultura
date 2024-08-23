import { Test, TestingModule } from '@nestjs/testing';
import { AlunosService } from './alunos.service';
import { AlunosRepository } from '../alunos.repository';
import { NotFoundException } from '@nestjs/common';

describe('AlunosService', () => {
  let service: AlunosService;
  let repository: AlunosRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AlunosService,
        {
          provide: AlunosRepository,
          useValue: {
            encontrarAluno: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<AlunosService>(AlunosService);
    repository = module.get<AlunosRepository>(AlunosRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  const aluno = {
    id: 1,
    nome: 'Aluno',
    endereco: 'Rua A',
    telefone: '99989998',
    email: 'email@email.com',
    cursos: [],
  };

  it('service não deve permitir cadastro de mais de um aluno com o mesmo email', () => {
    (repository.encontrarAluno as jest.Mock).mockReturnValue(aluno);

    expect(() => service.cadastrar(aluno)).toThrow(NotFoundException);
  });
});
