
//works fine for me

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


//works fine with me :)
var arr = [1, 5, 7, 10],
    flag = false,
    maxMin = function (arr, flag) {
      if (flag) {
        console.log(Math.max.apply( Math, arr ));
      } else {
        console.log(Math.min.apply( Math, arr ));
      };
    };
//another possible solution (just different type of writing)
function maxMin(arr, flag) {
  return flag ? Math.max.apply(null,arr) : Math.min.apply(null,arr)
}


// looks fine just maybe use if (a % 2 === 0)  without adding 'num' var
var even1 = function (a) {
  if (typeof a == 'number') {
    //var num = a % 2;
    if (a % 2 === 0) { // fixed
      console.log(a*a);
    }
  }
};

// looks fine
var sumSub = function (a, b) {
  if (a > b) {
    console.log(a - b);
  } else if (b > a) {
    console.log(a + b);
  }
};

// works fine, but it also accept sumRange(14, false) or sumRange(true, 12) :D
var sumRange = function (a, b) {
  if (typeof a == 'number' && typeof b == 'number') { // fixed
    var sum = a + b;
    if (sum >= 11 && sum <= 19) {
      console.log(sum);
    } else {
      console.log('Result is not in range between 11 and 19');
    }
  }
};


// works fine, you also may just do console.log(a % b === 0 || b % a === 0) ;)
var divide = function(a, b) {
  if (a % b === 0 || b % a === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
};

// that wors, but why you want to get rid of all punctuation? :)

// Also here you are looping over array two times.
// You may check each char just in one go
var text = 'Колесо. Жалко поклаж. Оселок.';
var palindrom = function(text) {
  var arr = text.toLowerCase().split("");  // <- this is redundant variable, you may just do var textLow = text.toLowerCase().split("");


  /* fixed */ var flag = false;   // <- here you may put 'false' in this case later you just 'break'

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
      /* fixed */ flag = false; //<- here, you may delete it.
      break;
    }
  };

  console.log(flag);
};


// works fine
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

// another possible solution:
function fizzBuzz1() {
  var a;
  for (var i = 1; i <= 100; i++ ) {
      a = "";
      if ( i % 5 === 0 ) {
        a += "Fizz";
      }
      if ( i % 3 === 0 ) {
        a += "Buzz";
      }
      console.log(a || i);
    }
}


var vampire1 = function(a) {
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
              console.log("here");
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

var vampire2 = function(a, b) {
  var multiRes = a * b,
      multiResStr = multiRes + "",
      strMR = multiResStr.split("").sort().join(""),
      res = a +"" + b +"",
      strR = res.split("").sort().join("");
      if (strMR === strR) {
        console.log('Numbers are fangs of vampire number');
      } else {
        console.log('Numbers are not fangs of vampire number');
      }

};

vampire2(13, 95)
