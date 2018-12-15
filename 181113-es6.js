// rest参数
function add(...values){
	let sum = 0;
	for(var val of values) {
		sum += val;
	}

	return sum;
}

// console.log(add(1,2,3));
// console.log(add())


// 箭头函数
var values = [1,2,3];
var result = values.sort((a,b) => a - b);

// console.log(result);


// symbol
let mySymbol = Symbol('symbol');

// console.log(mySymbol);


