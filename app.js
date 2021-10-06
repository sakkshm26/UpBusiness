let responsive = document.querySelector('.toggle');
let view = document.querySelector('.navlinks');

responsive.addEventListener("click" , function () {
  if (view.style.display === "none"){
    view.style.display = 'block'
  }
  else{
    view.style.display = 'none'
  }
});