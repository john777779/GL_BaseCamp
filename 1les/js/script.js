
var time = function (clock) {
  if (0 <= clock && clock <=24) {
    if (8 <= clock && clock <= 21) {
      console.log('Hello');
    } else {console.log('It is not good time for that')};

  } else {
    if (typeof clock != 'number' ) {
      console.log('It is not a number');
    };
  };
};

var arr = [1, 5, 7, 10],
    flag = false,
    maxMin = function (arr, flag) {
      if (flag) {
        console.log(Math.max.apply( Math, arr ));
      } else {
        console.log(Math.min.apply( Math, arr ));
      };
    };

var even = function (a) {
  if (typeof a == 'number') {
    var num = a % 2;
    if (num === 0) {
      console.log(a*a);
    }
  }
};

var sumSub = function (a, b) {
  if (a > b) {
    console.log(a - b);
  } else if (b > a) {
    console.log(a + b);
  }
};

var sumRange = function (a, b) {
  var sum = a + b;
  if (sum >= 11 && sum <= 19) {
    console.log(sum);
  } else {
    console.log('Result is not in range between 11 and 19');
  }
};

var divide = function(a, b) {
  if (a % b === 0 || b % a === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
};

var text = 'Колесо. Жалко поклаж. Оселок.';
var palindrom = function(text) {
  var textLow = text.toLowerCase();
  var arr = textLow.split("");
  var flag;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === " " || arr[i] === "," || arr[i] === "." || arr[i] === ";"
    || arr[i] === ":" || arr[i] === "!" || arr[i] === "?" || arr[i] === "-"
    || arr[i] === "\"") {
      arr.splice(i, 1);
      i--;
    }
  };

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[arr.length - 1 - i]) {
      flag = true;
    } else {
      flag = false;
      break
    }
  };

  console.log(flag);
};

var fizzBuzz = function() {
  var result,
      fizz,
      buzz;
  for (var i = 1; i <= 100; i++) {
    fizz = i % 3;
    buzz = i % 5;
    if (fizz === 0 && buzz === 0) {
      result = 'FizzBuzz';
    } else if (fizz === 0) {
      result = 'Fizz';
      } else if (buzz === 0) {
        result = 'Buzz';
        } else {
          result = i;
          }
    console.log(result);
  };
};


var vampire = function(a) {
  var temp = a + "",
      len = temp.length % 2,
      arr = temp.split(""),
      flag = false,
      rez;

  if (len === 0) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
          for (var e = 0; e < arr.length; e++) {
            if (i !== j && i !== k && i !== e && j !== k && j !== e && k !== e) {
              rez = (arr[i] + arr[j]) * (arr[k] + arr[e]);
              if (rez == a) {
                flag = true
              }
            }
          }
        }
      }
    }
  }

  console.log(flag);
};

vampire(1260)
