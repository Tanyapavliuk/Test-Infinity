const form = document.getElementById('form');
let timer;
let countdown = 600; 

function startTimer() {
  timer = setInterval(function () {
    countdown--;
    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;
    document.getElementById('timer').innerHTML =
      minutes + ' хвилин ' + seconds + ' секунд';

    if (countdown <= 0) {
      clearInterval(timer);
      alert('Час вийшов!');
    }
  }, 1000); 
}

let formPosition = form.getBoundingClientRect().top + window.scrollY;

function checkFormPosition() {
  if (window.scrollY >= formPosition) {
    startTimer();
    console.log('timer')
    window.removeEventListener('scroll', checkFormPosition);
  }
}

window.addEventListener('scroll', checkFormPosition);
