(function () {

  function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
        //The maximum is inclusive and the minimum is inclusive
      }

  function Traveler(name, amount, isHealth) {
    this.name = name;
    this.amount = amount;
    this.isHealth = isHealth;

  }

  function Wagon(passengers, capacity) {
    this.passengers = passengers;
    this.capacity = capacity;

  }


  function makeTraveler(name) {
    return new Traveler(name, getRandomIntInclusive(0,100), true)

  }

  function makeWagon(capacity) {
    return new Wagon([],capacity)

  }

  function hunt(traveler) {
    if (Math.random() > 0.5) {
      traveler.amount = traveler.amount + 100;
    } else {
      traveler.amount = traveler.amount - 0;
    }
  }

  function eat(traveler) {
    if (traveler.amount < 20) {
      traveler.isHealth = false;
    } else {
      traveler.amount = traveler.amount - 20;
    }

  }

  function join(wagon, traveler) {

    if (wagon.passengers.length < wagon.capacity) {
      wagon.passengers.push(traveler);
    }
  }

  function quarantine(wagon) {
    for (let passenger of wagon.passengers) {
      if (passenger.isHealth == false) {
        console.log("Someone on the wagon is sick! Your wagon needs to be quarantined.");
        return true

      }
      // passenger.isHealth ? continue : return true
    }
    console.log("Everyone is healthy. Let's hope it stays that way!");
    return false;

  }

  function food(wagon) {
    food_sum = 0;
    for (var i = 0; i < wagon.passengers.length; i++) {
      food_sum = food_sum + wagon.passengers[i].amount
    }
    console.log("Food supplies for your wagon:");
    return food_sum
  }







  // Create a wagon called 'wagon'
  let wagon = makeWagon(5);
  // Create a traveler with the name 'Henrietta' called 'traveler'
  let traveler = makeTraveler('Henrietta');
  // Create a traveler with the name 'Juan' called 'traveler2'
  let traveler2 = makeTraveler('Juan');

  // console.log(wagon);
  // console.log(traveler);
  // console.log(traveler2);

  hunt(traveler); // maybe get more food
  eat(traveler2);
  eat(traveler2); // juan is hungry
  join(wagon, traveler);
  join(wagon, traveler2);

  console.log(quarantine(wagon)); // print true if someone is sick, false otherwise
  console.log(food(wagon)); // print juan's food + henrietta's food

})()
