var Inputtext = document.querySelector('#textarea');
var Outputtext=document.querySelector('#output');
var Transaltebutton =document.querySelector('.btn-translate')

function clickhandler() {
Outputtext.innerText="oioiioiooi " +Inputtext.value;    
console.log("click")
}

Transaltebutton.addEventListener("click", clickhandler);