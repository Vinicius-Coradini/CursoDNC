async function buscarCep() {
    var cep = document.getElementById('cep').value;

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        document.getElementById('rua').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;


    } catch (error) {
        alert(error);
    }
}

async function previsao() {
    const long = document.getElementById('longitude').value;
    const lati = document.getElementById('latitude').value;

    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&hourly=temperature_2m`);
        const data = await response.json();

        document.getElementById('resposta').innerHTML = "";
        for (let i = 0; i < data.hourly.temperature_2m.length; i++) {
            document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[i]} - ${data.hourly.temperature_2m[i]}°C </div>`;
        }
    }
    catch (error) {
        alert(error.message);
    }
}


