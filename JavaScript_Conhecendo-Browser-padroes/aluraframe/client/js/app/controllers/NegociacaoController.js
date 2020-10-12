class NegociacaoController {

    constructor(){
        let $ = document.querySelector.bind(document);        
        this._inputData =  $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        //let data = new Date(this._inputData.value.split('-'));
        //let data = new Date(this._inputData.value.replace(/-/g, ','));
        let data = new Date(...
            this._inputData.value
            .split('-')
            // FUNCTION NORMAL
            // .map(function(item, indice){
            //     // if(indice == 1){
            //     //     return item - 1;
            //     // }
            //     return item - indice % 2;
            // })

            // ARROW FUNCTION
            .map((item, indice) => item - indice % 2)
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        )
        console.log(negociacao);

        // Adicionar a negociação a uma lista
    }
}