// let nome: string = "Vanessa";
// let idade: number = 28;
// let ativo: boolean = true;

// console.log(nome, idade, ativo);

// let quantidade: number = "20"
// // Erro: tentei colocar um texto numa variável que só aceita número.
// // O TypeScript não deixa, mesmo o texto "parecendo" um número.

// let idadeu: number = 20;
//  if (idadeu >= 18) {
//   console.log("Maior de idade");
// } else {
//   console.log("Menor de idade");
// }

// let nota: number = 6;

// if (nota >= 7) {
//   console.log("Aprovado");
// } else if (nota >= 5) {
//   console.log("Recuperação");
// } else {
//   console.log("Reprovado");
// }

let nome: string = "Vanessa";
let idade: number = 28;
let ativo: boolean = true;

console.log(nome, idade, ativo);

function criarUsuario(
  nome: string,
  idade?: number,
  ativo = true
) {
  return { nome, idade, ativo };
}

console.log(criarUsuario(nome, idade, ativo));

type ID = string | number;
type Usuario = {
  id: ID;
  nome: string;
  idade: number;
  ativo: boolean;
};
function buscarUsuario(id: ID): Usuario{
  return {id, nome, idade, ativo};
}

console.log(buscarUsuario(1));

function classificarIdade(idade: number): string {
  if (idade >= 18) {
    return "Maior de idade";
  } else if (idade >= 12) {
    return "Adolescente";
  } else {
    return "Criança";
  }
}

console.log(classificarIdade(idade));

for (let i = 1; i <= idade; i += 10) {
  console.log(nome, "- Passando pela idade:", i);
}

function classificarPorIdade(idade: number): string {
  switch (idade) {
    case 18:
       return "Maioridade";
       default:
        return "outra idade";
  }
}

console.log(classificarPorIdade(idade));