let cart = [];
let total = 0;


function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    total += price;

    updateCart();
}


function updateCart() {

    const items = document.getElementById("cart-items");

    items.innerHTML = "";

    cart.forEach(function(item) {

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <span>${item.name}</span>
            <span>€${item.price.toFixed(2)}</span>
        `;

        items.appendChild(div);
    });


    document.getElementById("cart-count").textContent = cart.length;

    document.getElementById("cart-total").textContent =
        total.toFixed(2);
}


function openCart() {
    document.getElementById("cart").classList.add("open");
}


function closeCart() {
    document.getElementById("cart").classList.remove("open");
}


function checkout() {

    if (cart.length === 0) {
        alert("Je winkelwagen is leeg.");
        return;
    }

    alert("De betaalpagina moet hier nog worden gekoppeld.");
}
