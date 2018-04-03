 function sbmtin() {
    var elm = document.getElementById("nameRequired");
     elm.classList.add('blue');
}

/*if (document.getElementById("myCheck").checked ==false) {
  alert("needed");
}

(function() {
"use strict";

document.getElementById('sbmtin').addEventListener("submit", subFunction)

function subFunction(event) {
  event.preventDefault();
  console.log('submitted form');
}

})(); */
document.getElementById('fullForm').addEventListener("submit", subFunc);

function estimateTotal(event) {
  event.preventDefault();

  var state = document.getElementById("firstName");

  if (state.value === '') { alert('please fill shipping state');

  state.focus();
}

}

})();
