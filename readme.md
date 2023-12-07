# Simulador de Nível de Herói em JavaScript

Este programa em JavaScript simula a interação do jogo com uma API, coletando o nome do jogador e o nível de experiência adquirido até uma determinada fase do jogo. Ele usa a entrada do usuário via console para realizar essa interação.

## Funcionalidades

- **Obtenção de Dados:** O usuário é solicitado a inserir seu nome e nível de experiência no jogo.
- **Determinação de Nível:** Com base na experiência inserida, o programa determina o nível do herói usando um conjunto pré-definido de níveis e experiências.
- **Exibição de Saída:** Após a interação, o programa exibe o nível do herói correspondente à experiência inserida.

## Classificação de Nível

O código classifica o nível do herói com base na experiência (XP) fornecida da seguinte forma:

- XP entre 1001 e 2000: **Bronze**
- XP entre 2001 e 6000: **Prata**
- XP entre 6001 e 7000: **Ouro**
- XP entre 7001 e 8000: **Platina**
- XP entre 8001 e 9000: **Ascendente**
- XP entre 9001 e 10000: **Imortal**
- XP maior ou igual a 10001: **Radiante**

## Como Usar

Para executar este programa, siga estas etapas:

1. Certifique-se de ter o Node.js instalado em seu ambiente.
2. Clone ou faça o download deste repositório.
3. Abra o terminal na pasta do projeto.
4. Execute o comando `node index.js` para iniciar o programa.
5. Siga as instruções fornecidas no console para inserir o nome do jogador e o nível de experiência.

## Estrutura do Código

- **`index.js`**: Contém o código principal do programa, escrito em JavaScript.
- **`readme.md`**: Este arquivo com informações sobre o programa.

## Recursos Utilizados

- **Variáveis:** Armazenam dados como o nome do jogador e o nível de experiência.
- **Operadores:** Utilizados para comparar e verificar a validade da entrada do usuário.
- **Laços de Repetição:** Utilizados para solicitar dados do usuário até que uma entrada válida seja inserida.
- **Estruturas de Decisão:** Usadas para determinar o nível do herói com base na experiência fornecida.

## Pré-requisitos

- Node.js instalado.

## Autora

- Juliana Chaves Palm