document.getElementById("convertBtn").addEventListener("click", function () {
    const tempInput = document.getElementById("tempInput").value.trim();
    const unit = document.getElementById("unitSelect").value;
    const resultDiv = document.getElementById("result");

    if (tempInput === "" || isNaN(tempInput)) {
        resultDiv.textContent = "⚠ Please enter a valid number.";
        return;
    }

    const temp = parseFloat(tempInput);
    let resultText = "";

    if (unit === "C") {
        const toF = (temp * 9/5) + 32;
        const toK = temp + 273.15;
        resultText = `${temp}°C = ${toF.toFixed(2)}°F | ${toK.toFixed(2)}K`;
    } 
    else if (unit === "F") {
        const toC = (temp - 32) * 5/9;
        const toK = toC + 273.15;
        resultText = `${temp}°F = ${toC.toFixed(2)}°C | ${toK.toFixed(2)}K`;
    } 
    else if (unit === "K") {
        const toC = temp - 273.15;
        const toF = (toC * 9/5) + 32;
        resultText = `${temp}K = ${toC.toFixed(2)}°C | ${toF.toFixed(2)}°F`;
    }

    resultDiv.textContent = resultText;
});
