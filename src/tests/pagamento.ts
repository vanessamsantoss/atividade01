function simularProcessamentoExterno(valor: number): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valor <= 0) {
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

export function buscarUsuario(id: number): Promise<{ id: number; nome: string }> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === 1) {
        resolve({ id: 1, nome: "Vanessa" });
      } else {
        reject(new Error("Usuário não encontrado."));
      }
    }, 100);
  });
}