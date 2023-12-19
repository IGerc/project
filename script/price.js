const modalPriceBtn = document.getElementById("calculatePriceBtn");
modalPriceBtn.addEventListener("click", openModalPrice);
const modalPrice = document.getElementById("modalPrice");
const calculatePriceBtn = document.getElementById("calculatePriceBtn");
const closePriceBtn = document.querySelector("#modalPrice .modalPrice__close");
const priceInput = document.getElementById("priceInput");
const priceResult = document.getElementById("priceResult");

calculatePriceBtn.addEventListener("click", openModalPrice);
closePriceBtn.addEventListener("click", closeModalPrice);
priceInput.addEventListener("input", calculatePrice);

function openModalPrice() {
  modalPrice.style.display = "block";
}

function closeModalPrice() {
  modalPrice.style.display = "none";
}

function calculatePrice() {
  const enteredPrice = priceInput.value;
  const calculatedPrice = enteredPrice * 11.5 + 2500 ;
  priceResult.innerHTML = `Итого: ${calculatedPrice} рублей`;
}

