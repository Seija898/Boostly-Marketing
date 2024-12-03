function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
    
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
    
}

window.onload = function() {
    window.scrollTo(0, 0); // Desplaza el scroll a la parte superior
  };

const headerEl = document.querySelector('.nav-menu');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 50){
        headerEl.classList.add('nav-menu-scrolled');
    }else if(window.scrollY <= 50){
        headerEl.classList.remove('nav-menu-scrolled');
    }
})
