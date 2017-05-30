/* ДЗ 6.1 - Асинхронность и работа с сетью */

/**
 * Функция должна создавать Promise, который должен быть resolved через seconds секунду после создания
 *
 * @param {number} seconds - количество секунд, через которое Promise должен быть resolved
 * @return {Promise}
 */
function delayPromise(seconds) {
	return new Promise(function(resolved,rejected){
		setTimeout(function(){
			resolved();
		},seconds*1000);
	})
}

/**
 * Функция должна вернуть Promise, который должен быть разрешен массивом городов, загруженным из
 * https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
 * Элементы полученного массива должны быть отсортированы по имени города
 *
 * @return {Promise<Array<{name: String}>>}
 */
function loadAndSortTowns() {                                                                                     
	let prom =  new Promise(function(resolved){                                                                   
		let xhr = new XMLHttpRequest(),                                                                           
			citiesArr = [];                                                                                       
			xhr.open('GET','https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json', true);     
			xhr.send();                                                                                           
			xhr.addEventListener('load',function(){                                                               
			for (let key of JSON.parse(xhr.responseText)) {
			              citiesArr.push(key);  
			          }
			          citiesArr.sort((a, b) => { 
			              if (a.name < b.name) {
			                  return -1;
			              } else if (a.name > b.name) {
			                  return 1;
			              }
			          });

			          resolved(citiesArr);
			      })
			  });
			  return prom;
}                                                                                                                                                                                                                                                                                                                                                
                                                                                            

export {
    delayPromise,
    loadAndSortTowns
};
