//DESSA MANEIRA CRIO UMA CLASSE, DA FORMA ANTIGA, POIS ELE NÃO FUNCIONAVA COM O SISTEMA DE CLASSES
const player = function(name, position, numGol) {
    Name = name,
    Position = position,
    Gols = numGol

    this.getNome = function(){
        return Name
    }
    this.getPosition = function(){
        return Position
    }
    this.getGols = function(){
        return Gols
    }
}

const Ibrahimovic = new player('Ibrahimovic', 'ATA', 550)
console.log(Ibrahimovic.getPosition())
const Vinicius = new player('Vinicius', 'ZAG', 80)
console.log(Vinicius.getGols())