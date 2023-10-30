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

  let errorMessages = "";
  errorMessages += inputRequiredErrorMessage(inputEmail, 'Email');
  errorMessages += inputRequiredErrorMessage(inputPassword, 'Password ');
  errorMessages += inputRequiredErrorMessage(inputAddress, 'Address');
  errorMessages += inputRequiredErrorMessage(inputAddress2, 'Second Address');
  errorMessages += inputRequiredErrorMessage(inputCity, 'City');
  errorMessages += inputRequiredErrorMessage(inputZip, 'Zip code');

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

 

function inputRequiredErrorMessage(input, fieldName){
  if (input.value.trim() == "") {
    return fieldName + 'is required<br>';
  }
  
  return "";

}

function selectBirthYearSelectHTML(startYear, endYear, defaultYear){

  let selectBirthYearHTML = "";
  for (let year = 2023; year >= 1923; year--) {
    if (year == 1990) {
      selectBirthYearHTML += `<option selected>${year}</option>`
    } else {
      selectBirthYearHTML += `<option>${year}</option>`
    }
  }

  return selectBirthYearHTML;

}

let startYear = new Date().getFullYear()
let endYear = startYear - 100;

// console.log(selectBirthYearHTML);
document.getElementById('selectBirthYear').innerHTML = selectBirthYearSelectHTML(2023, 1923, 1990);

