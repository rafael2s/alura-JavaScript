// AULA-01

// class Cliente {
//     nome;
//     cpf;
//     rg;
//     agencia;
//     saldo;
// }

// const cliente1 = new Cliente();
// const cliente2 = new Cliente();

// cliente1.nome = "Ricardo";
// cliente1.cpf = 11122233344;
// cliente1.rg = 123456789;
// cliente1.agencia = 1001;
// cliente1.saldo = 0;

// cliente2.nome = "Alice";
// cliente2.cpf = 11122233355;
// cliente2.agencia = 1001;
// cliente2.saldo = 0;

// console.log(cliente1);
// console.log(cliente2);
// =========================================================================================

// AULA-02
import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233344);
const cliente2 = new Cliente("Alice", 11122233355);

const contaCorrenteRicardo =  new ContaCorrente(1001, cliente1);
contaCorrenteRicardo.depositar(500); 

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);


