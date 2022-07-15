function SendMail() {
    var params = {
      from_name: document.getElementById('fname').value,
      email_id: document.getElementById('email').value,
      message: document.getElementById('message').value,
    };
    emailjs
      .send('service_bes8sht', 'template_4lh9huh', params)
      .then(function (res) {
        alert( "Thank you for submitting the form");
      });
  }