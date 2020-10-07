import { Conta } from "./Conta";

export class contaSalario extends Conta {
    constructor(cliente){
        super(0, cliente, 100);
    }

    super(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    }
}