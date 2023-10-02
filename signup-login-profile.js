
function goToSignup(){

  document.getElementById('container1').style.display = 'none';
  window.location.href = 'signup.html';
}

function goToLogin(){

  document.getElementById('container1').style.display = 'none';
  window.location.href = 'login.html';
}

function handleSignup() {
  let name = document.getElementById('name').value;
  let Lname = document.getElementById('Lname').value;
  let email = document.getElementById('email').value;
  let password1 = document.getElementById('password1').value;
  let password2 = document.getElementById('password2').value;

  // Check if passwords match
  if (password1 !== password2) {
    document.getElementById('alert').innerHTML = "Passwords do not match.";
    return;
  }

  
  let users = JSON.parse(localStorage.getItem('users')) || [];

  if (!Array.isArray(users)) {
    users = [];
  }

  let existingUser = users.find(user => user.email === email);

  if (existingUser) {
    document.getElementById('alert').innerHTML = "Email already in use. Please try again with a new email.";
    return;
  }

  let newUser = {
    name: name,
    Lname: Lname,
    email: email,
    password1: password1,
  };

  // Add the new user to the users array
  users.push(newUser);

  // Store the updated users array in local storage
  localStorage.setItem('users', JSON.stringify(users));

  // Redirect to the "login.html" page or any other desired page
  window.location.href = "./login.html";
}




// ----------------------------------login------------------------------

function login() {
  let email = document.getElementById('email-login').value;
  let password = document.getElementById('password-login').value;

  localStorage.setItem("email",email)
  

  let users = JSON.parse(localStorage.getItem('users')) || [];   // getting users array from local storage

  if (!Array.isArray(users)) {
    // If users is not an array, handle the error or initialize it as an empty array
    users = [];
  }

  let existingUser = false; 

  users.forEach(user => {
    if (user.email === email && user.password1 === password) {
      existingUser = true;
      return;
    }
  });

  if (existingUser) {
    window.location.href = "shop.html";
  } else {
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