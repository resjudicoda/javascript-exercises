function add (...args) {
	
	const totalNumbers = args.reduce((a, b) => {
		return a + b;
	}, );
	return totalNumbers;
}

function subtract (...args) {

	const difference = args.reduce((a, b) => {
		return a - b;
	}, );
	return difference;
	
}

function sum (array) {
	const sumAll = array.reduce((a, b) => {
		return a + b;
	}, 0);
	return sumAll;
	
}

function multiply (array) {
	const product = array.reduce((a, b) => {
		return a * b;
	}, );
	return product;
}

function power(...args) {
	const raised = args.reduce((a, b) => {
		return a ** b;
	}, );
	return raised;
}

function factorial(n) {
	if (n==0 || n==1){
		return 1;
	  }
	  return factorial(n-1)*n;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}