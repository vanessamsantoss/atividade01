# Análise da API Pública ViaCEP

## Visão Geral

A **ViaCEP** é uma API REST pública e gratuita para consulta de endereços brasileiros a partir do CEP (Código de Endereçamento Postal).

- **Base URL:** `https://viacep.com.br`
- **Autenticação:** não requer
- **Rate limit:** não há limite documentado
- **Métodos suportados:** apenas **GET** (é uma API somente de consulta/leitura, sem operações de escrita)

---

## Endpoints GET

### 1. Busca por CEP

**`GET /ws/{cep}/{formato}`**

**Finalidade:** retorna o endereço completo a partir de um CEP específico.

**Parâmetros de URL:**

| Parâmetro | Tipo | Obrigatório | Descrição |
|---|---|---|---|
| `cep` | string | Sim | 8 dígitos, com ou sem hífen |
| `formato` | string | Sim | `json`, `xml`, `piped` ou `querty` |

**Exemplo de request:**