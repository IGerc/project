document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalBtn = document.querySelector(".header__link.header__link_modal");
    const closeBtn = document.querySelector(".modal__close");
    
    modalBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
  
    function openModal() {
      modal.style.display = "block";
    }
  
    function closeModal() {
      modal.style.display = "none";
    }
  });

