const repeatString = function (string, num) {
	let output = "";
	if (num > -1) {
		for (i = num; i > 0; i--) {
			output += string;
		}
	} else {
		output = "ERROR";
	}
	return output;
};

// Do not edit below this line
module.exports = repeatString;
