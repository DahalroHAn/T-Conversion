const degreeNum = document.getElementById("degree");
const buttonBt = document.getElementById("button");
const FcBt = document.getElementById("Fc");
const CfBt = document.getElementById("Cf");
const resultBt = document.getElementById("result");
let temp;

buttonBt.onclick = function() {
    temp = parseFloat(degreeNum.value); // Convert input value to a floating-point number

    if (FcBt.checked) {
        temp = (temp - 32) * (5 / 9); // Correct order of operations
        resultBt.textContent = temp.toFixed(2) + '°C'; // Display result with 2 decimal places
    } else if (CfBt.checked) {
        temp = (temp * 9 / 5) + 32; // Correct order of operations
        resultBt.textContent = temp.toFixed(2) + '°F'; // Display result with 2 decimal places
    } else {
        resultBt.textContent = "Select a unit"; // Handle case when no unit is selected
        degreeNum.value="";
    }

    
};
