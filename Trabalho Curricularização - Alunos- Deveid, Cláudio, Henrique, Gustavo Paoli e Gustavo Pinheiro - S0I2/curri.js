var lei = document.querySelector(".lei");
function verlei () {
    if (lei.style.display == 'none') {
        lei.style.display = 'grid';
    } else {
        lei.style.display = 'none'}
}

var login = document.querySelector(".box_totalogin");
function aparecerlogin() {
    if (login.style.display == 'none') {
        login.style.display = 'grid';
    } else {
        login.style.display = 'none'}
}

var fazercad =  document.querySelector(".box_totalcadastro");
function fazercadastro() {
    login.style.display = 'none'
    if (fazercad.style.display == 'none') {
        fazercad.style.display = 'grid';
    } else {
        fazercad.style.display = 'none'}
}

function voltar1() {
    fazercad.style.display = 'none'
    login.style.display = 'grid'
}

var esqsenha = document.querySelector(".box_ajuda");
function esqsen() {
    login.style.display = 'none'
    if (esqsenha.style.display == 'none') {
        esqsenha.style.display = 'grid';
    } else {
        esqsenha.style.display = 'none'}
}

function voltar2() {
    esqsenha.style.display = 'none'
    login.style.display = 'grid'
}

function sobre() {
    window.scrollTo({
        top: 904,
        left: 0,
        behavior: 'smooth'
    });
}
function membros() {
    window.scrollTo({
        top: 1993,
        left: 0,
        behavior: 'smooth'
    });
}
function editais() {
    window.scrollTo({
        top: 5158,
        left: 0,
        behavior: 'smooth'
    });
}
function irlei() {
    window.scrollTo({
        top: 6679,
        left: 0,
        behavior: 'smooth'
    });
}
