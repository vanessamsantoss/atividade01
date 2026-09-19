
let nome: string = "Vanessa";
let idade: number = 28;
let ativo: boolean = true;

console.log(nome, idade, ativo);

// let quantidade: number = "vinte";


// Tentei colocar o texto "vinte" numa variável que era pra ser número,
// mas o TypeScript não deixou e mostrou um erro dizendo que não dá
// pra colocar uma string onde só pode ter number, mesmo que a palavra
// pareça representar um número.

if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

let nota: number = 6;

if (nota >= 7) {
  console.log("Aprovado");
} else if (nota >= 5) {
  console.log("Recuperação");
} else {
  console.log("Reprovado");
}


let diaDaSemana: number = 3;

switch (diaDaSemana) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
}


for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let numero: number = 1;

while (numero <= 20) {
  if (numero % 2 === 0) {
    console.log(numero);
  }
  numero++;
}

let numeros: number[] = [4, 8, 15, 16, 23];
let soma: number = 0;

for (const n of numeros) {
  soma += n;
}

console.log("Soma total:", soma);

for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

let listaNumeros: number[] = [3, 7, 10, 12, 5, 8, 1];

for (const n of listaNumeros) {
  if (n % 2 === 0) {
    console.log(`${n} é par`);
  } else {
    console.log(`${n} é ímpar`);
  }
}

// function criarUsuario(
//   nome: string,
//   idade?: number,
//   ativo = true
// ) {
//   return { nome, idade, ativo };
// }

// console.log(criarUsuario(nome, idade, ativo));

// type ID = string | number;
// type Usuario = {
//   id: ID;
//   nome: string;
//   idade: number;
//   ativo: boolean;
// };
// function buscarUsuario(id: ID): Usuario{
//   return {id, nome, idade, ativo};
// }

// console.log(buscarUsuario(1));

// function classificarIdade(idade: number): string {
//   if (idade >= 18) {
//     return "Maior de idade";
//   } else if (idade >= 12) {
//     return "Adolescente";
//   } else {
//     return "Criança";
//   }
// }

// console.log(classificarIdade(idade));

// for (let i = 1; i <= idade; i += 10) {
//   console.log(nome, "- Passando pela idade:", i);
// }

// function classificarPorIdade(idade: number): string {
//   switch (idade) {
//     case 18:
//        return "Maioridade";
//        default:
//         return "outra idade";
//   }
// }

// console.log(classificarPorIdade(idade));