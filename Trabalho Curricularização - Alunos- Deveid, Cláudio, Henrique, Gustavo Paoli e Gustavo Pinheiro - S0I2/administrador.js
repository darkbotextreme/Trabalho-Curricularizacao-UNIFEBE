window.addEventListener('load', start);

var GlobalNames = [];
var nomes = document.querySelector('#nomes');
var nomes2 = document.querySelector('#nomes2');
var nomes3 = document.querySelector('#nomes3');
var nomes4 = document.querySelector('#nomes4');
var ul = document.createElement('ul');
var Input = document.getElementById('Input');
var form = document.getElementById('Formulario');
var form2 = document.getElementById('Formulario2');
var form3 = document.getElementById('Formulario3');
var form4 = document.getElementById('Formulario4');
var IsEditing = false;
var Posicao;

function start() {
  PrevenirComportamentoDefault(form);
  AplicarFoco(Input1);
  AplicarFoco(Input2);
  AplicarFoco(Input3);
  AplicarFoco(Input4);
  AplicarFoco(Input5);
  AplicarFoco(Input6);
  AplicarFoco(Input7);
  AplicarFoco(Input8);
  AplicarFoco(Input9);
  AplicarFoco(Input10);
  AplicarFoco(Input11);
  AplicarFoco(Input12);
  AplicarFoco(Input13);
  AplicarFoco(Input14);
  CapturarValoresDigitados(Input1);
  CapturarValoresDigitados(Input2);
  CapturarValoresDigitados(Input3);
  CapturarValoresDigitados(Input4);
  CapturarValoresDigitados(Input5);
  CapturarValoresDigitados(Input6);
  CapturarValoresDigitados(Input7);
  CapturarValoresDigitados(Input8);
  CapturarValoresDigitados(Input9);
  CapturarValoresDigitados(Input10);
  CapturarValoresDigitados(Input11);
  CapturarValoresDigitados(Input12);
  CapturarValoresDigitados(Input13);
  CapturarValoresDigitados(Input14);
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
  Input1.value = '';
  Input2.value = '';
  Input3.value = '';
  Input4.value = '';
  Input5.value = '';
  Input6.value = '';
  Input7.value = '';
  Input8.value = '';
  Input9.value = '';
  Input10.value = '';
  Input11.value = '';
  Input12.value = '';
  Input13.value = '';
  Input14.value = '';


  GlobalNames.forEach(PercorrerVetor);
  nomes.appendChild(ul);
  nomes2.appendChild(ul);
  nomes3.appendChild(ul);
  nomes4.appendChild(ul);
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