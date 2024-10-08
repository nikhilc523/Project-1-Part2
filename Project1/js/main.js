//active navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function (){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on")
    }
    else{
        nav.classList.remove("scroll-on")
    }
}


//navbar hide
let navbar=document.querySelectorAll('.nav-link');
let navCollapse =document.querySelector('.navbar-collapse.collapse');
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})

//counter design//

document.addEventListener("DOMContentLoaded", () => {
   function counter(id , start , end, duration){
    let obj= document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1 ,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if( current == end){
            clearInterval(timer);
        }
    }, step );
   }
   counter("count1", 0  , 1287, 3000);
   counter("count2", 100, 3000, 2500);
   counter("count3", 0  , 1400,3000);
   counter("count4", 0  , 5010,3000);
});
  
(function () {
    'use strict'
    const forms = document.querySelectorAll('.requires-validation')
    Array.from(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
    
          form.classList.add('was-validated')
        }, false)
      })
    })()
    document.getElementById('submitBtn').addEventListener('click', function(event) {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const message = document.getElementById('message').value.trim();
  
      // Clear previous toast messages
      const errorToast = document.getElementById('errorToast');
      const successToast = document.getElementById('successToast');
      errorToast.classList.remove('show');
      successToast.classList.remove('show');
  
      // Clear previous error messages
      document.querySelectorAll('.text-danger').forEach(el => el.style.display = 'none');
  
      let isValid = true;
      let errorMessage = '';
  
      // Check for empty fields
      if (name === '' || email === '' || phone === '' || message === '') {
          errorMessage = 'Please enter all fields.';
          isValid = false;
      }
  
      if (!isValid) {
          // Show error toast notification
          const errorToastBody = errorToast.querySelector('.toast-body');
          errorToastBody.textContent = errorMessage;
          const errorToastInstance = new bootstrap.Toast(errorToast);
          errorToastInstance.show();
      } else {
          // Show success toast notification
          const successToastBody = successToast.querySelector('.toast-body');
          successToastBody.textContent = 'Thank you for contacting us! Your message has been received, and we will get back to you shortly.';
          const successToastInstance = new bootstrap.Toast(successToast);
          successToastInstance.show();
      }
  
      // Prevent form submission if there are validation errors
      if (!isValid) {
          event.preventDefault();
      }
  });
  document.querySelector('.floating-button').onclick = function() {
    window.location.href = 'contact.html'; // Redirect to order page
};