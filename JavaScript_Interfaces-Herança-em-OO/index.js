import {Cliente} from "./Cliente.js";
import {Diretor} from "./Funcionarios/Diretor.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {SistemaAutenticacao} from "./SistemaAutenticacao.js" 

const diretor = new Diretor("Antonio", 10000, 12345678900);
diretor.cadastrarSenha("111222333");

const gerente = new Gerente("Cristiano", 5000, 12345678911);
gerente.cadastrarSenha("444555666");

const cliente = new Cliente ("Carina", 12345678911, "555");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "111222333");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "444555666");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "555");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);

