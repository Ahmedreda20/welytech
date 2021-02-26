const btnmenu = document.querySelector('.btn_menu');
const mdcontainer = document.querySelector('.md_sc_container');
const searchbtn = document.querySelector('.btn_search');
const searchcontainer = document.querySelector('.search_container');

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