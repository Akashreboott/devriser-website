export const splitString = (string) => {
	let arr = [];

	for (let letter of string) {
		arr.push(letter);
	}

	return arr;
};

export const slugify = (sentence, delimiter) => sentence?.split(delimiter ?? " ").join("-");
