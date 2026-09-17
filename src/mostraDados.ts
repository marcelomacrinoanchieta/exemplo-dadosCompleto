// ==========================================================================
// mostraDados.ts — importa os dados e os mostra na tela usando LAÇOS.
//
// Aqui não existe nenhum dado: tudo vem do dados.ts pela linha de import.
// ==========================================================================

import { alunos, cores, notas } from "./dados";
import type { Aluno } from "./dados";

/** Devolve o ponto da página com aquele id, ou avisa se ele não existir. */
function elemento(id: string): HTMLElement {
  const encontrado = document.getElementById(id);
  if (!encontrado) {
    throw new Error(`Não existe nenhum elemento com o id "${id}" no index.html.`);
  }
  return encontrado;
}

// ==========================================================================
// PARTE 1 — array simples com for CLÁSSICO (com índice)
// ==========================================================================
const listaCores = elemento("lista-cores");

for (let i = 0; i < cores.length; i++) {
  const item = document.createElement("li");
  item.className = "cor";
  // o índice é útil aqui: queremos mostrar a posição de cada cor
  item.textContent = `${i}  →  ${cores[i]}`;
  listaCores.append(item);

  console.log(`cores[${i}] = ${cores[i]}`);
}

elemento("total-cores").textContent = String(cores.length);

// ==========================================================================
// PARTE 2 — array de números com for...of, acumulando um total
// ==========================================================================
let soma = 0;
let maior = notas[0];

for (const nota of notas) {
  soma += nota;
  if (nota > maior) {
    maior = nota;
  }
}

const media = soma / notas.length;

elemento("notas-lista").textContent = notas.join(" · ");
elemento("notas-soma").textContent = soma.toFixed(2);
elemento("notas-media").textContent = media.toFixed(2);
elemento("notas-maior").textContent = maior.toFixed(2);

// ==========================================================================
// PARTE 3 — array de OBJETOS com for...of, montando uma tabela
// ==========================================================================
const corpoDaTabela = elemento("corpo-tabela");

for (const aluno of alunos) {
  const linha = document.createElement("tr");

  // uma célula para cada campo do objeto
  const celulas: string[] = [
    String(aluno.id),
    aluno.nome,
    aluno.curso,
    `${aluno.idade} anos`,
    aluno.nota.toFixed(1),
  ];

  for (const texto of celulas) {
    const celula = document.createElement("td");
    celula.textContent = texto;
    linha.append(celula);
  }

  // a última célula recebe uma etiqueta colorida
  const celulaSituacao = document.createElement("td");
  const etiqueta = document.createElement("span");
  etiqueta.className = aluno.ativo ? "etiqueta etiqueta--ativo" : "etiqueta etiqueta--inativo";
  etiqueta.textContent = aluno.ativo ? "ativo" : "inativo";
  celulaSituacao.append(etiqueta);
  linha.append(celulaSituacao);

  // destaca quem está abaixo da média
  if (aluno.nota < 7) {
    linha.className = "linha--atencao";
  }

  corpoDaTabela.append(linha);
  console.log(`${aluno.nome} — ${aluno.curso} — nota ${aluno.nota}`);
}

elemento("total-alunos").textContent = String(alunos.length);

// ==========================================================================
// PARTE 4 — while: para assim que encontra o que procura
// ==========================================================================
let posicao = 0;

// avança enquanto NÃO encontrar um aluno com nota abaixo de 7
while (posicao < alunos.length && alunos[posicao].nota >= 7) {
  posicao++;
}

if (posicao < alunos.length) {
  const encontrado: Aluno = alunos[posicao];
  elemento("resultado-while").textContent =
    `Primeiro aluno abaixo de 7: ${encontrado.nome} (nota ${encontrado.nota}), na posição ${posicao}.`;
} else {
  elemento("resultado-while").textContent = "Nenhum aluno está abaixo de 7.";
}

// ==========================================================================
// PARTE 5 — o mesmo resultado da Parte 3, agora sem laço escrito à mão
//
// Compare com a Parte 3: o map faz exatamente o mesmo percurso,
// só que o laço já vem pronto dentro dele.
// ==========================================================================
const nomes: string[] = alunos.map((aluno) => aluno.nome);
elemento("nomes-com-map").textContent = nomes.join(", ");

const aprovados: Aluno[] = alunos.filter((aluno) => aluno.nota >= 7);
elemento("aprovados-com-filter").textContent =
  `${aprovados.length} de ${alunos.length} alunos com nota 7 ou mais.`;

console.log("Pronto: dados importados de dados.ts e mostrados na tela.");
