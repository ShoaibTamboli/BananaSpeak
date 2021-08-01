var Inputtext = document.querySelector('#textarea');
var Outputtext = document.querySelector('#output');
var Transaltebutton = document.querySelector('.btn-translate')


//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL = "https://api.funtranslations.com/translate/minion.json"
//var serverURL ="https://api.funtranslations.com/translate/pirate.json"

function getTranslateURL(text) {
    return serverURL + "?" + "text=" + text;
}

function errorhandler(errorhandle) {
    console.log("Some this went wrong: ", errorhandle)
}

function clickhandler() {
    // Outputtext.innerText="oioiioiooi " +Inputtext.value;    
    // console.log("click")

    var userinputtext = Inputtext.value;
    //Calling server for processing

    fetch(getTranslateURL(userinputtext))
         .then(response => response.json())
         .then(abc =>                   //console.log(abc.contents.text)) //json was replaced by abc
         { 
             var translatedtext= abc.contents.translated;
             Outputtext.innerText =translatedtext;
         })
        .catch(errorhandler)
        // .then(mm => mm.json())
        // .then(abc => console.log(abc))

    // .then(function ab(response) {return response.json()

    // })
    // .then (function abcc(ab) {console.log(ab)})
}

Transaltebutton.addEventListener("click", clickhandler);