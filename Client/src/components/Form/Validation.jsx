function Validation(userData){ 

  const errors = {}
  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexPasswordNumber = /.*\d+.*/;
  const regexPassword = /^[a-zA-Z0-9]{6,10}$/;

  if(!regexEmail.test(userData.username)){
    errors.username = "Digite un email válido!"
  }
  if(!userData.username){
    errors.username = "Por favor, llene este campo!"
  }
  if(userData.username.lenght > 35){
    errors.username = "No puede tener más de 35 caracteres!"
  }
  if(!regexPasswordNumber.test(userData.password)){
    errors.password = "Debe tener al menos un numero!"
  }
  if(regexPassword.test(userData.password)){
    errors.password = "Debbe tener entre  6 y 10 caracteres!"
  }

  return errors
}

export default Validation
