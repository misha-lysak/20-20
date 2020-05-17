const modal = document.getElementById("my-modal");
const btnOld = document.querySelector("#buy-old");
const btnMint = document.querySelector("#buy-mint");
const btnJin = document.querySelector("#buy-jin");
const span = document.getElementsByClassName("close")[0];

btnOld.addEventListener('click', function() {
  modal.style.display = 'block'
});

btnMint.addEventListener('click', function() {
  modal.style.display = 'block'
});

btnJin.addEventListener('click', function() {
  modal.style.display = 'block'
});

span.addEventListener('click', function() {
  modal.style.display = 'none'
});

window.addEventListener('click', function() {
  if (event.target === modal) {
    modal.style.display = 'none'
  }
});
