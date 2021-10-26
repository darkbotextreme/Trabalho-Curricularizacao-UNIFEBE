var avaliados = document.querySelector(".text_avaliados");

function mostraavaliados () {
    if (avaliados.style.display == 'none') {
        avaliados.style.display = 'grid';
    } else {
        avaliados.style.display = 'none'}
}



var naoavaliados = document.querySelector(".text_navaliados");

function mostranaoavaliados () {
    if (naoavaliados.style.display == 'none') {
        naoavaliados.style.display = 'grid';
    } else {
        naoavaliados.style.display = 'none'}
}