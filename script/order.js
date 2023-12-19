const orderBtn = document.getElementById("orderBtn");
const modalOrder = document.getElementById("modalOrder");
const closeOrderBtn = document.getElementById("closeOrderBtn");

orderBtn.addEventListener("click", function() {
    modalOrder.style.display = "block";
});

closeOrderBtn.addEventListener("click", function() {
    modalOrder.style.display = "none";
});