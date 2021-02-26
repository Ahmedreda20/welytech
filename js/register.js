const register = document.querySelector('.signup_form');
const confirmcontainer = document.querySelector('.confirmation_container');
const closebtn = confirmcontainer.querySelector('.btn_close');

register.onsubmit = e => {
   e.preventDefault();
   confirmcontainer.classList.add('active_popup');
}
closebtn.onclick = () => confirmcontainer.classList.remove('active_popup');