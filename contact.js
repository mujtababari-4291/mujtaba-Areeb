document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Save to localStorage
    let contactData = JSON.parse(localStorage.getItem('contactData')) || [];
    contactData.push({ name, phone, message });
    localStorage.setItem('contactData', JSON.stringify(contactData));

    // Display the data in a table
    displayContactData();

    // Clear the form fields
    document.getElementById('contact-form').reset();
});

function displayContactData() {
    const contactTableBody = document.querySelector('#contact-table tbody');
    const contactData = JSON.parse(localStorage.getItem('contactData')) || [];

    contactTableBody.innerHTML = '';
    contactData.forEach(contact => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${contact.name}</td><td>${contact.phone}</td><td>${contact.message}</td>`;
        contactTableBody.appendChild(row);
    });
}

// Display contact data when the page loads
document.addEventListener('DOMContentLoaded', displayContactData);
