# Exemplo: importar dados de outro arquivo e mostrar com laços

Exercício curto e independente. A ideia é uma só:

> **`dados.ts` guarda os dados. `mostraDados.ts` importa e mostra na tela.**

Nenhum dado é escrito no `mostraDados.ts`, e nenhuma linha de tela existe no
`dados.ts`. Essa separação é o conteúdo do exercício.

## Arquivos

```
exemplo-dados/
├── index.html          # a página, com os pontos vazios esperando os dados
├── css/estilo.css      # só para a página ficar legível
├── src/
│   ├── dados.ts        # os arrays: um de strings, um de números, um de objetos
│   └── mostraDados.ts  # importa e percorre com for, for...of e while
├── package.json
└── tsconfig.json
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço que aparecer, normalmente `http://localhost:5173`.
Para conferir os tipos sem abrir a página: `npm run verificar`.

> **Não abra o `index.html` com dois cliques.** No endereço `file://` os módulos
> não carregam e a página aparece em branco, sem mensagem de erro.

### Sem instalar nada (alternativa)

```bash
npx tsc --outDir js --module es2022 --target es2022 --moduleResolution node src/*.ts
# troque no index.html:  ./src/mostraDados.ts  →  ./js/mostraDados.js
python3 -m http.server 8000
```

## O que cada parte demonstra

| Parte | Laço | Por que esse laço |
| --- | --- | --- |
| 1 | `for` clássico | Queremos mostrar a **posição** de cada cor, então o índice é necessário |
| 2 | `for...of` | A posição não importa: só acumulamos soma e maior valor |
| 3 | `for...of` + `for` aninhado | Cada volta vira uma linha da tabela; o laço de dentro monta as células |
| 4 | `while` | Para assim que encontra — não percorre a lista inteira |
| 5 | `map` e `filter` | O mesmo percurso da parte 3, com o laço já pronto por dentro |

A parte 5 existe de propósito: ela mostra que `map` e `filter` **são** laços, só
que encapsulados. É um bom gancho para a aula seguinte.

## Como usar em aula

1. Abra só o `dados.ts` e pergunte: *como o outro arquivo vai enxergar isto?*
   A resposta é a palavra `export`.
2. Apague um `export` e mostre o erro no `mostraDados.ts`.
3. Troque um `for...of` por `for` clássico e vice-versa, e discuta qual fica melhor.
4. Acrescente um aluno no `dados.ts` e salve: a página se atualiza sozinha, sem
   ninguém mexer no `mostraDados.ts`. É a separação funcionando na frente deles.

## Exercícios sugeridos

1. Acrescente o campo `cidade` na interface `Aluno` e mostre-o numa coluna nova.
2. Conte, com um laço, quantos alunos estão **ativos** e mostre o total na página.
3. Descubra a **maior idade** usando `for...of`.
4. Use `continue` para não mostrar os alunos inativos na tabela.
5. Use `break` para parar de montar a tabela depois de cinco linhas.
6. Refaça o exercício 2 com `filter` e compare o número de linhas.
