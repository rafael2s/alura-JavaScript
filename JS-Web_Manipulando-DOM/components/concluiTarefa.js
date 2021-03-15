const BotaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'
    botaoConclui.addEventListener('click', concluirTafera)

    return botaoConclui

}

const concluirTafera = (evento) => {

    const botaoConclui = evento.target //Descobrir qual elemento foi clicado através do "target"
    const tarefaCompleta = botaoConclui.parentElement //Variavel para pegar o pai do evento(pai do elemento)
    tarefaCompleta.classList.toggle('done') //toggle retorna um boolean (true or false) - Caso seja true aplica a class 'done' caso false tira a class 'done'

}

export default BotaoConclui