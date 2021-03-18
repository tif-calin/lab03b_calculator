// import functions and grab DOM elements

inNum1 = document.getElementById('in-calc-num1');
inNum2 = document.getElementById('in-calc-num2');
inOp = document.getElementById('in-calc-op');
btnCalc = document.getElementById('btn-calc');
outCalc = document.getElementById('out-calc');

// initialize state

// set event listeners to update state and DOM

btnCalc.addEventListener('click', () => {
    let result;
    const n1 = inNum1.value;
    const n2 = inNum2.value;
    const op = inOp.value;
    
    switch (op) {
        case "-":
            result = Number(n1) - Number(n2);
            break;
        case "*":
            result  = Number(n1) * Number(n2);
            break;
        case "×":
            result = Number(n1) * Number(n2);
            break;
        case "/":
            result = Number(n1) / Number(n2);
            break;
        case "÷":
            result = Number(n1) / Number(n2);
            break;
        default:
            result = Number(n1) + Number(n2);
    }

    outCalc.textContent = result;
});