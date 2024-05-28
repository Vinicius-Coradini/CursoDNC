var onLamp = document.getElementById('lamp')

function brokenLamp() {
    return onLamp.src.indexOf('broken') > -1
}

function changeLamp(event) {
    if (event === 'off' && !brokenLamp()) {
        onLamp.src = '/img/off.svg'
    }
    else if (event === 'on' && !brokenLamp()) {
        onLamp.src = '/img/on.svg'
    }
}

onLamp.addEventListener('click', broken)
function broken() {
    onLamp.src = '/img/broken.svg'
}
