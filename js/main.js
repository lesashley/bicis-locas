function validateForm(){
	var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("input-email").value;
  var password = document.getElementById("input-password").value;
  var bici = document.getElementById("bici").selectedIndex;
  var social = document.getElementById("input-social").value;
//Validaciones en nombre
  if (name == null || name.length == 0 || !(/^[A-Z][a-z]*/.test(name))){
		if (name.charAt(0).toUpperCase()!= name.charAt(0)){
			alert ("Debe colocar mayúscula en nombre");
		}else{
		alert("Debe escribir un nombre válido");}
  }
	//Validaciones en apellido
	if (lastname == null || lastname.length == 0 || !(/^[A-Z][a-z]*/.test(lastname))){
		if (lastname.charAt(0).toUpperCase()!= lastname.charAt(0)){
			alert ("Debe colocar mayúscula en apellido");
		}else{
		alert("Debe escribir un apellido válido");}
  }
	//
  if(!(/\S+@\S+\.\S+/.test(email)) || email == null || email.length == 0){
			alert('Debe escribir un correo válido');
	}
  if (password == null || password.length == 0){
		alert("Debe escribir una contraseña válida");
  }
	if(password.toString().length < 6 || password.toString() == "password" ||
 			password == "123456" || password == "098754"){
		alert("Contraseña incorrecta");
	}
  if( bici == null || bici == 0 ) {
    alert("Completar datos en seleccionar bici");
  }
}
