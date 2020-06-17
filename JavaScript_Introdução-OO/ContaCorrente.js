export class ContaCorrente {
    agencia;
    cliente;
    


    // #saldo = 0 / https://github.com/tc39/proposal-class-fields
    // É uma proposta que esta na agulha pra sair para fazer class privada
    // Enquanto não é aceita por conversão é usado o "_"saldo
    _saldo = 0;

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}