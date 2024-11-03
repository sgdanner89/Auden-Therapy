document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send form data to Formspree
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
        .then(response => {
            if (response.ok) {
                alert('Thank you for your message! We will get back to you shortly.');
                form.reset(); // Clear the form after successful submission
            } else {
                alert('Failed to send message. Please try again later.');
                console.error('Form submission error:', response.statusText);
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again later.');
            console.error('Error:', error);
        });
});
