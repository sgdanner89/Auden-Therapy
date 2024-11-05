document.addEventListener('DOMContentLoaded', function () {
    // Get references to checkboxes and input groups
    const phoneCheckbox = document.getElementById('contact_phone');
    const emailCheckbox = document.getElementById('contact_email');
    const phoneInputGroup = document.getElementById('phone_input_group');
    const emailInputGroup = document.getElementById('email_input_group');

    // Show or hide phone input based on checkbox state
    phoneCheckbox.addEventListener('change', function () {
        phoneInputGroup.style.display = phoneCheckbox.checked ? 'block' : 'none';
    });

    // Show or hide email input based on checkbox state
    emailCheckbox.addEventListener('change', function () {
        emailInputGroup.style.display = emailCheckbox.checked ? 'block' : 'none';
    });

    // Form submission handler for AJAX request to Formspree
    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

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
                    form.reset(); // Clear the form after a successful submission
                    phoneInputGroup.style.display = 'none'; // Hide optional input groups
                    emailInputGroup.style.display = 'none'; // Hide optional input groups
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
});
