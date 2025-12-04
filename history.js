const historyList = document.getElementById("historyList");
const calcHistory = JSON.parse(localStorage.getItem("taxHistory")) || [];

if (calcHistory.length === 0) {
    historyList.innerHTML = "<li class='list-group-item'>No calculations yet.</li>";
} else {
    calcHistory.forEach(entry => {
        const li = document.createElement("li");
        li.textContent = entry;
        li.classList.add("list-group-item");
        historyList.appendChild(li);
    });
}


document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "taxes.html";
});
