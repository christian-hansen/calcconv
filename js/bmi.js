function renderBMI() {
    let inputWeight = document.getElementById('weight');
    let inputSize = document.getElementById('size');
    let result = document.getElementById('resultBMI');
    result.innerHTML = calcBMI(inputWeight.value, inputSize.value);
}

function calcBMI(weight, size) {
    bmiResult = parseFloat(weight / (size * size)).toFixed(2);
return bmiResult;
}