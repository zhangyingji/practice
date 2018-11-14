// rest参数
function add(...values){
	let sum = 0;
	for(var val of values) {
		sum += val;
	}

	return sum;
}

// console.log(add(1,2,3));

