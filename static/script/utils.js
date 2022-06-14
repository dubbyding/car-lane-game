/**
 * It returns a random number between the max and min values.
 * @param max - The maximum number you want to generate.
 * @param min - The minimum number that the random number can be.
 * @returns A random number between the max and min values.
 */
let randomNumber = (max, min) => {
	return Math.floor(Math.random() * max) + min;
};

/**
 * This function takes two numbers, adds them together, divides the sum by two, and returns the result as mid point.
 * @param x - The first number
 * @param y - The second number
 * @returns The midpoint between two numbers.
 */
let midValue = (x, y) => {
	return Math.round((x + y) / 2);
};

export { randomNumber, midValue };
