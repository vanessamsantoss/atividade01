import { describe, test, expect } from "vitest";
import { realizarPagamento, buscarUsuario } from "./pagamento";

describe("Testes assíncronos", () => {
  test("deve retornar os dados do usuário", async () => {
    const usuario = await buscarUsuario(1);
    expect(usuario).toEqual({ id: 1, nome: "Vanessa" });
  });

  test("deve rejeitar quando o usuário não existe", async () => {
    await expect(buscarUsuario(99)).rejects.toThrow("Usuário não encontrado.");
  });

  test("deve aprovar pagamento positivo", async () => {
    const resultado = await realizarPagamento(100);
    expect(resultado).toBe("Pagamento aprovado!");
  });

  test("deve rejeitar pagamento inválido", async () => {
    await expect(realizarPagamento(0)).rejects.toThrow("Valor inválido.");
  });
})