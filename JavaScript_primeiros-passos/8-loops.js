console.log(`\n Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possiveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;

while (contador < 3) {
    if(listaDeDestinos[contador] == destino) {
        console.log("\n Destino existente");
    } else {
        console.log("\n Destino inexistente");
    }
    contador += 1;
}
