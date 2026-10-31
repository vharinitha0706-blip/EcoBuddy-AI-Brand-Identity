

function showMessage() {
    document.getElementById("message").textContent =
        "Welcome to EcoBuddy! Small Choices. Greener Future.";
}

function selectProduct(product) {
    document.getElementById("productMessage").textContent =
        "You selected: " + product;
}
