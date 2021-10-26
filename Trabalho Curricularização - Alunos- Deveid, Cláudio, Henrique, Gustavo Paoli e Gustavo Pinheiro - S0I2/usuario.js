window.addEventListener('load', start);

var GlobalNames = [];
var nomes = document.querySelector('#nomes');
var ul = document.createElement('ul');
var Input = document.getElementById('Input');
var form = document.getElementById('Formulario');
var IsEditing = false;
var Posicao;

function start() {
  PrevenirComportamentoDefault(form);
  AplicarFoco(Input);
  CapturarValoresDigitados(Input);
  ExibirVetor();
}

function PrevenirComportamentoDefault(Objeto) {
  Objeto.addEventListener('submit', function (event) {
    event.preventDefault();
  });
}

function AplicarFoco(Objeto) {
  Objeto.focus();
}

function CapturarValoresDigitados(Objeto) {
  Objeto.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
      var ValorDigitado = event.target.value;


      if (ValorDigitado) {
        if (IsEditing) {

          GlobalNames.splice(Posicao, 1, ValorDigitado);
          IsEditing = false;
        } else {

          GlobalNames.push(ValorDigitado);
        }
      }

      ExibirVetor();
    }
  });
}

function ExibirVetor() {

  ul.innerHTML = '';
  Input.value = '';

  GlobalNames.forEach(PercorrerVetor);
  nomes.appendChild(ul);
}

function PercorrerVetor(item) {
  var li = document.createElement('li');

  li.appendChild(CriarBotao());
  li.appendChild(CriarSpan(item));
  ul.appendChild(li);
}

function CriarBotao() {
  var botao = document.createElement('button');

  botao.classList.add('DeleteButton');
  botao.textContent = 'x';

  return botao;
}

function CriarSpan(valor) {
  var span = document.createElement('span');
  span.textContent = valor;
  span.classList.add('clicavel');
  span.addEventListener('click', EditarItem);
 
  return span;
}

function EditarItem(event) {

  var valor = event.target.innerHTML;

  var index = GlobalNames.indexOf(valor);
  Input.value = GlobalNames[index];
  AplicarFoco(Input);
  IsEditing = true;
  Posicao = index;
}

ul.addEventListener('click', function (event) {

  if (event.target.localName === 'button') {
    
    var valor = event.srcElement.nextElementSibling.innerHTML;

    var index = GlobalNames.indexOf(valor);
    GlobalNames.splice(index, 1);

    var ancestral = event.target.parentElement;
    ancestral.remove();
    ExibirVetor();
  }
});