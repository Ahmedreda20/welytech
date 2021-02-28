const circle = document.querySelector('.timer');
const val = document.querySelector('.current_value .value');
const donemsg = document.querySelector('.done_msg');
const errormsg = document.querySelector('.error_msg');

window.onload = () => {
   // calc(280 - (280 * 0 / 5 * 100) / 100)
   var count = 0;
   var interval = setInterval(() => {
      count++;
      circle.style.strokeDashoffset = `calc(280 - (280 * ${ count } / 5 * 100) / 100)`;
      val.innerHTML = count;
      if (count >= 5) {
         clearInterval(interval);
         console.log(count);
         CheckModelsRedirect(true , './index.html');
      }
   }, 1000);
}

function CheckModelsRedirect(action , link) {
   if (action) {
      donemsg.classList.add('active_popup');
      errormsg.classList.remove('active_popup');
      window.open(link, '_self');
   } else {
      donemsg.classList.remove('active_popup');
      errormsg.classList.add('active_popup');
   }
}

