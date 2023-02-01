function checkName(name) {
  if (name == "") {
    document.getElementById("nameMissing").style.visibility = "visible";
    document.myForm.name.focus();
    return false;
  }
  return true;
}

function checkDateOfBirth(DateOfBirth) {
  if (DateOfBirth == "") {
    document.getElementById("DateOfBirthMissing").style.visibility = "visible";
    return false;
  }
  return true;
}

function checkGender(gender) {
  if (gender == "") {
    document.getElementById("genderMissing").style.visibility = "visible";
    return false;
  }
  return true;
}

// END CHECK FILED FILL

// change the style when there is a change
function checkValue() {
  if (document.myForm.name.value != "") {
    document.getElementById("nameMissing").style.visibility = "hidden";
  }
}

function checkValueDateOfBirth() {
  document.getElementById("DateOfBirthMissing").style.visibility = "hidden";
}

function checkValueGender() {
  if (checkGender(document.myForm.gender.value)) {
    document.getElementById("genderMissing").style.visibility = "hidden";
  }
}

// END change the style when there is a change

// FUNGSI UTAMA
function validate() {
  //   alert("you trying to submit your form");
  var name = checkName(document.myForm.name.value);
  var DateOfBirth = checkDateOfBirth(document.myForm.DateOfBirth.value);
  var gender = checkGender(document.myForm.gender.value);

  if (name && DateOfBirth && gender) {
    return true;
  }
  return false;
}
