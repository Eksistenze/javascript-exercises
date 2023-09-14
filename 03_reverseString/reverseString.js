const reverseString = function (str) {
	let output = "";
	for (i = 0; i < str.length; i++) {
		output += str.slice(str.length - (i + 1), str.length - i);
	}
	return output;
};

// Do not edit below this line
module.exports = reverseString;
