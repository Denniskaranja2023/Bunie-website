document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  
  const emailSubject = encodeURIComponent(subject);
  const emailBody = encodeURIComponent(
    `Name: ${firstName} ${lastName}\n` +
    `Email: ${email}\n` +
    `Subject: ${subject}\n\n` +
    `Message:\n${message}`
  );
  
  const mailtoLink = `mailto:denniswanyeki2021@gmail.com?subject=${emailSubject}&body=${emailBody}`;
  window.location.href = mailtoLink;
});