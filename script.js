var operandoa;
var operandob;
var operacion;
var resultado;

function resolver() {
    operandob = resultado.textContent;
    var res = 0;
    switch (operacion) {
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
  
      case "-":
        res = parseFloat(operandoa) - parseFloat(operandob);
        break;
  
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
  
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    resultado.textContent = res;
    resetear();
}

function init() {
    resultado = document.getElementById('resul');
    var reset = document.getElementById('borrar');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
  
    uno.onclick = function () {
      resultado.textContent = resultado.textContent + "1";
    };
    dos.onclick = function () {
      resultado.textContent = resultado.textContent + "2";
    };
    tres.onclick = function () {
      resultado.textContent = resultado.textContent + "3";
    };
    cuatro.onclick = function () {
      resultado.textContent = resultado.textContent + "4";
    };
    cinco.onclick = function () {
      resultado.textContent = resultado.textContent + "5";
    };
    seis.onclick = function () {
      resultado.textContent = resultado.textContent + "6";
    };
    siete.onclick = function () {
      resultado.textContent = resultado.textContent + "7";
    };
    ocho.onclick = function () {
      resultado.textContent = resultado.textContent + "8";
    };
    nueve.onclick = function () {
      resultado.textContent = resultado.textContent + "9";
    };
    cero.onclick = function () {
      resultado.textContent = resultado.textContent + "0";
    };
    reset.onclick = function(e){
        resetear();
    }
    suma.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "+";
        limpiar();
    }
    resta.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "-";
        limpiar();
    }
    multiplicacion.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "*";
        limpiar();
    }
    division.onclick = function(e){
        operandoa = resultado.textContent;
        operacion = "/";
        limpiar();
    }
    igual.onclick = function(e){
        operandob = resultado.textContent;
        resolver();
    }
    function limpiar(){
        resultado.textContent = "";
    }
    function resetear(){
        resultado.textContent = "";
        operandoa = 0;
        operandob = 0;
        operacion = "";
    }
}

init();

