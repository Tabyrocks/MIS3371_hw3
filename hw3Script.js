/*
Program name: hw3Script.js
Author: Tabitha Becker
Date created: 2025-11-05
Description: Script to bring in functionality to form
*/
//Adding the variable for the error flag
function errorFlag() {
  var errorFlag = 0;
  console.log(errorFlag);
}

//Adding an event listener to call the slider, date and footer functions
document.addEventListener('DOMContentLoaded', (event) => 
  {
    numChangeSlider();
    setDate();
    getFooter();
    getStateList();
  })


// Adding in script to get current date and return it. Originally found on W3schools.com then modified
function getDate() 
  {
    const dateChange = new Date();
    let currentDay = dateChange.toLocaleDateString();
    return currentDay;
  }

// Adding script to set the current date on the form
function setDate() 
  {
    document.getElementById ("currentDate").innerHTML = getDate(); 
  }

/*Adding script to bring footer into form. Script found at 
https://stackoverflow.com/questions/63663201/i-use-a-fetch-statement-to-retrieve-my-html-footer-and-include-it-on-every-page*/
function getFooter() 
  {
    fetch('hw3-footer.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById('footerPlaceholder').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));
  }

  /*Created function using fetch API to retrieve the option list for the dropdown state list*/
  function getStateList() 
  {
    fetch('hw3-states.html')
    .then(response => response.text())
    .then(data => {
    document.getElementById("state").innerHTML = data;
    })
    .catch(error => console.error('Error loading list:', error));

  }

  //Validating the first name. The display on the css file is set to none but changes to block when the error is present. 
  // Referencing https://profjake.w3spaces.com/MIS3371/homework3.html 
function validateFname() 
  {
    const fnameValid = document.getElementById("fnameValidate").value;
    const errorFlag = 0;

    if(fnameValid.length < 1) {
      document.getElementById("fnameErrorMsg").innerHTML = "Error: First name must be 1 or more characters";
      fnameErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (fnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("fnameErrorMsg").innerHTML = "";
        fnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("fnameErrorMsg").innerHTML = "Error invalid first name: (Name can only have Letters, apostrophes and dashes)";
        fnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
  //Validating the middle name. The error only displays when an invalid character is added. Otherwise no error will appear.
  // Referencing https://profjake.w3spaces.com/MIS3371/homework3.html 
function validateMidname() 
  {
    const midnameValid = document.getElementById("midnameValidate").value;
    const errorFlag = 0;

    if(midnameValid.length < 1 ) {
      document.getElementById("midnameErrorMsg").innerHTML = "";
      midnameErrorMsg.style.display = "none";
    }

    else {
      if (midnameValid.match(/^[a-zA-Z]$/)) {
        document.getElementById("midnameErrorMsg").innerHTML = "";
        midnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("midnameErrorMsg").innerHTML = "Error invalid middle initial: (Name can only have Letters)";
        midnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Validating last name 
function validateLname() 
  {
    const lnameValid = document.getElementById("lnameValidate").value;
    const errorFlag = 0;

    if(lnameValid.length < 1) {
      document.getElementById("lnameErrorMsg").innerHTML = "Error: Last name must be 1 or more characters";
      lnameErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (lnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("lnameErrorMsg").innerHTML = "";
        lnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("lnameErrorMsg").innerHTML = "Error invalid last name: (Name can only have Letters, apostrophes and dashes)";
        lnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
 //Validating SSN. The regex pattern makes the dashes optional.
function validateSsn() 
  {
    const ssnValid = document.getElementById("ssnValidate").value;
    const errorFlag = 0;

    if(ssnValid.length < 9) {
      document.getElementById("ssnErrorMsg").innerHTML = "Error: SSN must be 9 characters";
      ssnErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (ssnValid.match(/^\d+$/)) {
        document.getElementById("ssnErrorMsg").innerHTML = "";
        ssnErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ssnErrorMsg").innerHTML = "SSN Error: (Invalid or missing characters. Must be in 555552222 format, no dashes, numbers only)";
        ssnErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
 //Validating Date of Birth.
function validateDob() 
  {
    //pulls the current date from the function getDate()
    const currentDate = new Date(getDate());
    const dobInput = document.getElementById("dobValidate").value;
    const dateErrorMsg = document.getElementById("dateErrorMsg");
    const errorFlag = 0;
   
    //Checking if the user did not enter a date
    if (!dobInput) {
      dateErrorMsg.innerHTML = "Error: Please enter a date of birth";
      dateErrorMsg.style.display = "block";
      console.error("Error: Please enter a date of birth")
      errorFlag = 1;
      // return will stop the function early if there is no date entered
      return;  
    }

    //bringing in the date the user enters
    const userDate = new Date(document.getElementById("dobValidate").value);
    //Assigning th minimum date to be 120 years prior to currentDate
    const minDate = new Date(getDate());
    minDate.setFullYear(minDate.getFullYear() - 120);

    //Checking if the user's date is greater than the current date to make sure the date is not in the future.
    
    if (userDate > currentDate) {
        dateErrorMsg.innerHTML = "Error invalid Date: (Date cannot be in the future)";
        dateErrorMsg.style.display = "block";
        console.error("Error invalid Date: (Date cannot be in the future)")
        errorFlag = 1;
    }
    //Checking if the user's date is less than the minimum date to make sure the date is not more than 120 years from current date.
    else if (userDate <= minDate) {
        dateErrorMsg.innerHTML = "Error invalid Date: (Date must be within 120 years from today)";
        dateErrorMsg.style.display = "block";
        console.error("Error invalid Date: (Date must be within 120 years from today)")
        errorFlag = 1;
    }
    //If date is within range the else statement clears the error message.
    else {
        dateErrorMsg.innerHTML = "";
        dateErrorMsg.style.display = "none";
    }
    return errorFlag
  }

/* Followed tutorial for phone number formatting in javascript at this link
https://www.youtube.com/watch?v=3Cl03G2cyAA*/
function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g,'');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength <4) return phoneNumber;
  if (phoneNumberLength <7) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  }
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6, 10)}`;
}

/* Followed tutorial for phone number formatting in javascript at this link
https://www.youtube.com/watch?v=3Cl03G2cyAA This script formats the phone number to auto generate the dashes*/
function phoneNumFormatter() {
  const inputField = document.getElementById("phoneValidate");
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}
//Validating the phone number.
function validatePhone() 
  {
    //Retrieving the entered phone number's value
    const phoneValid = document.getElementById("phoneValidate").value;
    const errorFlag = 0;

    //Checking if the phone number length is at least 10 characters.
    if(phoneValid.length < 10) {
      document.getElementById("phoneErrorMsg").innerHTML = "Error: Phone number must be 10 to 12 characters";
      phoneErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    //Phone number can be added with only digits or it can optionally have dashes but the dashes need to be in the correct spots.
    else {
      if (phoneValid.match(/[0-9]{3,3}?[-]?[0-9]{3,3}?[-]?[0-9]{4,4}$/)) {
        document.getElementById("phoneErrorMsg").innerHTML = "";
        phoneErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("phoneErrorMsg").innerHTML = "Phone Error: (Invalid or missing characters. Must be in 555-555-2222 or 5555552222 format)";
        phoneErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Verifying email address to make sure it is at least 5 characters long, 
// there is an @ symbol and it must have a dot and at least 2 characters after the dot. 
function validateEmail() 
  {
    const emailValid = document.getElementById("emailValidate").value;
    const errorFlag = 0;
    if(emailValid.length < 5) {
      document.getElementById("emailErrorMsg").innerHTML = "Error: email address must be 5 or more characters";
      emailErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (emailValid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("emailErrorMsg").innerHTML = "";
        emailErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("emailErrorMsg").innerHTML = "Email Error: (Invalid or missing characters. Must be in email@domain.com format)";
        emailErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Validating the address to make sure it only includes numbers, letters, comma, period, apostrophe, hyphen or a hashtag. 
function validateAddress() 
  {
    const addressValid = document.getElementById("addressValidate").value;
    const errorFlag = 0;

    if(addressValid.length < 2) {
      document.getElementById("addressErrorMsg").innerHTML = "Error: address must be 2 or more characters";
      addressErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (addressValid.match(/^[a-zA-Z0-9#\s,.\'-]{2,}$/)) {
        document.getElementById("addressErrorMsg").innerHTML = "";
        addressErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("addressErrorMsg").innerHTML = "Address Error: (Invalid characters, the only special characters can be a comma, period, apostrophe, hyphen or a hashtag)";
        addressErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Address 2 is optional but if entered, validating the address to make sure it only includes numbers, letters, comma, period, apostrophe, hyphen or a hashtag. 
function validateAddress2() 
  {
    const address2Valid = document.getElementById("address2Validate").value;
    const errorFlag = 0;

    if(address2Valid.length < 1) {
      document.getElementById("address2ErrorMsg").innerHTML = "";
      address2ErrorMsg.style.display = "none";
    }
    else {
      if (address2Valid.match(/^[a-zA-Z0-9#\s,.\'-]{2,}$/)) {
        document.getElementById("address2ErrorMsg").innerHTML = "";
        address2ErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("address2ErrorMsg").innerHTML = "Address 2 Error: (Invalid characters, the only special characters can be a comma, period, apostrophe, hyphen or a hashtag)";
        address2ErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Validating the City
function validateCity() 
  {
    const cityValid = document.getElementById("cityValidate").value;
    const errorFlag = 0;

    if(cityValid.length < 2) {
      document.getElementById("cityErrorMsg").innerHTML = "Error: City must be 2 or more characters";
      cityErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (cityValid.match(/^[a-zA-Z0-9`\s'-]{2,}$/)) {
        document.getElementById("cityErrorMsg").innerHTML = "";
        cityErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("cityErrorMsg").innerHTML = "City Error: (Invalid characters, the only special characters can be a hyphen or accent";
        cityErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Validating the zip code. Must be at least 5 digits but can optionally choose a - and four more digits.
function validateZip() 
  {
    const zipValid = document.getElementById("zipValidate").value;
    const errorFlag = 0;

    if(zipValid.length < 5) {
      document.getElementById("zipErrorMsg").innerHTML = "Error: Zip Code at least 5 characters";
      zipErrorMsg.style.display = "block";
      errorFlag = 1;
    }
    else {
      if (zipValid.match(/^\d{5}(?:[-]\d{4})?$/)) {
        document.getElementById("zipErrorMsg").innerHTML = "";
        zipErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("zipErrorMsg").innerHTML = "Zip Code Error: (Invalid characters, the only special character can be a hyphen and no spaces allowed";
        zipErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }
//Validating Emergency Contact information. All ec info is optional so not error will show unless something is entered incorrectly.
function validateEcFname() 
  {
    const ecFnameValid = document.getElementById("ecFnameValidate").value;
    const errorFlag = 0;

    if(ecFnameValid.length < 1) {
      document.getElementById("ecFnameErrorMsg").innerHTML = "";
      ecFnameErrorMsg.style.display = "none";
    }
    else {
      if (ecFnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("ecFnameErrorMsg").innerHTML = "";
        ecFnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecFnameErrorMsg").innerHTML = "Error invalid first name: (Name can only have Letters, apostrophes and dashes)";
        ecFnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }

function validateEcLname() 
  {
    const ecLnameValid = document.getElementById("ecLnameValidate").value;
    const errorFlag = 0;

    if(ecLnameValid.length < 1) {
      document.getElementById("ecLnameErrorMsg").innerHTML = "";
      ecLnameErrorMsg.style.display = "none";
    }
    else {
      if (ecLnameValid.match(/^([a-zA-Z]'?-?){1,30}$/)) {
        document.getElementById("ecLnameErrorMsg").innerHTML = "";
        ecLnameErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecLnameErrorMsg").innerHTML = "Error invalid last name: (Name can only have Letters, apostrophes and dashes)";
        ecLnameErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }

/* Followed tutorial for phone number formatting in javascript at this link
https://www.youtube.com/watch?v=3Cl03G2cyAA This script formats the phone number to auto generate the dashes*/
function ecPhoneNumFormatter() {
  const inputField = document.getElementById("ecPhoneValidate");
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}

function validateEcPhone() 
  {
    const ecPhoneValid = document.getElementById("ecPhoneValidate").value;
    const errorFlag = 0;

    if(ecPhoneValid.length < 1) {
      document.getElementById("ecPhoneErrorMsg").innerHTML = "";
      ecPhoneErrorMsg.style.display = "none";
    }
    else {
      if (ecPhoneValid.match(/[0-9]{3,3}?[-]?[0-9]{3,3}?[-]?[0-9]{4,4}$/)) {
        document.getElementById("ecPhoneErrorMsg").innerHTML = "";
        ecPhoneErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecPhoneErrorMsg").innerHTML = "Phone Error: (Invalid or missing characters. Must be in 555-555-2222 or 5555552222 format)";
        ecPhoneErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }

function validateEcEmail() 
  {
    const ecEmailValid = document.getElementById("ecEmailValidate").value;
    const errorFlag = 0;

    if(ecEmailValid.length < 1) {
      document.getElementById("ecEmailErrorMsg").innerHTML = "";
      ecEmailErrorMsg.style.display = "none";
    }
    else {
      if (ecEmailValid.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
        document.getElementById("ecEmailErrorMsg").innerHTML = "";
        ecEmailErrorMsg.style.display = "none";
      }
      else {
        document.getElementById("ecEmailErrorMsg").innerHTML = "Email Error: (Invalid or missing characters. Must be in email@domain.com format)";
        ecEmailErrorMsg.style.display = "block";
        errorFlag = 1;
      }
    }
    return errorFlag
  }

//Referenced https://www.w3schools.com/howto/howto_js_rangeslider.asp to bring in the slider value
function numChangeSlider()
  {
    let sliderNumsVal = document.getElementById("health-slide");
    let sliderNumsOutput = document.getElementById("sliderNums");
    sliderNumsOutput.innerHTML = sliderNumsVal.value;

    sliderNumsVal.oninput = function() {
      sliderNumsOutput.innerHTML = this.value; //When slider is moved. This.value will update the displayed number on the slider.
    }
  }
//Checking the User Id to ensure that it doesn't have any spaces, it doesn't start with a number, it is at least 5 characters long and
//the only special characters are a underscore or a dash.
function validateUserId() 
  {
    let userIdValid = document.getElementById("userIdValidate").value;
    let errorMsg = document.getElementById("userIdErrorMsg")
    const errorFlag = 0;

    if(userIdValid.length < 5 || /^[0-9]/.test(userIdValid)) {
      errorMsg.innerHTML = "Error: Username is required and must be 5 or more characters and it cannot begin with a number";
      errorMsg.style.display = "block";
      errorFlag = 1;
      }

    else if (!/^[a-zA-Z][a-zA-Z0-9_-]*$/.test(userIdValid)) {
      errorMsg.innerHTML = "Username Error: (Invalid characters- only letters, numbers, underscore or dashes allowed. No spaces.)";
      userIdErrorMsg.style.display = "block";
      errorFlag = 1;
      }
    else {
      errorMsg.innerHTML = "";
      errorMsg.style.display = "none";
      }
    return errorFlag;
  }
  

//Referencing code from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_password_val
function validatePassword() 
  {
    let passwordToValidate = document.getElementById("passwordValidate");
    let passMatch = document.getElementById("repeatPassword");
    let letterReq = document.getElementById("letterReq");
    let capLetterReq = document.getElementById("capReq");
    let numbReq = document.getElementById("numberReq");
    let specialCharReq = document.getElementById("spCharReq");
    let passLength = document.getElementById("lengthReq");
    let passMatchReq = document.getElementById("passMatch")


    passwordToValidate.onkeyup = function() {

      let passValue = passwordToValidate.value;
      let matchedValue = passMatch.value;

      //Verifying a the lowercase letter is in the password
      if(/[a-z]/.test(passValue)) {
        letterReq.classList.remove("invalid");
        letterReq.classList.add("valid");//This will change the class to valid and triggers the css script to change color to green.
      } else {
        letterReq.classList.remove("valid");
        letterReq.classList.add("invalid")//This will change the class to invalid and triggers the css script to change color to red.
      }
    //verifying a capital letter is included in the password
      if(/[A-Z]/.test(passValue)) {
        capLetterReq.classList.remove("invalid");
        capLetterReq.classList.add("valid");
      } else {
        capLetterReq.classList.remove("valid");
        capLetterReq.classList.add("invalid")
      }
    //Verifying a number is included in the password
      if(/[0-9]/.test(passValue)) {
        numbReq.classList.remove("invalid");
        numbReq.classList.add("valid");
      } else {
        numbReq.classList.remove("valid");
        numbReq.classList.add("invalid")
      }
    //Verifying a number is included in the password
      if(/[!@#%^&*()\-_=+/><.,`~]/.test(passValue)) {
        specialCharReq.classList.remove("invalid");
        specialCharReq.classList.add("valid");
      } else {
        specialCharReq.classList.remove("valid");
        specialCharReq.classList.add("invalid")
      }
      //This checks the password against the reset password.
      if(passValue === matchedValue && passValue !== "") {
        passMatchReq.classList.remove("invalid");
        passMatchReq.classList.add("valid");
      } else {
        passMatchReq.classList.remove("valid");
        passMatchReq.classList.add("invalid")
      }
    //Verifying that the length of the password is minimum of 8 characters
      if(passValue.length >= 8) {
        passLength.classList.remove("invalid");
        passLength.classList.add("valid");
      } else {
        passLength.classList.remove("valid");
        passLength.classList.add("invalid");
      } 
    }; 
  passMatch.onkeyup = passwordToValidate.onkeyup; 
  }

/*Referencing https://profjake.w3spaces.com/MIS3371/homework3.html for the removeInput() function*/
function removeInput() 
  {
    document.getElementById("infoReview").innerHTML = "";
  }

/*Referencing https://profjake.w3spaces.com/MIS3371/homework3.html for the reviewData() function*/
function reviewData() {
    //Creating variables
    let reviewContents = document.getElementById("medSignupFrm");
    let reviewOutput;
    let dataType;
    let review;
    
    //Creating table row and headers
    reviewOutput = "<table class='dataOutput'><th>Field Name</th><th>Data Type</th><th>Entered Value</th></tr>";

    for (review = 0; review < reviewContents.length; review++) {
      console.log("item: "+review+" "+reviewContents.elements[review].name+" = "+reviewContents.elements[review].value);
      dataType = reviewContents.elements[review].type;
      switch (dataType) {
        case "checkbox":
          if (reviewContents.elements[review].checked) {
            reviewOutput += "<tr><td>"+reviewContents.elements[review].name+"</td>";
            reviewOutput += "<td>"+dataType+ "</td>";
            reviewOutput += "<td class='reviewOutput'>Checked</td></tr>";
          }
          break;
        case "radio":
          if (reviewContents.elements[review].checked) {
            reviewOutput += "<tr><td>"+reviewContents.elements[review].name+"</td>";
            reviewOutput += "<td>"+dataType+ "</td>";
            reviewOutput += "<td class='reviewOutput'>"+ reviewContents.elements[review].value +"</td></tr>";
          }
          break;
        case "button": case "submit": case "reset":
          break;
        default:
            reviewOutput += "<tr><td>"+reviewContents.elements[review].name+"</td>";
            reviewOutput += "<td>"+dataType+ "</td>";
            reviewOutput += "<td class='reviewOutput'>"+ reviewContents.elements[review].value +"</td></tr>";
          }
    }
    if (reviewOutput.length > 0) {
      reviewOutput += "</table>";
      document.getElementById("infoReview").innerHTML = reviewOutput;

    }
}

