const removeFromArray = function (arr, ...args) {
	/*for (i = 0; i < arr.length; i++) {
		if (arr[i] === arrRemove) {
			arr.splice(i, 1);
		}
	}
	return arr;*/
	return arr.filter((x) => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
