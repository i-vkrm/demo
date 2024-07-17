function showProductDetails(productId) {
    let productName = "";
    switch (productId) {
        case 'product1':
            productName = "Selected Cake";
            break;
        case 'product2':
            productName = "Selected Cake";
            break;
        case 'product3':
            productName = "Selected Cake";
            break;
    }
    alert("More details about " + productName + " coming soon!");
}

document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
            .then(response => response.text())
            .then(data => alert(data))
            .catch(error => console.error('Error:', error));
    } else {
        alert('Please fill in all fields.');
    }
});
