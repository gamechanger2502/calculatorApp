const display = document.getElementById("display")

function appendToDisplay(input) {

    display.value += input

}

function clearDisplay() {
    display.value = ""
    
}

function calculate() {
    try {
        display.value = eval(display.value)
    }
    catch(error) {
        display.style.fontSize = "50px"
        display.value = "Error. Please clear"
    }
   
}