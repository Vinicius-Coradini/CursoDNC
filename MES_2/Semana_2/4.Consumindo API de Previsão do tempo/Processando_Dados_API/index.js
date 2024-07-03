function buscarCep() {
    var cep = document.getElementById('cep').value;

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            return response.json()
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(erro)
        })
}

