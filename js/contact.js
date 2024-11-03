function sendFormData(event) {
    event.preventDefault(); // Prevent the default form submission

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send form data to Google Apps Script Web App URL
    fetch('https://script.google.com/macros/s/AKfycbxkofHX93NE78-Ul8k2o-pXrYSSBz43XNkmpea-QmzlhLctyvtuKaA5ht83NX4JzXWUMA/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'success') {
                alert('Thank you for your message! We will get back to you shortly.');
            } else {
                alert('Failed to send message. Please try again later.');
                console.error('Error:', data.message);
            }
        })
        .catch(error => {
            alert('An error occurred. Please try again later.');
            console.error('Error:', error);
        });
}
