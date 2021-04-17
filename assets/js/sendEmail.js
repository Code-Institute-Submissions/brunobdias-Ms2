function sendEmailJs(contactForm){
    emailjs
    .send(userId, templateId, {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.comment.value})
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    return false;  
}