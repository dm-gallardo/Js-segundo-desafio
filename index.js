
//Funcion para la primera parte

function change_border() {
    let img_change = document.getElementById('img_change');
    // img_change.classList.toggle('brd_change');

    if(img_change.classList.contains('brd_change')){
        img_change.classList.remove('brd_change')
    }else{
        img_change.classList.add('brd_change')
    }
}

//funcion para la segunda parte

function count() {

    let count = document.getElementById('count');
    var stick1 = document.querySelector('#stick1').value;
    var stick2 = document.querySelector('#stick2').value;
    var stick3 = document.querySelector('#stick3').value;
    
   var conteo = parseFloat(stick1) + parseFloat(stick2) + parseFloat(stick3); 

    if ( 10 > conteo) {
        var compra = 'Puedes comprar mas!';
        document.getElementById('compra').innerText = compra;
    } else if( conteo == 10 ) {
        var compra = 'ya estas en tu limite de compra!';
        document.getElementById('compra').innerText = compra;
    } else {
        var compra = 'Lo siento no puedes comprar mas';
        document.getElementById('compra').innerText = compra;
    }
}

//Funcion para la tercera parte

function password() {
    let password = document.getElementById('password');
    var op1 = document.querySelector('#op1').value;
    var op2 = document.querySelector('#op2').value;
    var op3 = document.querySelector('#op3').value;
    if( op1 == 9 && op2 == 1 && op3 == 1 ){
        var msg = 'password 1 correct0';
        document.getElementById('msg').innerText = msg;
    } else if ( op1 == 7 && op2 == 1 && op3 == 4 ) {
        var msg = 'password 2 correcto';
        document.getElementById('msg').innerText = msg;
    } else {
        var msg = 'password incorrecto';
        document.getElementById('msg').innerText = msg;
    }
}