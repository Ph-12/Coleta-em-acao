function login() {
  // entrada
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

// check
 if (((email=='asd') && (password=='asd')))  {
      document.getElementById('mensagem').value = 'Usuário permitido'
  }
  else {
    document.getElementById('mensagem').value = 'Usuário não autorizado'
  }  
	


//saída ou tomada decisão
	
	//document.location = 'dashboard.html';
}

function logout() {
  document.location = 'index.html';
}