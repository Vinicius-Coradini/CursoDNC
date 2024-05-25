function changeLamp(event) {
    var onLamp = document.getElementById('onLamp')
    var offLamp = document.getElementById('offLamp');
    var brokenLamp = document.getElementById('brokenLamp')

    var clickedButton = event.target; // O elemento que foi clicado

    if (clickedButton.id === 'off') {
        onLamp.style.display = "none"
        brokenLamp.style.display = "none"
        offLamp.style.display = "block"
        console.log('off')
    }
    else if (clickedButton.id === 'on') {
        onLamp.style.display = "block"
        brokenLamp.style.display = "none"
        offLamp.style.display = "none"
        console.log('on')
    }
    else if (clickedButton.id === 'onLamp') {
        onLamp.style.display = "none"
        brokenLamp.style.display = "block"
        brokemLamp.style.margin = '0 auto'
        offLamp.style.display = "none"
        console.log('broken')
    }
    else if (clickedButton.id === 'offLamp') {
        onLamp.style.display = "none"
        brokenLamp.style.display = "block"
        offLamp.style.display = "none"
        console.log('broken')
    }
}