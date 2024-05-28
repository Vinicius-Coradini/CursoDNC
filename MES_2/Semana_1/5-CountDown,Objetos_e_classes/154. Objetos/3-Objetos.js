//MOSTRANDO COMO DECLARAR VARIAVEIS QUE FORAM DECLARADAS FORA DO OBJETO
let position = 'ATA'

let player = {
    nome: 'Vinicius',
    position
}

player.teams = ['Flamengo', 'Bayern', 'Real Madrid']

console.log(player)

//COMO FAZER UMA BUSCAR DENTRO DO ARRAY
console.log(player.teams[0])