
function sendEmail(contactForm) {

  let templateParams = {
    from_name: contactForm.name.value,
    from_email: contactForm.email.value,
    message: contactForm.comment.value
  };

  emailjs
    .send("service_f04f4oq", "template_geli2d5", templateParams)
    .then(
      function (response) {
        alert("SUCCESS!", response.status, response.text);
      },
      function (error) {
        alert("FAILED...", error)
        console.log("FAILED...", error);
      }
    );

  return false;
}