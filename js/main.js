function validateForm(){
	var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("input-email").value;
  var password = document.getElementById("input-password").value;
  var bici = document.getElementById("bici").selectedIndex;
  var social = document.getElementById("input-social").value;

	var expreLetras = /([a-zñáéíóú ]+)$/;
//Validaciones en nombre
  	if (name == null || name.length == 0 || !(expreLetras.test(name))){
			alert("Debe escribir un nombre válido");}
		else if( name.charAt(0).toUpperCase()!= name.charAt(0)){
			alert ("Debe colocar la primera letra de nombre en mayúscula");
		}

		if (lastname == null || lastname.length == 0 || !(expreLetras.test(lastname))){
			alert("Debe escribir un apellido válido");}
		else if( lastname.charAt(0).toUpperCase()!= lastname.charAt(0)){
			alert ("Debe colocar la primera letra de apellido en mayúscula");
		}
	//Validacion email y contraseña
	var expreEmail = /\S+@\S+\.\S+/;
  if(!(expreEmail.test(email)) || email == null || email.length == 0){
			alert('Debe escribir un correo válido');
	} else if (password == null || password.length == 0){
		alert("Debe escribir una contraseña válida");
  } else if(password.toString().length < 6 || password.toString() == "password" ||
 			password == "123456" || password == "098754"){
		alert("Contraseña incorrecta");
	}

  if( bici == null || bici == 0 ) {
    alert("Completar datos en seleccionar bici");
  }

}
