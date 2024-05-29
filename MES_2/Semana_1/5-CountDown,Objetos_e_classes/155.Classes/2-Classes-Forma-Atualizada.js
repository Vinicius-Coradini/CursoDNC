//PARA FAZER DE UMA MANEIRA MAIS ATUALIZADA, POSSO SEGUIR DA SEGUINTE MANEIRA
class player {
    //CHAMAR FUNÇÃO CONSTRUTORA
    constructor(name, position, numGol){
        //AQUI DENTRO DECLARAMOS OS PARÂMETROS
        this.name = name,
        this.position = position,
        this.numGol = numGol
    }
    goalsScored(){
        console.log(`O ${this.name} que joga na posição ${this.position} fez ${this.numGol} gol(s) `)
    }
}

const Vinicius = new player('Vinicius', 'ZAG', 88)
Vinicius.goalsScored()
const Cristiano = new player('Cristiano Ronaldo', 'ATA', 896)
Cristiano.goalsScored()

//PARA VERIFICAR O TIPO DAS CLASSES
//O " typeof " VAI ME DIZER O TIPO DA VARIAVEL, CONSTANTE
//PODEMOS VER QUE NO FUNDO AS CLASSES SÃO FUNÇÕES CONSTRUTORAS DE OBJETOS
console.log(typeof player)