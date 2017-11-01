function getFood() {
    var display = document.getElementById("answer");
    display.innerText = getRandRestaurant(getFoodType());
}

function getRandRestaurant(foodType)  {
    if (foodType === 'fast-food') {
        return fastFood[Math.floor(Math.random()*fastFood.length)];
    } else if (foodType === 'fast-casual') {
        return fastCasual[Math.floor(Math.random()*fastCasual.length)];
    } else if (foodType === 'sit-down') {
        return sitDown[Math.floor(Math.random()*sitDown.length)];
    }
}

function getFoodType() {
var foodType;
    if (document.getElementById('fast-food').checked) {
        foodType = 'fast-food';
    } else if (document.getElementById('fast-casual').checked) {
        foodType = 'fast-casual';
    } else if (document.getElementById('sit-down').checked) {
        foodType = 'sit-down';
    } else {
        alert("Please select a food type so Bae doesn't attack!");
    }
    return foodType;
}
    