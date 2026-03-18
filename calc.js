let visor = document.getElementById("visor");

function addNumero(num){
    visor.value += num;
}

function addOperador(op){
    visor.value - op;
}

function calcular(){
    try{
        visor.value = eval (visor.value);
    }catch{
        visor.value = "Erro";
    }
}
function limpar() {
    visor.value = "";
}