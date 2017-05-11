/* ДЗ 2 - работа с исключениями и отладчиком */

/*
 Задача 1:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true только если fn вернула true для всех элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
 var mes = {
 	ERROR_ARR: 'empty array',
 	ERROR_FUN: 'fn is not a function',
 	ERROR_NUM: 'number is not a number',
 	ERROR_DIV: 'division by 0'
 }
function isAllTrue(array, fn) {
	if( !(array instanceof Array) || array.length==0){
		throw new Error(mes.ERROR_ARR);
	}else if(!(fn instanceof Function)){
		throw new Error(mes.ERROR_FUN);
	}	
	for(var i = 0; i<array.length; i++){
		if(!(fn(array[i]))) return false;
	}
	return true;
}



/*
 Задача 2:
 Функция принимает массив и фильтрующую фукнцию и должна вернуть true или false
 Функция должна вернуть true если fn вернула true хотя бы для одного из элементов массива
 Необходимо выбрасывать исключение в случаях:
 - array не массив или пустой массив (с текстом "empty array")
 - fn не является функцией (с текстом "fn is not a function")
 Зарпещено использовать встроенные методы для работы с массивами
 */
function isSomeTrue(array, fn) {
	if( !(array instanceof Array) || array.length==0){
		throw new Error(mes.ERROR_ARR);
	}else if(!(fn instanceof Function)){
		throw new Error(mes.ERROR_FUN);
	}	
	for(var i = 0; i<array.length; i++){
		if(fn(array[i])) return true;
	}
}



/*
 Задача 3:
 Функция принимает заранее неизветсное количество аргументов, первым из которых является функция fn
 Функция должна поочередно запусти fn для каждого переданного аргумента (кроме самой fn)
 Функция должна вернуть массив аргументов, для которых fn выбросила исключение
 Необходимо выбрасывать исключение в случаях:
 - fn не является функцией (с текстом "fn is not a function")
 */
function returnBadArguments(fn) {
	var arr = Array.prototype.slice.call(arguments, 1),
		res = [];
	if(!(fn instanceof Function)){
		throw new Error(mes.ERROR_FUN);
	}
	for(var i = 0; i<arr.length;i++){
		try{
			fn(arr[i]);
		}catch(e){
			res.push(arr[i])
		}
	}
	return res
}

/*
 Задача 4:
 Функция имеет параметр number (по умолчанию - 0)
 Функция должна вернуть объект, у которого должно быть несколько методов:
 - sum - складывает number с переданными аргументами
 - dif - вычитает из number переданные аргументы
 - div - делит number на первый аргумент. Результат делится на следующий аргумент (если передан) и так далее
 - mul - умножает number на первый аргумент. Результат умножается на следующий аргумент (если передан) и так далее

 Количество передаваемых в методы аргументов заранее неизвестно
 Необходимо выбрасывать исключение в случаях:
 - number не является числом (с текстом "number is not a number")
 - какой-либо из аргументов div является нулем (с текстом "division by 0")
 */
function calculator() {
	var	arg = Array.prototype.slice.call(arguments, 1),
		number = arguments[0] || 0;
		if(!(typeof number == 'number')){
			throw new Error(mes.ERROR_NUM);
		};
	return {
		sum: function(...arg){
			return number + arg.reduce((a,b) => a+b);
		},
		dif: function(...arg){
			return number - arg.reduce((a,b) => a+b);
		},
		div: function(...arg){
			if(arg.some((e) => e==0)) throw new Error(mes.ERROR_DIV);
			return arg.reduce(function(a, b) {
  					return a / b;
					}, number);
		},
		mul: function(...arg){
			return number * arg.reduce((a,b) => a*b);}	
		}
	};
	
export {
    isAllTrue,
    isSomeTrue,
    returnBadArguments,
    calculator
};
