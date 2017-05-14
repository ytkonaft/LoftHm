/* ДЗ 3 - работа с массивами и объеектами */

/*
 Задача 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 */
function forEach(array, fn) {
	for(var i = 0; i<array.length; i++){
		fn(array[i],i,array);
	}
}

/*
 Задача 2:
 Напишите аналог встроенного метода map для работы с массивами
 */
function map(array, fn) {
	var mapArr =[];
	for(var i = 0; i<array.length;i++){
		mapArr.push(fn(array[i],i,array));
	}
	return mapArr
}

/*
 Задача 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 */
function reduce(array, fn, initial) {
	var res = initial || array[0],
		count = initial ? 0: 1;
	for(var i = count; i<array.length; i++){	
		res = fn(res,array[i],i,array)
	}
	return res;
}

/*
 Задача 4:
 Функция принимает объект и имя свойства, которое необходиом удалить из объекта
 Функция должна удалить указанное свойство из указанного объекта
 */
function deleteProperty(obj, prop) {
	delete obj[prop];
}

/*
 Задача 5:
 Функция принимает объект и имя свойства и возвращает true или false
 Функция должна проверить существует ли укзаанное свойство в указанном объекте
 */
function hasProperty(obj, prop) {
	return prop in obj
}

/*
 Задача 6:
 Функция должна получить все перечисляемые свойства объекта и вернуть их в виде массива
 */
function getEnumProps(obj) {
	var arr = [];
	for(var key in obj){
		arr.push(key)
	}
	return arr
}

/*
 Задача 7:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистра и вернуть в виде массива
 */
function upperProps(obj) {
		var arr = [];
	for(var key in obj){
		arr.push(key.toUpperCase())
	}
	return arr
}

/*
 Задача 8 *:
 Напишите аналог встроенного метода slice для работы с массивами
 */
function slice(array, from, to) {
	var arr = [];
	if(to >= 0){
		if(to >array.length) to = array.length;
		else to = to
	}else if(to < 0){
		to = array.length + to;
	}else if(typeof to == 'undefined'){
		to = array.length
	}
	if(from>=0){
		from = from;
	}else if(from<0){
		if(Math.abs(from)>array.length){
			from = 0
		}else{
			from = array.length + from;			
		}
	}else if(typeof from == 'undefined'){
		from = 0
	}

	for(var i = from; i<to; i++){
		arr.push(array[i]);
	}
	return arr;
}

/*
 Задача 9 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {
	var prox = new Proxy(obj,{
		set(target,prop,value){
			target[prop] = value*value;
			return true 
		}
	})
	return prox
}

export {
    forEach,
    map,
    reduce,
    deleteProperty,
    hasProperty,
    getEnumProps,
    upperProps,
    slice,
    createProxy
};
