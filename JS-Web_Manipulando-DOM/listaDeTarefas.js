( () => {
    const criarTarefa = (evento) => {
    
        evento.preventDefault()

        const lista = document.querySelector('[data-list]')
        const input = document.querySelector('[data-form-input]')
        const valor = input.value

        const tarefa = document.createElement('li')
        tarefa.classList.add('task')
        const conteudo = `<p class="content">${valor}</p>`

        tarefa.innerHTML = conteudo

        tarefa.appendChild(BotaoConclui())
        tarefa.appendChild(BotaoDeleta())
        lista.appendChild(tarefa)
        input.value = " "

    }

    const novaTarefa = document.querySelector('[data-form-button]')

    novaTarefa.addEventListener('click', criarTarefa)

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

    const BotaoDeleta = () => {
        
        const botaoDeleta = document.createElement('button')
        botaoDeleta.classList.add('delete-button')
        botaoDeleta.innerText = 'Deletar'
        botaoDeleta.addEventListener('click', deletarTarefa)

        return botaoDeleta
    }

    const deletarTarefa = (evento) => {
        
        const botaoDeleta = evento.target
        const tarefaCompleta = botaoDeleta.parentElement
        tarefaCompleta.remove()
        return botaoDeleta
    }
})()