const menuOpciones = () => {
  let menu = Number(
    prompt(
      "seleccione la operacion que desea realizar\n1- Consultar saldo\n2- Retirar Dinero \n3- Consignar Dinero \n4- Transferir \n5- Salir"
    )
  );
  return menu;
};

let saldoCuenta = 0;
let valor = 0;
let repetir = true;
let opcion;
let usuario, contraseña;

console.log(opcion);

usuario = prompt("Ingrese su usuario: ");

if (usuario == "herrera") {
  constraseña = prompt("Ingrese su contraseña ");
  if (constraseña == "herrera") {
    while (repetir) {
      opcion = menuOpciones();

      switch (parseInt(opcion)) {
        //consultar saldo
        case 1:
          alert("Su saldo es: " + saldoCuenta);
          break;
        //Retirar dinero
        case 2:
          valor = Number(prompt("ingrese el valor a retirar: "));
          if (valor > saldoCuenta) {
            alert("El saldo en su cuenta es menor al valor a retirar");
          } else {
            alert(
              "Retiro exitoso. Su nuevo saldo es: " +
                (saldoCuenta = saldoCuenta - valor)
            );
          }
          break;
        //consignar dinero
        case 3:
          valor = Number(prompt("ingrese el valor a consignar: "));
          saldoCuenta += valor; //saldoCuenta=saldoCuenta+valor
          alert("El nuevo saldo de su cuenta es: " + saldoCuenta);
          break;
        //transferir
        case 4:
          valor = Number(prompt("ingrese el valor a transferir: "));
          if (valor > saldoCuenta) {
            alert("El saldo en su cuenta es menor al valor a transferir");
          } else {
            alert(
              "Transferencia exitosa. Su nuevo saldo es: " +
                (saldoCuenta = saldoCuenta - valor)
            );
          }
          break;
        //salir
        case 5:
          repetir = false;
          break;

        default:
          if (menu < 0 || menu > 5) {
            alert("ingrese una transaccion valida");
          }
          break;
      }
    }
  } else {
    alert("constraseña errada");
  }
} else {
  alert("El usuario no existe en la base de datos ");
}
