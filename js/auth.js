const loginform = document.querySelector('.login_form');
const requiredelems = document.querySelectorAll('[required]');
const btnsubmit = document.querySelector('.btn_submit');

btnsubmit.onclick = () => {

   requiredelems.forEach(required => {
      var itval = required.value;

      if (itval !== '') {
         required.classList.remove('error_found');
      } else {
         required.classList.add('error_found');
      }
   });

}

requiredelems.forEach(elem => {
   elem.onfocus = ({ target }) => target.classList.remove('error_found');

   elem.onblur = ({ target }) => {
      if (target.value !== '') {
         target.classList.remove('error_found');
      } else {
         target.classList.add('error_found');
      }
   }
})