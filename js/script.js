

const form = document.getElementById('formThreeId');
// se trae a JS  almacenando en una variable el ID del formulario html


function formThreeValidation(){
  var sumErrors = 0;
  // variable que acumula errores
  // si hay errores no se valida y no se envia al 
  // back-end/servidor

  form.classList.remove('is-invalid');
  // por defecto se quita la clase is-invalid

  // // form.classList.remove('was-validated');
  // por defecto se quita la clase was-validated

  var inputEmail = document.forms["formThreeName"]["inputEmailId"];
  //var email = getElementById("inputEmailId");
  // es otra forma de hacer:
  // let searcher = getElementById('inputEmailId);
  //acordar que:
  //let email =document.forms["formTwoName"]["inputEmailId"];
  // --> el primero es el [name] del form y el segundo 
  // es la [ID] del input

  var password = document.forms["formThreeName"]["inputPasswordId"];

  var repeatPassword = document.forms["formThreeName"]["inputRepeatPasswordId"];

  var city = document.forms["formThreeName"]["inputCityId"];

  var gridCheck = document.forms["formThreeName"]["inputGridCheckId"];

  if ( inputEmail.value == "" ){
    // si el campo es vacio, va hacer 3 cosas:
    email.classList.add("is-invalid");
    //1. si es vacio, le anado la clase is-invalid
    document.getElementById("emailErrorId").textContent="Introduzca tu email";
    //2. vamos anadir el siguiente mensaje de error en el elemento
//html que tenga la id "searchErrorId"
    sumErrors++ ;
    //3. acumula un error
  }else if(!validarEmail(inputEmail.value)){
    // despues de haber visto que el campo del email no es vacio...
    // Si el email introducido (inputEmailId)
    // esta diferente de la funcion de validacion
    //(abajo al final de todo) --> regex con @, ., etc. 
    //Entonces van hacer 3 acciones:
    inputEmail.classList.add("is-invalid");
    //1. si es vacio, le anado la clase is-invalid
		document.getElementById("emailErrorId").textContent = "El email no cumple el formato standard";
    //2. vamos anadir el siguiente mensaje de error en el elemento
    sumErrors ++;
    //3. acumula un error
  } 
  if ( password.value == "") {
// si el campo es vacio, va hacer 3 cosas:
password.classList.add("is-invalid");
//1.  le anado la clase is-invalid
document.getElementById("passwordErrorId").textContent="La contrasena es obligatoria";
//2.vamos anadir el siguiente mensaje de error en el elemento
//html que tenga la id "searchErrorId"
sumErrors++;
//3.acumula un error

  } 
   if ( repeatPassword.value == "") {
    // si el campo es vacio, va hacer 3 cosas:
    repeatPassword.classList.add("is-invalid");
    //1.  le anado la clase is-invalid
    document.getElementById("repeatPasswordErrorId").textContent="Es obligatorio repetir la contrasena";
    //2.vamos anadir el siguiente mensaje de error en el elemento
    sumErrors++;
    //3.acumula un error
      } 
    if (city.value == "") {
      // si el campo es vacio, va hacer 3 cosas:
      city.classList.add("is-invalid");
      //1.  le anado la clase is-invalid
      document.getElementById("cityErrorId").textContent="Es obligatorio seleccionar tu provincia";
      //2.vamos anadir el siguiente mensaje de error en el elemento
      sumErrors++;
      //3.acumula un error
        } 
      if(!gridCheck.checked){
        // si el campo gridCheck no tiene un check, van a pasar 3 acontecimentos:
      gridCheck.classList.add("is-invalid");
      //1.  le anado la clase is-invalid
      document.getElementById("gridCheckErrorId").textContent="Acepte la politica para continuar";
      //2.vamos anadir el siguiente mensaje de error en el elemento
      sumErrors++;
      //3.acumula un error
      }
  
 ////else {
    ////searcher.classList.add("was-validated");
    ////1.  le anado la clase is-invalid

  ////}

  // confirmar que sirve esta funcion para enviar el
  // formulario o no para el servidor, a depender de 
  //  si esta validado o no
   if (sumErrors > 0){
	// si acumulas mas de cero errores es un falso o un true 
     return false;
    } else{
	 	return true;
	 }
}



  form.addEventListener('blur', (event) => {
 	console.log(event);
   if(event.target.value!='') event.target.classList.remove('is-invalid');
        registerValidate();
  }, true);
// si previamente estaba con el color rojo porque estaba invalido
// y luego digitas la informaccion correcta
// no te invalida mas este campo 



function validarEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}



