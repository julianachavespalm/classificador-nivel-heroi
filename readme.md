# Classificador de Nível de Herói em JavaScript

## Objetivo

Este trecho de código é um classificador de nível para heróis baseado na experiência do herói, destinado a ser utilizado em jogos. Ele utiliza os seguintes elementos:

- **Variáveis:** Armazenam o nome do herói e a experiência (XP).
- **Operadores:** Utiliza operadores de comparação para determinar o nível do herói.
- **Laços de Repetição:** Utiliza-se laços de repetição enquanto o jogo estiver ativo.
- **Estruturas de Decisão:** São utilizadas estruturas de decisão para classificar o nível com base na experiência.

## Classificação de Nível

O código classifica o nível do herói com base na experiência (XP) fornecida da seguinte forma:

- XP entre 1001 e 2000: **Bronze**
- XP entre 2001 e 6000: **Prata**
- XP entre 6001 e 7000: **Ouro**
- XP entre 7001 e 8000: **Platina**
- XP entre 8001 e 9000: **Ascendente**
- XP entre 9001 e 10000: **Imortal**
- XP maior ou igual a 10001: **Radiante**

## Entrada e Saída

Para utilizar este trecho do jogo, o sistema espera os seguintes inputs:

- **Nome do Herói:** String que representa o nome do herói.
- **Experiência (XP):** Número inteiro que indica a experiência do herói.

Ao final, o código retorna a seguinte mensagem:

O Herói de nome {nome} está no nível de {nivel}.


Substitua `{nome}` pelo nome do herói informado e `{nivel}` pelo nível calculado com base na experiência fornecida.

## Requisitos

Para utilizar este trecho de código, você precisará de:

- **Node.js:** Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

## Como Rodar a Aplicação

Siga os passos abaixo para executar o classificador de nível de herói:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/julianachavespalm/classificador-nivel-heroi.git
   
Navegue até o diretório do projeto:
cd classificador-nivel-heroi

Abra o arquivo index.js no seu editor de código favorito e localize a função/classificador do nível de herói.

Modifique o código para incluir a lógica de entrada de dados (nome do herói e experiência) e a chamada à função/classificador.

Salve as alterações no arquivo index.js.

No terminal, execute o código:
node index.js
Após seguir esses passos, o código executará a função/classificador de nível de herói e exibirá a saída no terminal com o nome do herói e o nível calculado com base na experiência fornecida.
