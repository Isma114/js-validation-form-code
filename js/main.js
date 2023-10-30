let registerForm = document.getElementById('register-form');
console.log(registerForm);

registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  // alert('You just submitted the form');

  let inputEmail = document.getElementById('inputEmail');
  let inputPassword = document.getElementById('inputPassword');
  let inputAddress = document.getElementById('inputAddress');
  let inputAddress2 = document.getElementById('inputAddress2');
  let inputCity = document.getElementById('inputCity');
  let inputZip = document.getElementById('inputZip');
  console.log(inputEmail.value);

  let errorMessages = ""
  if (inputEmail.value == "") {
    errorMessages += 'Email is required<br>';
  } 
  if (inputPassword.value == "") {
    errorMessages += 'Password is required<br>';
  } else if (inputPassword.value.length < 6 || inputPassword.value.length > 10) {
    errorMessages += 'Password must be between 6-10 chars<br>';
  }
  if (inputAddress.value == "") {
    errorMessages += 'Address is required<br>';
  }
  if (inputAddress2.value == "") {
    errorMessages += 'Second Address is required<br>';
  }
  if (inputCity.value == "") {
    errorMessages += 'City is required<br>';
  }
  if (inputZip.value == "") {
    errorMessages += 'Zip is required<br>';
  }
  
  let formMessages = document.getElementById('form-messages');
  if (errorMessages == "") {
    formMessages.innerHTML = 
      '<div class="alert alert-success" role="alert">' 
        + 'The form is succefully submitted!' + 
      '</div>';
  } else {
    formMessages.innerHTML = 
      '<div class="alert alert-danger" role="alert">' 
        + errorMessages + 
      '</div>';
  }
})

let selectBirthYearHTML = "";
for (let year = 2023; year >= 1923; year--) {
  if (year == 1990) {
    selectBirthYearHTML += `<option selected>${year}</option>`
  } else {
    selectBirthYearHTML += `<option>${year}</option>`
  }
}
// console.log(selectBirthYearHTML);
document.getElementById('selectBirthYear').innerHTML = selectBirthYearHTML;

