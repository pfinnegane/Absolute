let textBoxes = Array.from(document.querySelectorAll('input, button'));
let emailText = Array.from(document.querySelectorAll('input[type=email]'));

textBoxes.forEach(function(e){
  e.addEventListener("focus", () => {
    e.style.borderColor = 'blue';
  })
  e.addEventListener("blur", () => {
    if(e.value.length == 0) e.style.borderColor = 'black';
    else if(!inputLengthValidation(e)) e.style.borderColor = 'red';
    else if(inputLengthValidation(e)) e.style.borderColor = 'green'; 
  })
})

emailText.forEach(function(e){
    e.addEventListener("blur", () => {
        if(!emailContentValidation(e.value)) e.style.borderColor = 'red';
        else e.style.borderColor = 'green';
    })
})

function inputLengthValidation(e){
  if(e.value.length < 5){
    return false;
  } else if(e.value.length >= 5){
    return true;
  }
}
function emailContentValidation(e){
    if("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?".test(e)) return true;
    else return false;
}