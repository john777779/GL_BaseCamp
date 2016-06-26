/*
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType (variable) {
	return typeof variable;
};


/*
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType (a, b) {
	if (a === b) {
		return 1;
	} else if (a == b) {
		return 0;
	} else {
		return -1;
	}
};


/*
	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase (value) {
	if (typeof value === 'number') {
		return value + 1;
	} else {
		return -1;
	}
};

/*
	Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
function join (array, separator) {
	if (separator === undefined) {
		return array.join('-');
	} else {
		return array.join(separator);
	}
};


/*
	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
	return arrA.concat(arrB);
};


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order (arr) {
	var	flag = false;
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'number') {
			return arr.sort(function(a, b) {
				return b - a;
			});
		} else {
			return arr.sort(function (a, b) {
  			if (a < b) {
    			return 1;
  			}
  			if (a > b) {
    		return -1;
  			}
  			return 0;
			});
		}
	}
};


/*
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
function removeNegative (arr) {
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			arr.splice(i, 1);
      i--;
		};
	};
	return arr;
};


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
	return str.split(' ');
}


/*
	Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {
	for (var i = 0; i < str.length; i++) {
		if (str[i] === ',') {
			return str.slice(0, i);
			break
		}
	}
};
