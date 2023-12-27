// Задание 1
let pet = {
  type: "кошка",
  name: "Исаак",
  sound: "мяу",

  say: function(text) {
    if (text) {
      return this.type + " " + this.name + " говорит " + text;
    } else {
      return this.type + " " + this.name + " говорит " + this.sound;
    }
  }
};

console.log(pet.say()); // кошка Мурка говорит мяу
console.log(pet.say("Привет!")); // кошка Мурка говорит Привет!

// Задание 2


let vegetable = {
  potato: "овощи",
  carrot: "овощи",
  banana: "фрукты",
  orange: "фрукты",
  apple: "фрукты",
  strawberry: "ягоды",
  tomato: "овощи",
  melon: "фрукты",
  lemon: "фрукты"
}

let productTypes = {};

for (let key in vegetable) {
  let type = vegetable[key];
  if (productTypes[type]) {
    productTypes[type]++;
  } else {
    productTypes[type] = 1;
  }
}

console.log(productTypes);

// Задание 3

const cars = {
  "BMW": {
    color: "blue",
    country: "Germany",
    year: 2005
  },
  "Toyota": {
    color: "red",
    country: "Japan",
    year: 2010
  },
  "Ford": {
    color: "black",
    country: "USA",
    year: 2008
  },
  "Honda": {
    color: "white",
    country: "Japan",
    year: 2015
  },
  "Volkswagen": {
    color: "gray",
    country: "Germany",
    year: 2019
  },
  "Chevrolet": {
    color: "silver",
    country: "USA",
    year: 2012
  },
  "Mercedes-Benz": {
    color: "black",
    country: "Germany",
    year: 2014
  },
  "Nissan": {
    color: "blue",
    country: "Japan",
    year: 2013
  },
  "Audi": {
    color: "white",
    country: "Germany",
    year: 2017
  },
  "Kia": {
    color: "red",
    country: "South Korea",
    year: 2011
  }
};

const carList = Object.entries(cars).map(([brand, details]) => ({
  brand,
  ...details
}));

carList.sort((a, b) => a.year - b.year);

console.log("Информация о трех самых молодых автомобилях:");
for (let i = 0; i < 3; i++) {
  console.log(carList[i]);
}

console.log("Информация о трех самых старых автомобилях:");
for (let i = carList.length - 1; i >= carList.length - 3; i--) {
  console.log(carList[i]);
}

