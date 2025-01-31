let userInput = '';
let userOperator = '';
let num1 = '';

const orderDisplay = document.getElementById('orderDisplay');

function addToNum(num) {
    userInput += num;
    orderDisplay.innerHTML = userInput;
}
/********************** addition function  *********************/
function add(num1, num2) {
    return num1 + num2
    /* adds the two number you choose */
}

/********************** subtraction function  *********************/
function subtract(num1, num2) {
    return num1 - num2  
    /* subtracts the numbers you choose */
}

/********************** multiplication function  *********************/
function multiply(num1, num2) {
    return num1 * num2
    /* multiply the numbers you choose */
}

/********************** division function  *********************/
function divide(num1, num2) {
    return num1 / num2
    /* divides the numbers you choose */
}

/********************** clear function  *********************/
function clr(num1, num2) {
    orderDisplay.innerHTML = '0';
    userInput = '';
    /* this function is a clear button to clear the number after you enter a calculation */
}

/********* sqaureroot function ********/
function squareRoot(num1) { 
    return Math.sqrt(num1);
}

/********************** calculate function  *********************/
function calculate() {
    let num2 = parseInt(userInput);

    switch(userOperator){
        case '+':
            orderDisplay.innerHTML = add(num1, num2);
            break;
        case '-':
            orderDisplay.innerHTML = subtract(num1, num2);
            break;
        case '*':
             orderDisplay.innerHTML = multiply(num1, num2);
            break;
        case '/':
             orderDisplay.innerHTML = divide(num1, num2);
            break;
        case '√':
            orderDisplay.innerHTML = squareRoot(num1);
            break;
            /* this function is going to add,subtract,multiply, and divide the numbers */
    }
}
function operator(op) {
    userOperator = op;
    num1 = parseInt(userInput);
    userInput = '';
}