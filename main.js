// Scroll to the signup form
function scrollToForm() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Handle form submission
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    document.getElementById('success-message').style.display = 'block'; // Show success message
    this.reset(); // Reset the form fields
  });
   