document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        alert('Account created successfully!');
        // Here you can add further logic to handle the registration process, e.g., send the data to the server
    } else {
        alert('Please fill in all fields.');
    }
});

