import { describe, test, expect } from "vitest";
import {
    buscarUsuario,
    realizarPagamento
} from "../exemplos-praticos";

describe("Testes assíncronos", () => {
    test("deve retornar os dados do usuário", async () => {
        const usuario = await buscarUsuario();

        expect(usuario).toEqual({
            id: 1,
            nome: "Vanessa"
        });
    });

    test("deve aprovar pagamento positivo", async () => {
        const resultado = await realizarPagamento(100);

        expect(resultado).toBe("Pagamento aprovado!");
    });

    test("deve rejeitar pagamento inválido", async () => {
        await expect(realizarPagamento(0))
            .rejects
            .toThrow("Valor inválido.");
    });
});