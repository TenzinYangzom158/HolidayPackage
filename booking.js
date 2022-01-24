let userName;
let email;
let password;
let password2;
let phoneno;


 onlyChar=(event)=> {
  let input = event.which;
  // KeyCode Values
  if (input > 47 && input < 58) return false;
  else return true;
}

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};

validateForm = (event) => {
  event.preventDefault();
  checkName("firstname");
  checkName("lastname");
  checkUserName();
  checkPassword();
  confirmPassword();
  checkPhoneNo();
  checkEmail();
};

checkName = (id) => {
  const name = document.getElementById(id);
  //console.log(id)
  const nameVal = name.value.trim();
  if (nameVal === "") {
    //console.log(firstNameVal)
    return error(name, "The name field is required");
  } else if (id === "firstname" && nameVal.length < 3) {
    return error(name, "Cannot be less than three");
  } else {
    return success(name);
  }
};

checkUserName = () => {
  userName = document.getElementById("username");
  const userNameVal = userName.value.trim();

  if (userNameVal === "") {
    return error(userName, "Username is required \n" + showSuggestions());
  } else if (userNameVal.length < 5) {
    return error(userName, "Minimum 5 Charactters \n" + showSuggestions());
  } else {
    return success(userName);
  }
};
checkPassword = () => {
  password = document.getElementById("password");
  let passwordVal = password.value.trim();
  let passwordRegex1 = /[a-z]/;
  let passwordRegex2 = /[A-Z]/;
  let passwordRegex3 = /[0-9]/;
  let passwordRegex4 = /[~`!@#$%^&*;:"<>,./?]/;
  let passwordRegex5 = /[-_+={}]/;
  let passwordRegex6 = /[(){}|]/;
  let passwordRegex7 = /[/]/;
  let passwordRegex8 = /[\[\]]/;

  if (
    (passwordVal.length >= 8 && passwordVal.length <=14) &&
    passwordRegex1.test(passwordVal) &&
    passwordRegex2.test(passwordVal) &&
    passwordRegex3.test(passwordVal) &&

    (passwordRegex4.test(passwordVal) ||
      passwordRegex5.test(passwordVal) ||
      passwordRegex6.test(passwordVal) ||
      passwordRegex7.test(passwordVal) ||
      passwordRegex8.test(passwordVal))
  )
    return success(password);
  else {
    return error(
      password,
      ' Password must be between 8-14 characters that include atleast 1 lowercase, 1 uppercase, 1 number and 1 special character'
    );
  }
};

confirmPassword = () => {
  password2 = document.getElementById("password2");
  password2Val = password2.value.trim();

  if (password2Val === "") {
    return error(password2, "Re-enter password");
  } else if (password2Val !== password.value) {
    return error(password2, "Password did not match");
  } else {
    return success(password2);
  }
};
checkPhoneNo = () => {
  phoneNo = document.getElementById("phoneno");
  const phoneNoVal = phoneNo.value.trim();
  const phoneRegex = /[0-9]{10}/;

  if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
    return success(phoneNo);
  } else {
    return error(phoneNo, "Should contain only 10 digits");
  }
};

checkEmail =()=>{
  email = document.getElementById('email');
  let emailVal = email.value.trim();
 
  const emailRegex = /([a-z0-9\.\-_]{5,25})@christuniversity.in$/;

  if(emailRegex.test(emailVal)){
    
    return success(email);
  }else {
    return error(email,"Bruh, that email address is invalid");
  }
  
}

success = (input) => {
  const formControl = input.parentElement;

  formControl.className = "form-control success";
};

error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  if (document.getElementById("username") === input) {
    formControl.className = "form-control error username";
    //console.log(formControl.className);
  } else if (document.getElementById("password") === input) {
    formControl.className = "form-control error password";
  } else {
    formControl.className = "form-control error";
  }
};

showSuggestions = () => {
  const fname = document.getElementById("firstname");

  const fnameVal = fname.value.trim();
  const lname = document.getElementById("lastname");

  const lnameVal = lname.value.trim();

  const userNameSuggArry = [
    fnameVal + lnameVal + randNoGen(),
    lnameVal + fnameVal + randNoGen(),
    randNoGen() + fnameVal + lnameVal,
  ];
  console.log(userNameSuggArry);
  if (fnameVal.length !== 0 && lnameVal.length !== 0) {
    return (
      " Suggestion: " +
      userNameSuggArry[0] +
      "," +
      userNameSuggArry[1] +
      "," +
      userNameSuggArry[2]
    );
  } else {
    return "";
  }
};

randNoGen = () => {
  randNum = Math.floor(Math.random() * 100);
  return randNum;
};
