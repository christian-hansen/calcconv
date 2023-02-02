// Function that display value
function display(val) {
    document.getElementById("result").value += val;
}

//Function that gets the values based on keyboard inputs
function type(event) {
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3'
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7'
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-'
        || event.key == '*' || event.key == '/')
        document.getElementById("result").value += event.key;
}

// Function that evaluates the digit and return result
function solve() {
    let input = document.getElementById("result").value;
    result = eval(input);
    document.getElementById("result").value = result;
}

// Function that clears the display
function reset() {
    document.getElementById("result").value = "";
}