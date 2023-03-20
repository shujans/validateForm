const form = document.forms["form1"];
let password = form["password"];
let cpassword = form["cpassword"];
// let password = form["password"].value;
//   let cpassword = form["cpassword"].value;

function formValidation() {
  let fname = form["fanem"].value;
  let lname = form["lanem"].value;

  let fanemspan = document.getElementById("fanemspan");
  let lanemspan = document.getElementById("lanemspan");
  let cpasswordspan = document.getElementById("cpasswordspan");

  if (fname === "") {
    fanemspan.innerHTML = "Please write Your First Name";
    fanemspan.style.color = "red";
    return false;
  }
  if (fname.length >= 16) {
    fanemspan.innerHTML = "Please write Your First less then 15 charecter";
    fanemspan.style.color = "red";
    return false;
  }
  if (lname === "") {
    lanemspan.innerHTML = "Please write Your Last Name";
    lanemspan.style.color = "red";
    return false;
  }
  if (lname.length >= 16) {
    lanemspan.innerHTML = "Please write Your Last less then 15 charecter";
    lanemspan.style.color = "red";
    return false;
  }

  if (password.value != cpassword.value) {
    cpasswordspan.innerHTML = "Conform Password Incorrect";
    cpasswordspan.style.color = "red";
    return false;
  }
}

function passwordShowHide() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }

  if (cpassword.type === "password") {
    cpassword.type = "text";
  } else {
    cpassword.type = "Password";
  }
}
