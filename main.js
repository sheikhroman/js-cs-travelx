const marsCost = 5000;
const moonCost = 4000;


function handleQuantity(planet, operator) {
    const quantityInput = document.getElementById(planet + "-quantity").value;
    let quantity = parseInt(quantityInput);
    if (operator === 'plus') {
        quantity++;
    } else {
        if (quantity < 1) {
            return;
        }
        quantity--;
    }

    document.getElementById(planet + "-quantity").value = quantity;
    calculateJourney(planet)
}

function calculateJourney(planet) {
    const quantityInput = document.getElementById(planet + "-quantity").value;
    let quantity = parseInt(quantityInput);


    if (planet === 'mars') {
        let marsTotal = quantity * marsCost;
        updateUI(planet, marsTotal)
    } else {
        let moonTotal = quantity * moonCost;
        updateUI(planet, moonTotal)
    }
}

function updateUI(planet, total) {
    const planetTotal = document.getElementById(planet + '-total');
    planetTotal.innerText = total;
    updateTotal()
}

function updateTotal() {
    const marsQuantityInput = document.getElementById("mars-quantity").value;
    const moonQuantityInput = document.getElementById("moon-quantity").value;

    let marsQuantity = parseInt(marsQuantityInput);
    let moonQuantity = parseInt(moonQuantityInput);

    let total = marsQuantity * marsCost + moonQuantity * moonCost;
    document.getElementById('total').innerText = total
}