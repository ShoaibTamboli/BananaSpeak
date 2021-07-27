var Inputtext = document.querySelector('#textarea');
var Outputtext=document.querySelector('#output');
var Transaltebutton =document.querySelector('.btn-translate')

function clickhandler() {
    Outputtext.innerHTML="fiojsdfhisdhiofh "+ Inputtext.value;
    
};

Transaltebutton.addEventListener("click", clickhandler)

