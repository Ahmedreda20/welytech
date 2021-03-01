const btnmenu = document.querySelector('.btn_menu');
const mdcontainer = document.querySelector('.md_sc_container');
const searchbtn = document.querySelector('.btn_search');
const searchcontainer = document.querySelector('.search_container');
const auchorlinks = document.querySelectorAll('.normal_auchor  a');

btnmenu.onclick = () => {
   btnmenu.classList.toggle('active_md');
   mdcontainer.classList.toggle('active_md');
}
searchbtn.onclick = () => {
   searchcontainer.classList.toggle('active_search');
}

searchcontainer.querySelector('.btn_close').onclick = e => {
   e.preventDefault();
   
   searchcontainer.querySelector('form').reset();
   searchcontainer.classList.remove('active_search');
}


auchorlinks.forEach(alink => {
   var fullpath = window.location.href;
   var index = fullpath.indexOf(alink.href);

   if (index >= 0) {
      alink.parentElement.classList.add('active_link');
   }

});