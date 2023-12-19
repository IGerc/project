var deliveryLink = document.getElementById("deliveryLink");
var deliveryModal = document.getElementById("deliveryModal");
var close = document.getElementsByClassName("close")[0];

deliveryLink.onclick = function() {
  deliveryModal.style.display = "block";
}

close.onclick = function() {
  deliveryModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == deliveryModal) {
    deliveryModal.style.display = "none";
  }
}
