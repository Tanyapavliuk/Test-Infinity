const popUpEl = document.querySelector('.popUp');
const popUpButton = document.querySelector('.popUp-button');

document.documentElement.addEventListener('mouseleave', function (event) {
  popUpEl.classList.add('show');

  popUpButton.addEventListener('click', function (){
    popUpEl.classList.remove('show');
  })
});

window.onload = function() {
  setTimeout(function() {
    popUpEl.classList.add('show');
  }, 20000); 
};
