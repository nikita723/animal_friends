let upButton = document.querySelector('.pageup');

window.onscroll = function () {
 
    if (window.pageYOffset > 1500) {
    upButton.classList.add('shown');
  } else {
    upButton.classList.remove('shown');
  }
}; 

upButton.onclick = function () {
    window.scrollTo(0, 0);
};

let nikita_yakovlev_anatolievich = 1;
let bogdanov_viktor;
