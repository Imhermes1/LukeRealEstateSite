document.getElementById('myForm').addEventListener('submit', function(e) {
  var message = document.getElementById('message').value;
  // Matches exact word "SEO" case-insensitively, not as part of another word
  var regex = /\bseo\b/i;
  if (regex.test(message)) {
    e.preventDefault();
    // Show fake success, do not process form
    document.getElementById('myForm').innerHTML = '<p>Thank you for your message!</p>';
  }
});