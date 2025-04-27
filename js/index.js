// let display = document.getElementById("display");

// function appendToDisplay(input){
//     display.value += input;
// }

// function clearDisplay(){
//     display.value = ""
// }
// function calculate(){
//     try{
//         display.value = eval(display.value)
//     }
//     catch(error){
//         display.value = "Error"
//     }
// }
// function deleteToDisplay(input) {
//     display.value -= input;
// }


let display = document.getElementById("display");

function appendToDisplay(input) {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN"){
        display.value = "";
        display.value += input
    }
    else{
        display.value += input;
    }
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    if (display.value === "Error" || display.value === "Infinity" || display.value === "NaN") {
        display.value = "";
    }
    
    try {

        display.value = Function('"use strict"; return (' + display.value + ')')();
        
        
        if (display.value === Infinity || display.value === -Infinity || isNaN(display.value)) {
            display.value = "Error";
        }
    } catch (error) {

        display.value = "Error";
    }
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}
