//-------function compareObjects------

var dog = {
  name: 'Jack',
  age: 3
};

function Cat(name, age) {
  this.name = name;
  this.age = age;
};

var cat = new Cat('Tom', 4);

function compareObjects(obj1, obj2, check) {
  if (obj1[check] > obj2[check]) {
    console.log(obj1.name)
  } else if (obj1[check] === obj2[check]) {
    console.log(obj1.name + ' and '+ obj2.name + ' coevals')
    } else {
      console.log(obj2.name)
      }
};

compareObjects(dog, cat, 'age');

//-------end of function compareObjects------

//--------function favoriteSong-------
var songsCollection = [
  {
    name: 'song1',
    played: 10,
  },
  {
    name: 'song2',
    played: 14,
  },
  {
    name: 'song3',
    played: 3,
  },
  {
    name: 'song4',
    played: 14,
  },
  {
    name: 'song5',
    played: 8,
  }
];

function favoriteSong(collection) {
  function Song(name, played, index) {
    this.name = name;
    this.played = played;
    this.index = index;
  };

  var result = collection[0].played,
      arrFavotiteSongs =[];

  for (var i = 1; i < collection.length; i++) {
    if (collection[i].played > result) {
      arrFavotiteSongs =[];
      result = collection[i].played;
      arrFavotiteSongs.push(new Song(collection[i].name, collection[i].played, i))
    } else if (collection[i].played === result) {
        arrFavotiteSongs.push(new Song(collection[i].name, collection[i].played, i));
      }
  }
//---resalt output---
  for (var i = 0; i < arrFavotiteSongs.length; i++) {
    console.log(arrFavotiteSongs[i].name + ' played: ' + arrFavotiteSongs[i].played
    + ' index in collection: ' + arrFavotiteSongs[i].index);
  }
};

favoriteSong(songsCollection)

//----------end of function favoriteSong-----------


//-------------- function calculator------------------

function Calculator() {
  this.arr = [];
  this.sum = 0;
  this.add = function (arg) {
   this.arr.push(arg);
  };
  this.getCurrentSum = function () {
    if (arguments[0]) {
      this.sum = 0;
      for (var i = 0; i < arguments[0]; i++) {
        this.sum = this.sum + this.arr[i];
        }
      } else {
        this.sum = 0;
        for (var i = 0; i < this.arr.length; i++) {
          this.sum = this.sum + this.arr[i];
        }
      }
  };
};

//---- add number in objects
var calculator1 = new Calculator();
calculator1.add(3);
calculator1.add(8);
calculator1.add(11);

var calculator2 = new Calculator();
calculator2.add(5);
calculator2.add(12);
calculator2.add(17);

//---- sum of all nambers of both objects
calculator1.getCurrentSum();
calculator2.getCurrentSum();
console.log(calculator1.sum + calculator2.sum);

//---- sum of numbers both objects on the second step
calculator1.getCurrentSum(2);
calculator2.getCurrentSum(2);
console.log(calculator1.sum + calculator2.sum);

//---- sum of the third step and general sum of one object
calculator2.getCurrentSum();
console.log(calculator2.sum);
calculator2.getCurrentSum(3);
console.log(calculator2.sum);

//-----------------end of function calculator--------------
