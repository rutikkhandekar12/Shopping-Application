
function goToSignup(){

  document.getElementById('container1').style.display = 'none';
  window.location.href = 'signup.html';
}

function goToLogin(){

  document.getElementById('container1').style.display = 'none';
  window.location.href = 'login.html';
}
function handleSignup(){
  
  let name = document.getElementById('name').value;
  let Lname = document.getElementById('Lname').value;
  let email = document.getElementById('email').value;
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  if(password1 !== password2){
    document.getElementById('alert').innerHTML = "Passwords are not matching";
    return;
  }

  //checking for excisting user
  let users = JSON.parse(localStorage.getItem('users')) || [];
  let existingUser = users.email === email ? true : false;
  if(existingUser){
    document.getElementById('alert').innerHTML = "Email already used. please try again with new Email";
    return;
  }

  let newUser = {
    name,
    Lname,
    email,
    password1,
  }

  let i = 0;
  users[i] = newUser;
  localStorage.setItem('users',JSON.stringify(newUser));

  window.location.href = "shop.html";
}



// ----------------------------------login------------------------------

function login(){

  let email = document.getElementById('email-login').value;
  let password = document.getElementById('password-login').value;

  let users = JSON.parse(localStorage.getItem('users')) || [];
  let existingUser = users.email === email && users.password1 === password? true: false;

  if(existingUser){
    window.location.href = "shop.html";
  }
  else{
    document.getElementById('alert').innerHTML = "Invalid password and username";
    return;
  }
}


// ---------------------------------profile update-----------------------------------------------------------

function profileUpdate(){

  let name = document.getElementById('name-update').value;
  let Lname = document.getElementById('Lname-update').value;
  let existingUser = -1;
  let users = JSON.parse(localStorage.getItem('users')) || [];

  for(let i = 0; i< users.length ; i++){
    if(users[i].name === name){
      existingUser = i;
      break;
    }
  }
  console.log(existingUser)

  if(existingUser !== -1){
  
    users[existingUser].name = name;
    users[existingUser].Lname = Lname;

    localStorage.setItem('users', JSON.stringify(users));
    document.getElementById('alert1').innerHTML = "Updated successfully...";
  }
  else{
    document.getElementById('alert').innerHTML = "User not found";
    return;
  }
}