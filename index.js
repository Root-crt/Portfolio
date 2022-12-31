function SendEmail(){
  var params={
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    message: document.getElementById("message").value

  }

emailjs.send("service_10yvc5e", "template_ar714x7", params).then(function (res) {
  alert("Message Sent Successfully!!" + res.status);
})
};

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
};

const sr = ScrollReveal ({
  distance: '60px',
  duration: 2500,
  reset: true
})
sr.reveal('.home-text', {delay:200, origin:'top'})
sr.reveal('.home-img', {delay:400, origin:'top'})
sr.reveal('.about, .educ-exp, .projects, .contact, .footer', {delay:200, origin:'top'})
