
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarElementoTexto (elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto){
        asignarElementoTexto('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto;
        if(numeroDeUsuario > numeroSecreto){
            asignarElementoTexto('p','El numero secreto es menor');
        }else{
            asignarElementoTexto('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    };
    return;
}
function limpiarCaja(params) {
    document.querySelector('#valorUsuario').value='';
}
function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarElementoTexto ('p', `Ya se sortearon todos los numeros `)
    }else{
        //si el numero generado esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio(); 
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarElementoTexto ('h1', 'Juego del Numero Secreto');
    asignarElementoTexto ('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;

}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    condicionesIniciales();
    //Generar el numero aleatorio
     //Inicializar el numero intentos
    //Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true')
}

condicionesIniciales();
