class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);     

        this._inputData =  $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');

        this._listaNegociacoes = new Bind (
            new ListaNegociacoes(), 
            new NegociacoesView($('#negociacoesView')), 
            'adiciona', 'esvazia');
        
        this._mensagem = new Bind(
            new Mensagem(), 
            new MensagemView($('#mensagemView')),
            'texto');
    }

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));

        this._listaNegociacoes.adiciona(this._criaNegociacao());        
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._limpaFormulario();
        

        // Adicionar a negociação a uma lista
    }

    importaNegociacoes(){
        
        let service = new NegociacaoService();
        
        Promise.all([
            service.obterNegociacaoDaSemana(), 
            service.obterNegociacaoDaSemanaAnterior(), 
            service.obterNegociacaoDaSemanaRetrasada()]
        ).then(negociacoes => {
            negociacoes
            .reduce((arrayAchatado, array) => arrayAchatado.concat(array), [])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = "Negociacoes importadas com sucesso";
        })
        .catch(error => this._mensagem.texto = error);

    }

    apaga(){

        this._listaNegociacoes.esvazia();
        this._mensagem.text = 'Negociações apagadas com sucesso';
    }

    _criaNegociacao(){
        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario(){
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;
        this._inputData.focus();
    };
}