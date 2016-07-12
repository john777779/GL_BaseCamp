function extractCharacters(str){
    str = str.toLowerCase();
    var arr = str.split('');
    var obj = {};

    for (var i = 0; i < arr.length; i++) {
      var str = arr[i];
      obj[str] = true;
    }
    console.log(Object.keys(obj));
};

extractCharacters('abcd');
    //['a', 'b', 'c', 'd']

extractCharacters('aaaabc');
    //['a', 'b', 'c']
extractCharacters('Hello, world');
    //[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];



//----------myLogger----------

function createLogger(prefix){
  var now = new Date();
  console.log(now.toISOString() + prefix);
}

var myLogger = function (some) {
  var prefix = ' My Logger' + ': ' + some;
  createLogger(prefix);
};

myLogger('some data');
// 2016-06-06T09:55:44.162Z My Logger: some data
