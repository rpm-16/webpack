const drops = document.querySelectorAll('.input-dropdown');
drops.forEach((drop) => initOptions(drop));

function initOptions(drop) {
  drop.addEventListener('click', showDrop);  

  function showDrop(e) {
    //must add some solution to close another drops when new drop opens 11.02.2022
    e.target.closest('.input-dropdown').classList.add('input-dropdown--expanded');
    e.stopPropagation();
    document.addEventListener('click', hideDrop);
  }

  function hideDrop() {
    drop.classList.remove('input-dropdown--expanded'); 
    document.removeEventListener('click', hideDrop);
  }

}