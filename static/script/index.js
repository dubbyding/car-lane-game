import { Path } from './path.js';
import { Car } from './car.js';

class carGame {
	constructor() {
		this.path = new Path();
		this.car = new Car();
	}
}

new carGame();
