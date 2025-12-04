document.getElementById("calculateBtn").addEventListener("click", calculateTax);
document.getElementById("historyBtn").addEventListener("click", () => {
    window.location.href = "history.html";
});

function calculateTax() {
    const amount = parseFloat(document.getElementById("amount").value);
    const percentage = parseFloat(document.getElementById("percentage").value);

    if (isNaN(amount) || isNaN(percentage)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    const tax = amount * percentage / 100;
    const total = amount - tax;

    let message = "";
    if (percentage < 10) {
        message = "Damn those pockets must be heavy";
    } else if (percentage < 20) {
        message = "Starting to get robbed buddy";
    } else if (percentage < 30) {
        message = "All that tax and your road still has potholes";
    } else {
        message = "Just be a Slave at this point";
    }

    document.getElementById("result").innerHTML =
        `Tax: €${tax.toFixed(2)} | Total After Tax: €${total.toFixed(2)} <br><strong>${message}</strong>`;

    
    const calcHistory = JSON.parse(localStorage.getItem("taxHistory")) || [];
    const newEntry = `Amount: €${amount}, Percentage: ${percentage}%, Tax: €${tax.toFixed(2)}, Total: €${total.toFixed(2)}, Message: ${message}`;
    calcHistory.unshift(newEntry);
    if (calcHistory.length > 10) calcHistory.pop();
    localStorage.setItem("taxHistory", JSON.stringify(calcHistory));
}
