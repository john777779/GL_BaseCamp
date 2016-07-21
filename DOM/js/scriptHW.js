
//-------Task 0--------
function saearchNode(selector) {
  if (selector instanceof Node) {
    if (selector.nodeType === 1) {
      console.log('Node')
    } else if (selector.nodeType === 3) {
      console.log('Text')
    } else if (selector.nodeType === 8) {
      console.log('Comment')
    }
  } else {
      var nodeList = document.querySelectorAll(selector);
      if (nodeList.length !== 0) {
        if (nodeList.length === 1) {
           console.log(nodeList[0]);
        } else {
          console.log(nodeList);
        }
      } else {
        console.log('Undefined');
      };
    }
 };

 var text = document.createTextNode('Warning');

saearchNode('a');

//----------Task 1--------

function saearchNode1(selector) {
  var nodeList = document.querySelectorAll(selector);
  // console.log(nodeList);
  if (nodeList.length !== 0) {
     console.log(nodeList[0]);
    } else {
    console.log('Undefined');
  };
 };

saearchNode1('span');

//------Task 2---------

function insertAfter(insertElement, elementAfter) {
  var parent = elementAfter.parentElement;
  var tempElement = elementAfter.nextElementSibling;
  parent.insertBefore(insertElement, tempElement)
};

var p = document.createElement('p');

var htmlColection = document.getElementsByTagName('a');
var a = htmlColection[0];

insertAfter(p, a);

//-------Task 3--------

function attributes(elem) {
  if (arguments.length === 2) {
    if (elem.getAttribute(arguments[1]) !== null) {
      console.log(elem.getAttribute(arguments[1]));
    } else {
      console.log('Element not have this attribute')
    };
  } else {
    if (elem.hasAttribute(arguments[1])) {
      elem.setAttribute(arguments[1], arguments[2]);
    } else {
      elem.style.setProperty(arguments[1], arguments[2]);
      }

    console.log(elem);
  }
};

var HTMLCollection = document.getElementsByClassName('first');
var elem = HTMLCollection[0];

attributes(elem, 'color', 'green');

//----------Task 4 --------------

var wrapper = document.createElement('div');
wrapper.style.setProperty('width', '160px');
wrapper.style.setProperty('height', '160px');
wrapper.style.setProperty('background', 'gray');
wrapper.style.setProperty('padding', '4px');

var box = document.createElement('div');
var arrBox = [];

for (var i = 1; i <= 64; i++) {
  var temp = Math.ceil(i / 8);
  arrBox[i] = document.createElement('div');
  arrBox[i].style.setProperty('width', '20px');
  arrBox[i].style.setProperty('height', '20px');
  arrBox[i].style.setProperty('float', 'left');
  if (temp % 2 === 0 && i%2 === 0 || temp % 2 !== 0 && i%2 !== 0) {
    arrBox[i].style.setProperty('background', 'black');
  } else {
    arrBox[i].style.setProperty('background', 'white');

  }
  wrapper.appendChild(arrBox[i]);
}

document.body.appendChild(wrapper);
