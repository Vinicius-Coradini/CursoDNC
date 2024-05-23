

function multiplicationTable() {

     
    const numberOne = parseInt(window.document.getElementById('firstInput').value);
    const numberTwo = parseInt(window.document.getElementById('secondInput').value);
    const tabuada = window.document.getElementById('tabuada')

    let result = ''

    if (isNaN(numberOne) || isNaN(numberTwo)) {
        alert('Digite os números nos campos')
        return
    }

    for (let i = 0; i <= numberTwo; i++) {
        title = `A tabuada do ${numberOne} é:`
        document.querySelector('#title').innerHTML = title

        result += `${i} X ${numberOne} = ${i * numberOne}<br>`
    }
    document.querySelector('#multiplicationTable').innerHTML = result

    tabuada.style.display = 'block'


}

