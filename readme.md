
# Store Example

Desafio baseado em implementar um layout de desktop que foi com seu layout elaborado no Figma.

## Como rodar o projeto

1. Crie uma pasta no seu local de trabalho.

2. Faça o clone do repositório:

```bash

git clone https://github.com/headzz/vtex-store-example.git

```

3. Acesse a pasta via terminal:

```bash

cd vtex-store-example

```

4. Instale as dependências:

```bash

yarn install

```

5. Com as dependências instaladas agora basta rodar o comando:

```bash

yarn run dev

```

Após rodar o comando acima basta acessar em seu browser:

```bash

http://localhost:3000

```

A Aplicação também está disponível na versão online em:
[https://store-example-test.herokuapp.com/](https://store-example-test.herokuapp.com/)

# Tarefas automatizadas

Veja abaixo todas as tarefas automatizada utilizando yarn.

| Tarefas           | Descrição                                                                                                       |
| ----------------- | --------------------------------------------------------------------------------------------------------------- |
| **yarn run dev**   | Responsável por inicializar o servidor na porta **3000**.                                                       |
| **yarn run build** | Responsável por fazer o **next.js** compilar a aplicação.                                                       |
| **yarn run prod**  | Responsável por para testar a aplicação compilada pelo **next**, também inicializa o servidor na porta **3000** |
| **yarn start**     | Responsável por rodar a projeto após ele ter sido compilado pelo **next.js**.                                   |
| **yarn run test**  | Responsável por verificar os testes automatizados.                                                          |

## Considerações Finais
Ainda é necessário realizar alguns ajustes.
A configuração do husky e dos linters em conjunto com Typescript trouxeram mais segurança em relação a alguns tipos de falhas durante o desenvolvimento.
Alguns testes poderiam ter sido mais elaborados com o devido tempo.

Testes E2E com Cypress são uma melhoria futura.
Ainda existem melhorias que podem ser realizadas no layout responsivo.

A barra de busca funciona parcialmente. Pokemons da primeira geração são o resultado esperado. Gostaria de ter criado uma tela com os resultados possíveis existentes nela. Seria necessário melhorar a validação deste campo de busca também.
