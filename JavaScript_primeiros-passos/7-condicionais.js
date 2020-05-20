console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 17;
const estaAcompanhada = true;
const temPassagemComprada = true;


console.log("Destinos Possiveis: ");
console.log(listaDeDestinos);

// if(idadeComprador >= 18) {
//     console.log("Comprador maior de idade.");
//     listaDeDestinos.splice(1,1); // remover item
// } else if(estaAcompanhada){
//     console.log("Comprador está acompanhado.");
//     listaDeDestinos.splice(1,1);
// } else {
//     console.log("Comprador menor de idade e não posso vender.");
// }

if(idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem!!");
    listaDeDestinos.splice(2,1); // remover item
} else {
    console.log("Comprador menor de idade e não posso vender.");
}

console.log("Enbarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada == true) {
    console.log("Boa viadem");
} else {
    console.log("Não pode embarcar");
}

console.log(listaDeDestinos);



// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);