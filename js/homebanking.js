//Declaración de variables
var nombreUsuario = "Matias Mendez"
var saldoCuenta = 14000
var limiteExtraccion = 5000
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

var sumarDinero = function(monto) {
    saldoCuenta = saldoCuenta + monto;
}

var restarDinero = function(monto) {
    saldoCuenta = saldoCuenta - monto;
}

//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var monto = parseInt(prompt("Ingrese el nuevo límite de extracción"));
    if(isNaN(monto) == true){
        return;
    } else {
    limiteExtraccion = monto;
    actualizarLimiteEnPantalla();
    alert("Su nuevo límite de extracción es de "+ limiteExtraccion);
    }
}

function extraerDinero() {
    saldoCuentaActual = saldoCuenta
    monto = parseInt(prompt("Indique el monto a extraer"));
    if(isNaN(monto) == true){
        return;
    } else {
        if(monto>saldoCuentaActual) {
            alert("El monto ingresado supera los valores permitidos para la operación.");
        } else if(monto % 100 >= 1) {
            alert("Solo puedes extraer en billetes de 100");
        } else if(monto>limiteExtraccion) {
            alert("El monto ingresado supera su límite de extracción");
        } else {
            restarDinero(monto);
            actualizarSaldoEnPantalla();
            alert(" Has retirado: "+ monto + "\n Saldo anterior: "+ saldoCuentaActual +"\n Saldo actual: "+ saldoCuenta);
        }
    }
}

function depositarDinero() {
    saldoCuentaActual = saldoCuenta
    monto = parseInt(prompt("Indique el monto a depositar"));
        if(isNaN(monto) == true){
            return;
        } else {
    sumarDinero(monto);
    actualizarSaldoEnPantalla();
    alert(" Has depositado: "+ monto + "\n Saldo anterior: "+ saldoCuentaActual +"\n Saldo actual: "+ saldoCuenta); 
    }
}

function pagarServicio() {
    var saldoCuentaActual = saldoCuenta
    var agua = 350
    var telefono = 425
    var luz = 210
    var internet = 570
    var opcion = parseInt(prompt("Ingrese el número del servicio que desea pagar: \n 1 - Agua \n 2 - Teléfono \n 3 - Luz \n 4 - Internet"));
        switch(opcion) {
            case 1:
                if(saldoCuentaActual >= agua) {
                restarDinero(agua);
                alert("Has pagado el servicio de Agua. \n Saldo anterior: "+saldoCuentaActual+ "\n Dinero descontado: "+agua+ "\n Saldo actual: "+saldoCuenta);
                actualizarSaldoEnPantalla();
                } else {
                    alert("El precio del servicio excede su saldo");
                }
            break;
            case 2:
            if(saldoCuenta >= telefono) {
                restarDinero(telefono);
                alert("Has pagado el servicio de Teléfono. \n Saldo anterior: "+saldoCuentaActual+ "\n Dinero descontado: "+telefono+ "\n Saldo actual: "+saldoCuenta);
                actualizarSaldoEnPantalla();
                } else {
                    alert("El precio del servicio excede su saldo");
                }
            break;
            case 3:
            if(saldoCuenta >= luz) {
                restarDinero(luz);
                alert("Has pagado el servicio de Luz. \n Saldo anterior: "+saldoCuentaActual+ "\n Dinero descontado: "+luz+ "\n Saldo actual: "+saldoCuenta);
                actualizarSaldoEnPantalla();
                } else {
                    alert("El precio del servicio excede su saldo");
                }
            break;
            case 4:
            if(saldoCuenta >= internet) {
                restarDinero(internet);
                alert("Has pagado el servicio de Internet. \n Saldo anterior: "+saldoCuentaActual+ "\n Dinero descontado: "+internet+ "\n Saldo actual: "+saldoCuenta);
                actualizarSaldoEnPantalla();
                } else {
                    alert("El precio del servicio excede su saldo");
                }
            break;
            default:
                alert("El servicio ingresado no existe");
        }
}

function transferirDinero() {
    var numeroCuenta
    var cuentaAmiga1 = 1234567
    var cuentaAmiga2 = 7654321
    var monto = parseInt(prompt("Ingrese el monto que desea transferir"));
    if(isNaN(monto) == true){
        return;
    } else {
        if(monto>saldoCuenta) {
            alert("El monto ingresado supera los fondos de su cuenta");
        } else {
            numeroCuenta = parseInt(prompt("Ingrese el número de cuenta a la que desea realizar la transferencia"));
                if (numeroCuenta == cuentaAmiga1 || numeroCuenta == cuentaAmiga2) {
                    restarDinero(monto);
                    alert("Se han transferido: "+monto+"\n Cuenta destino: "+numeroCuenta);
                    actualizarSaldoEnPantalla();
                } else {
                    alert("Solo se puede transferir dinero a una cuenta amiga");
                }
        }
    }
}

function iniciarSesion() {
    var miContraseña = 1234
    var contraseña
      contraseña = parseInt(prompt("Ingrese su contraseña"));
      if(isNaN(contraseña) == true){
        saldoCuenta = 0;
        alert("Código incorrecto. Por motivos de seguridad, hemos retenido el dinero en su cuenta.");
    } else {
        if(contraseña == 1234) {
            alert("Bienvenido "+nombreUsuario+", ya puedes comenzar a realizar operaciones.");
        } else {
            saldoCuenta = 0;
            alert("Código incorrecto. Por motivos de seguridad, hemos retenido el dinero en su cuenta.");
        }
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}