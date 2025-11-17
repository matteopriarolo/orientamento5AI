// esempi
let esempio3 = document.getElementById('esempio3');
let esempio4 = document.getElementById('esempio4');
let esempio5 = document.getElementById('esempio5');

// bottoni
let botton3 = document.getElementById('3Anno');
let botton4 = document.getElementById('4Anno');
let botton5 = document.getElementById('5Anno');
let unico = document.getElementById('anno_unico');


botton3.addEventListener('click', function() {
    esempio3.classList.toggle('visible');
    esempio4.classList.remove('visible');
    esempio5.classList.remove('visible');
})
botton4.addEventListener('click', function() {
    esempio4.classList.toggle('visible');
    esempio3.classList.remove('visible');
    esempio5.classList.remove('visible');
})
botton5.addEventListener('click', function() {
    esempio5.classList.toggle('visible');
    esempio3.classList.remove('visible');
    esempio4.classList.remove('visible');
})



