// first need a function to get values from the input boxes

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}


var btn = document.getElementById('sbmtButton');
btn.addEventListener('click', submit);

function update() {
  var firstName = getValue('firstName');
  var emailAddress = getValue('emailAddress');
  var enterPassword = getValue('enterPassword');

  var message = [];

  if (firstName == "") {
    message.push("First Name is required!")
  }

  if (emailAddress == "") {
    message.push("Email Address is required!")
  }

  if (enterPassword== "") {
    message.push("Password is required!")
  }

  for (i=0;i<messages.length;i++) {
        getElm('error-list').innerHTML += messages[i] + "<br>";
    }

}
