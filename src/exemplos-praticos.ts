/**
 * ==========================================================
 * EXEMPLO PRÁTICO: FUNÇÃO ASSÍNCRONA COM async/await
 * ==========================================================
 *
 * Fluxo assíncrono, passo a passo:
 *
 * 1. Ao chamar a função, ela entra em execução e cria uma nova
 *    Promise internamente.
 * 2. Dentro da Promise, usamos setTimeout para SIMULAR uma operação
 *    demorada (ex: chamada a uma API, banco de dados, etc). O código
 *    não trava esperando — o JavaScript continua rodando outras
 *    tarefas enquanto o timer conta em segundo plano (event loop).
 * 3. Quando o timer termina, chamamos resolve() (sucesso) ou
 *    reject() (erro) — isso "resolve" a Promise.
 * 4. await, usado por quem chama a função, pausa a execução daquela
 *    função assíncrona até a Promise terminar, sem bloquear o
 *    restante do programa.
 * 5. Se a Promise for rejeitada, o await lança (throw) o erro, que
 *    pode ser capturado com try/catch.
 */

// Simula uma busca de usuário em um banco de dados ou API externa
function simularBuscaUsuario(): Promise<{ id: number; nome: string }> {
    // Toda Promise recebe uma função executora com (resolve, reject)
    return new Promise((resolve) => {
        // setTimeout simula uma operação que leva tempo (ex: rede, I/O)
        setTimeout(() => {
            // resolve() marca a Promise como "cumprida" (sucesso)
            resolve({ id: 1, nome: "Vanessa" });
        }, 100); // 100ms simulando latência de rede
    });
}

/**
 * Função assíncrona pública.
 * `async` faz a função sempre retornar uma Promise, mesmo usando
 * `return` normal dentro dela.
 */
export async function buscarUsuario(): Promise<{ id: number; nome: string }> {
    // await espera a Promise interna terminar antes de continuar,
    // sem travar a thread principal
    const usuario = await simularBuscaUsuario();

    // Só chegamos aqui depois que a Promise foi resolvida
    return usuario;
}

// Simula um serviço externo de processamento de pagamento
function simularProcessamentoExterno(valor: number): Promise<string> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (valor <= 0) {
                // reject() marca a Promise como "rejeitada" (erro)
                reject(new Error("Valor inválido."));
                return;
            }
            resolve("Pagamento aprovado!");
        }, 200);
    });
}

export async function realizarPagamento(valor: number): Promise<string> {
    const resultado = await simularProcessamentoExterno(valor);
    return resultado;
}