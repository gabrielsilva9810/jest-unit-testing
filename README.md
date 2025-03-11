# 🚀 Projeto Jest Unit Testing

Este projeto tem como objetivo testar cálculos de comissão utilizando **Jest**, um framework de testes para JavaScript.

## Requisitos

É necessário ter o **Node.js** e o **npm** instalados para rodar este projeto.

- **Node.js**: v16.13.2 (ou versão mais recente)
- **npm**: v8.3.2 (ou versão mais recente)

---

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```sh
npm install  # Instala todas as dependências do projeto
npm install cypress --save-dev  # Instale o Cypress
npm i jest -D  # Adiciona Jest como dependência de desenvolvimento
```

## Execução dos Testes
Execute o comando abaixo para rodar os testes de unidade.

```sh
npm test # Executa os testes em modo headless
```

Após executá-los, você deve ter um resultado abaixo.

```sh
> jest-unit-testing@1.0.0 test
> jest --coverage

 PASS  ./index.spec.js
  ✓ if the list is empty, the commission is zero (1 ms)
  ✓ calculates commission when there is only one item in the list
  ✓ calculates commission when there is more than one item in the list
  ✓ calculates 10% commission
  ✓ calculates 15% commission
  ✓ calculates special conditions with 20%

----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
----------|---------|----------|---------|---------|-------------------
All files |     100 |    91.66 |     100 |     100 |                   
 index.js |     100 |    91.66 |     100 |     100 | 12                
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        0.275 s, estimated 1 s
```

## Tecnologias Utilizadas
- Jest → Framework de testes unitários para JavaScript
- Node.js → Ambiente de execução para JavaScript
- npm → Gerenciador de pacotes do Node.js

---

🤝🏻 Feito por [Gabriel Silva](https://www.linkedin.com/in/gabrielsilva9810/)