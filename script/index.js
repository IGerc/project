// const modalBtns = document.querySelectorAll('.modal-open')
// const modal = document.querySelectorAll('.modal')

// function openModal(elem){
//     elem.classList.add('active')
// }

// modalBtns.forEach(btn => {
//     btn.addEventListener('click', (e)=>{
//         let data = e.target.dataset.modalOpen;
//         modalBtns.forEach(modal => {
//             if(modal.dataset.modal == data){
//                 openModal(modal)
//             }
//         })
//     })
// })



// var coll = document.getElementsByClassName("collapsible");
// var i;

// for(i=0; i < coll.length; i++){
//     coll[i].addEventListener("click", function(){
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.maxHeight){
//             content.style.maxHeight = null;
//         } else {
//             content.style.maxHeight = content.scrollHeight + "px";
//         }
//     });
// }