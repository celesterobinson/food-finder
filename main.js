function getFood() {
    var answer = document.getElementById("answer");
    var food = getFoodType();
    var restaurant = getRandRestaurant(food);
    if (food !== 'undefined') {
        answer.innerText = restaurant;
        document.getElementById('answer').style.color = '#d37825';
    } else {
        answer.innerText = '';
    }
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
        foodType = 'undefined';
        alert("Please select a food type so Bae doesn't attack!");
    }
    return foodType;
}

function createRestaurantList(letter) {
    var letter = document.getElementById('letter').value;
    var listLocation = document.getElementById('list');
    var list = [];
    for (var i = 0; i < allRestaurants.length; i++) {
        if (allRestaurants[i].indexOf(letter) === 0) {
            list.push(allRestaurants[i]);
        } 
    }
    listLocation.innerText = list.join(', ');
}

var userInput = document.getElementById('letter');
userInput.addEventListener('keydown', function(e) {
    var userLetter = document.getElementById('letter').value;
    if (e.keyCode === 13) {
        createRestaurantList(userLetter);
    }
})
