### Sumário

**AULA-01 - Prólogo: regras, código e manutenção**

Este capítulo cria toda a trama dos próximos capítulos. Diferente dos capítulos que seguirão, este possui apenas o exercício obrigatório e teste.

**AULA-02 - Especificando uma Negociação**

Vimos a criação de uma classe, utilizando novos recursos JavaScript que favorecem a implementação do paradigma orientado a objeto. Vimos também que uma classe possui um constructor com os quais definimos atributos - que chamamos de propriedades - e que podemos materializar uma abstração do mundo real usando um modelo, por meio de uma classe. Outro assunto abordado é que podemos passar parâmetros no construtor de uma classe e dessa forma, garantindo que no momento em que a instância de uma classe é criada, já tenha todos os dados necessários.

Por convenção, adotamos que os atributos privados devem usar o prefixo _ (underline), indicando para o desenvolvedor que ele só pode acessá-lo. Vimos como adicionar métodos nas classes, e estes, sim, podem acessar os atributos privados.

Apresentamos uma maneira de criar um atributo, que na prática é um método, e ao acessá-lo, podemos executar o código. Moral da história: temos um método que conseguimos acessar como uma propriedade, bastando ser antecedido pela palavra especial get, desta forma, estaríamos gerando um getter. Quem acessa a sua classe acredita que se trata de uma propriedade, mas na verdade, trata-se por "debaixo dos panos" de um método.

No entanto, isto não era suficiente para garantir a integridade da nossa negociação, que não pode ser alterada. Por isso, usamos o Object.freeze() para congelar um objeto depois de criado. Como Object.freeze() é shallow (raso), ele será aplicado nas propriedades do objeto, mas as propriedades que são objetos não serão todas congeladas. A ação ficará apenas na superfície. Para resolver esta questão, falamos um pouco sobre programação defensiva. Quando alguém tentar acessar a data, nós retornaremos uma nova data. Fizemos o mesmo com o construtor e com isso, evitamos que alguém consiga de fora da classe alterar algum item do estado interno.

O que vimos foi relevante porque o modelo é uma das coisas mais importantes quando desenvolvemos o sistema. Agora que temos o modelo pronto, a aplicação poderá crescer, tendo-o como base. No fim, deixamos a sugestão da adoção de um novo hábito: substituir nas declarações de variáveis o uso de var por let, que permite um escopo de bloco e evita que as mesmas vazem para um escopo global. Antes do ES6, em JavaScript, era comum o uso de funções para a criação de um escopo para a variável.

**AULA-03 - A ligação entre as ações do usuário e o modelo**

Nós criamos a primeira Controller da negociação: NegociacaoController. Vimos como associar uma ação do usuário, como a submissão do formulário, e chamar o método controller. Para criar um negociação do DOM, tivemos que criar os elementos do DOM, equivalente ao input da quantidade, da data e do valor para capturar os valores, sendo possível depois, instanciar uma negociação. Comentamos também como não é recomendável fazer isto todas as vezes que chamarmos o método adiciona(). Por isso, colocamos como propriedade da classe NegociacaoController o elemento do DOM.

Para evitarmos escrever repetidas vezes document.querySelector, nós usamos o "truque" de colocá-lo na variável $. Mas vimos que neste processo, o querySelector perdia o contexto do document, e o this deixava de apontar para este. Para resolver o assunto, usamos a chamada para o método bind() e o $ - equivalente ao querySelector - fizesse uma referência para o document. Fizemos um sintaxe parecida com jQuery.

Falamos também que não era suficiente capturarmos a data do formulário e passá-la como parâmetro para o construtor de Date, porque o input vinha no formato ano, mês e dia. Depois, tivemos que fazer algumas transformações e vimos que o Date aceita trabalhar com alguns parâmetros. Passamos um array para o Date, também passamos uma string com ano, mês e dia, cada item separado por uma vírgula. Existem várias formas de trabalharmos com a data, mas precisamos ajustar a data que lemos no formulário e está num formato string, para o formato compatível para o construtor do Date.

**AULA-04 - Lidar com data é trabalhoso? Chame um ajudante**

Vimos que quando trabalhamos com data, precisamos transformar o formato da string para um objeto Data, com dia-mês-ano. É importante evitar a repetição do código sempre que for preciso usar a data no sistema, para isto, isolamos o trecho referente às conversões numa classe: o DateHelper. Em vez de usarmos concatenações nesta, optamos por usar uma template string que é criada com um ` (backtick, em inglês). Quando usamos a crase no início e no fim, podemos colocar expressões dentro da template string, sem precisar das concatenações.

Como a Negociacao está pronta, começamos a preparar a listagem de negociações para a exibição. Porém, nesta listagem não podemos incluir, remover ou alterar uma Negociacao - uma das regras de negócio. Então, nós criamos uma classe do modelo que recebeu o nome ListaNegociacoes. Depois, conseguimos adicionar e obter essas negociações, por meio do método adiciona() e do getter negociacoes. Porém, vimos que essa lista de negociações dentro do model não estava blindada. Qualquer um que chamasse o getter conseguiria apagar ou incluir a lista, por isso, lançamos mão da programação defensiva.

Caso o getter de ListaNegociacoes fosse chamado, o retorno seria um array original e independente de qualquer interferência de fora. Fizemos isto utilizando um array vazio, seguido da função concat(). Criamos também alguns métodos auxiliares "privados" na Controller, além de brincarmos um pouco com as expressões regulares para validarmos o texto passado para conversão de data.

**AULA-05 - Temos o modelo, mas e a view?**

Implementamos um mecanismo de View dentro da aplicação. Ou seja, nós temos uma tabela na qual exibimos os dados da negociação. Mas em vez das marcações estarem no arquivo HTML, estas foram colocadas em uma classe nova chamada NegociacaoView.js.

Como o código da tabela ficou no JavaScript, a View precisou encontrar alguma forma de se renderizar e aparecer no HTML. Por isso, nós criamos uma div que leva o id e indicou o ponto no qual o arquivo da tabela será inserido. Para realizar tal ação, a View recebeu um modelo - com qual “tampamos” as lacunas do template.

Nós ainda criamos o método _template(), utilizando a template string. Vimos que podemos gerar expressões mais "rebuscadas" para montar tags tr dinamicamente. Usamos novamente a função map() para transformar o conteúdo de um array. Além disso, utilizamos a função join() para poder concatenar todos os itens do array que equivalem às tags tr da tabela.

**AULA-06 - Generalizando a solução da nossa view**

Vimos que o código das Views NegociacoesView e MensagemView tinham trechos em comum. Nós isolamos tais partes dentro de uma classe, juntamente com o construtor que recebeu o elemento e o método update(). Depois, fizemos com que as duas Views herdassem da classe View, assim, não repetimos o código em comum. Mas coube às classes filhas implementarem o método template().

Criamos ainda uma "armadilha" para evitar a possibilidade de que o desenvolvedor se esquecesse de incluir o método, incluindo uma mensagem de erro no Console. Lembrando que um método da classe filha sobrescreve métodos da classe pai.

Depois, adicionamos o constructor() nas classes filhas com o super, que passava o parâmetro para a classe pai. Fizemos também um pequeno ajuste, retirando o prefixo _ do método template(), que anteriormente era privado. A alteração foi necessária porque os métodos template() de NegociacoesView e MensagemView precisavam sobrescrever o método em View.
