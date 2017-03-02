document.getElementById("enviar").onclick = function validateForm(){
	var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var email = document.getElementById("input-email").value;
  var password = document.getElementById("input-password").value;
  var bici = document.getElementById("bici").selectedIndex;
  var social = document.getElementById("input-social").value;

  if (name == null || name.length == 0 || !/^\s+$/.test(name)){
    alert("Debe escribir un nombre válido");
  }

  if (lastname == null || lastname.length == 0 || /^\s+$/.test(lastname)){
    alert("Debe escribir un apellido válido");
  }

  if(!(/\S+@\S+\.\S+/.test(email))){
			alert('Debe escribir un correo válido');
	}
/*
  if (password == null || password.length == 0 || {6}.test(password)){
    alert("Debe escribir una contraseña válida");
    else if(password == "password" || password == "123456" || password =="098754"){
      alert("Contraseñas inválidas");
    }
  }
  */




  if( bici == null || bici == 0 ) {
    alert("Completar datos en seleccionar bici");
  }



}
