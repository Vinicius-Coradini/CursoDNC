//CRIANDO UM OBJETO
let player = {
    name: 'Ibrahimovic',
    age: 44,
    numGol: 550,
    //CRIANDO FUNÇÃO DENTRO DO OBJETO
    Gol(g=0) {
        console.log(`IBRA fez ${g} gol(s)`)
        this.numGol += g
    }  
}

console.log(player.name)
console.log(player.numGol)
//ADIONANDO OS GOLS
player.Gol(1)
console.log(player.numGol)

//ADICIONANDO UM CAMPO AO MEU OBJETO
player.position = 'ATA'

//DELETANDO UM CAMPO DO MEU OBJETO
delete player.age
console.log('player')