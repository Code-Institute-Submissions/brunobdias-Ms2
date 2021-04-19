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
        //Credit to https://stackoverflow.com/questions/6653556/jquery-javascript-function-to-clear-all-the-fields-of-a-form
        $("#contactForm").trigger("reset");
        //End Credit
        alert("Email Sent!", response.status, response.text);
      },
      function (error) {
        alert("FAILED...", error);
        console.log("FAILED...", error);
      }
    );

  return false;
}