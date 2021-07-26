// console.log('Hello');

// console.log("This is test")

// prompt("Enter user name");
// alert("This isalert")


// var username=prompt("Enter usernmame");
// alert("you entered"+username)

// console.log("you are welcome",username)


// ////
// //input
// var un =prompt("Enter day")
// //processing
// var unm="you have entered "+ un;
// //output

// alert(unm)

var translateButton=document.querySelector("#btn-translate");
var textinput = document.querySelector('#textarea')
//console.log(translateButton)

translateButton.addEventListener("click",function clickEventhandler() {
    console.log("Clicked!")
    console.log("Input entered:", textinput.value);
})

//console.log(textinput)