const readline = require('readline');

// Cria uma interface de leitura e escrita para interação com o usuário via console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que simula interação do jogo com API, coletando nome do jogador e nível de experiência adquirido até aquela fase do jogo
function simularInteracaoAPI() {
    return new Promise((resolve) => {
        rl.question('Digite o nome do usuário: ', (nome) => {
            // Função interna para obter a experiência do usuário
            const obterExperiencia = () => {
                rl.question('Digite o nível de experiência: ', (experiencia) => {
                    // Verifica se a experiência é um número válido e maior que zero
                    const isValid = !isNaN(experiencia) && parseInt(experiencia) > 0;
                    // Se for válido, resolve a promessa com o nome do usuário e a experiência
                    // Caso contrário, exibe uma mensagem e pede novamente a experiência
                    isValid ? resolve({ nomeUsuario: nome, nivelExperiencia: parseInt(experiencia) }) : (console.log('Por favor, insira um número de experiência válido.'), obterExperiencia());
                });
            };
            obterExperiencia(); // Chama a função para obter a experiência
        });
    });
}

// Dicionário com o nome dos níveis para cada XP acumulado
const niveisXP = {
    1001: "Bronze",
    2001: "Prata",
    6001: "Ouro",
    7001: "Platina",
    8001: "Ascendente",
    9001: "Imortal",
    10001: "Radiante"
};

// Função para determinar o nível do jogador com base na experiência
function determinarNivel(experiencia) {
    // Procura o nível correspondente à experiência fornecida
    return Object.values(niveisXP).find((nivel, index, array) => experiencia < Object.keys(niveisXP)[index]);
}

// Função principal para interagir com o usuário e exibir o nível do herói
async function main() {
    const { nomeUsuario, nivelExperiencia } = await simularInteracaoAPI();
    const nivel = determinarNivel(nivelExperiencia);
    console.log(`O Herói de nome ${nomeUsuario} está no nível de ${nivel}.`);
}

main(); // Chama a função principal para iniciar a interação
