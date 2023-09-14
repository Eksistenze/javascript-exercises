const sumAll = function (int1, int2) {
	let total = 0;
	let greaterInt;
	let lesserInt;
	if (
		typeof int1 != "number" ||
		typeof int2 != "number" ||
		(int1 || int2) < 0
	) {
		return "ERROR";
	} else if (int1 > int2) {
		greaterInt = int1;
		lesserInt = int2;
	} else if (int1 < int2) {
		lesserInt = int1;
		greaterInt = int2;
	} else if (int1 === int2) {
		return int1 + int2;
	}
	for (i = lesserInt; i <= greaterInt; i++) {
		total += i;
	}
	return total;
};

// Do not edit below this line
module.exports = sumAll;
