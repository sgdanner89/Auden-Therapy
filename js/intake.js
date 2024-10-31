// Toggle visibility of contact inputs
function toggleContactInput() {
    const phoneCheckbox = document.getElementById('contact_phone');
const emailCheckbox = document.getElementById('contact_email');
const phoneInputGroup = document.getElementById('phone_input_group');
const emailInputGroup = document.getElementById('email_input_group');

// Show or hide phone input
phoneInputGroup.style.display = phoneCheckbox.checked ? 'block' : 'none';
if (!phoneCheckbox.checked) document.getElementById('phone_number').value = ''; // Clear input

// Show or hide email input
emailInputGroup.style.display = emailCheckbox.checked ? 'block' : 'none';
if (!emailCheckbox.checked) document.getElementById('email_address').value = ''; // Clear input
}

// Toggle visibility of insurance provider input
function toggleInsuranceProvider() {
    const insuranceSelect = document.getElementById('insurance');
const insuranceProviderGroup = document.getElementById('insurance-provider-group');

// Show insurance provider input if 'Yes' is selected
insuranceProviderGroup.style.display = insuranceSelect.value === 'yes' ? 'block' : 'none';

if (insuranceSelect.value !== 'yes') {
    document.getElementById('insurance_provider').value = ''; // Clear input
    }
}

// Display success notification
function showSuccessNotification() {
    const notification = document.getElementById('success-notification');
notification.style.display = 'block';

    // Hide notification after 3 seconds
    setTimeout(() => {
    notification.style.display = 'none';
    }, 3500);
}

// Handle form submission
document.getElementById('intake-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent actual form submission for demonstration
showSuccessNotification(); // Show success message
});

// Initialize form inputs on page load
document.addEventListener('DOMContentLoaded', function () {
    toggleContactInput();
toggleInsuranceProvider();
});