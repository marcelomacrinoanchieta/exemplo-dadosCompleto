// ==========================================================================
// dados.ts — só os dados. Este arquivo não mostra nada na tela.
//
// A palavra `export` é o que torna cada coisa visível para os outros
// arquivos. Sem ela, nada daqui pode ser importado.
// ==========================================================================

// --------------------------------------------------------------------------
// 1) ARRAYS SIMPLES — uma lista de valores do mesmo tipo
// --------------------------------------------------------------------------

/** Lista de textos. O tipo `string[]` lê-se: "array de strings". */
export const cores: string[] = ["azul", "amarelo", "verde", "vermelho", "roxo"];

/** Lista de números. */
export const notas: number[] = [8.5, 6, 9.75, 4.5, 10, 7.25];

// --------------------------------------------------------------------------
// 2) ARRAY DE OBJETOS — uma lista em que cada item tem vários campos
//
// Primeiro descrevemos o formato de UM aluno com uma interface,
// e só então criamos a lista.
// --------------------------------------------------------------------------

export interface Aluno {
  id: number;
  nome: string;
  curso: string;
  idade: number;
  nota: number;
  ativo: boolean;
}

/** O tipo `Aluno[]` só aceita objetos que cumpram a interface acima. */
export const alunos: Aluno[] = [
  { id: 1, nome: "Ana Souza",      curso: "Sistemas de Informação", idade: 24, nota: 9.5, ativo: true },
  { id: 2, nome: "Bruno Lima",     curso: "Análise de Sistemas",    idade: 31, nota: 6.0, ativo: true },
  { id: 3, nome: "Carla Mendes",   curso: "Sistemas de Informação", idade: 22, nota: 8.25, ativo: false },
  { id: 4, nome: "Diego Rocha",    curso: "Redes de Computadores",  idade: 28, nota: 4.5, ativo: true },
  { id: 5, nome: "Elisa Martins",  curso: "Análise de Sistemas",    idade: 35, nota: 10.0, ativo: true },
  { id: 6, nome: "Felipe Andrade", curso: "Redes de Computadores",  idade: 19, nota: 7.0, ativo: false },
];
