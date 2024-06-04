const day = document.getElementById('day')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const launch = '6 June 2024'

function counter() {
  const releaseDate = new Date(launch);
  const today = new Date();

  const totalSeconds = (releaseDate - today) / 1000;

  const resultDay = Math.floor(totalSeconds / 60 / 60 / 24)
  const resultHours = Math.floor(totalSeconds / 60 / 60) % 24
  const resultMinutes = Math.floor(totalSeconds / 60) % 60 
  const resultSeconds = Math.floor(totalSeconds) % 60

  console.log(resultDay)

  day.innerHTML = `${resultDay}D`;
  hours.innerHTML = `${formatNumber(resultHours)}H`;
  minutes.innerHTML = `${formatNumber(resultMinutes)}M`;
  seconds.innerHTML = `${formatNumber(resultSeconds)}S`;
}

function formatNumber(time) {
    return time < 10 ? `0${time}`: time;
}

counter()
 
setInterval(counter, 1000);