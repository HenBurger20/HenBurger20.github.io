const btn = document.getElementById("btn");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const msgInput = document.getElementById("msg");
const errText = document.getElementById("error");

btn.addEventListener("click", function(event) {
  event.preventDefault();  
  
  if (nameInput.value.length < 1) {
    
    errText.textContent = "Ditt namn fattas!";
  } else if (emailInput.value.length < 1) {
    
    errText.textContent = "Din email fattas!";
  } else if (msgInput.value.length < 1) {
    
    errText.textContent = "Ska du inte skicka en text?";
  } else {
    errText.textContent = "";
  }
})

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}
