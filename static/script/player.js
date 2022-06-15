import { Car } from './car.js';
import { PLAYER_DETAILS } from './const.js';
import { midValue } from './utils.js';

/* It creates a new player car and moves it from one lane to another. */
class Player extends Car {
	/**
	 * The constructor function is called when the class is instantiated. It calls the super() function,
	 * which is the parent class constructor. Then it calls the displayPlayerCar() and playerCarMove()
	 * functions.
	 */
	constructor() {
		super();

		this.id = PLAYER_DETAILS.PLAYER_ID;

		this.displayPlayerCar();
		this.playerCarMove();
	}

	/**
	 *  Creating a new player car.
	 */
	displayPlayerCar = () => {
		let playerImageLocation = `${PLAYER_DETAILS.CAR_IMAGE_PATH}/${PLAYER_DETAILS.PLAYER_IMAGE}`;
		let rotation = PLAYER_DETAILS.PLAYER_ROTATE;

		this.newCar(
			this.id,
			playerImageLocation,
			rotation,
			this.positionCars[Math.floor(this.positionCars.length / 2)],
			PLAYER_DETAILS.PLAYER_POSITION_BOTTOM
		);
	};

	/**
     *  A function that is listening for a keypress event. If the key pressed is 'a' or 'd' then it calls
    the movePlayerCar function. 
    */
	playerCarMove = () => {
		this.playerElement = document.getElementById(this.id);

		document.addEventListener('keypress', (ev) => {
			let pressedKey = ev.key.toLowerCase();
			if (pressedKey == 'a' || pressedKey == 'd') {
				this.movePlayerCar(pressedKey);
			}
		});
	};

	/**
	 *  This function is used to move the car from one lane to another.
	 * @param pressedKey - key pressed i.e. 'a' or 'd' to go towards respective lane
	 */
	movePlayerCar = (pressedKey) => {
		let playerPosition = this.carCurrentPosition(this.playerElement);
		let centerPos = midValue(
			playerPosition.playerXMin,
			playerPosition.playerXMax
		);

		let nextIndex;

		let index = this.getIndexOfCurrentLanePosition(centerPos);
		if (pressedKey == 'a') {
			/**
			 * If Index is at the edge then do nothing
			 */
			if (this.positionCars[0] > centerPos) {
				return;
			}
			nextIndex = index - 1;
		} else {
			if (this.positionCars[this.positionCars.length - 1] < centerPos) {
				return;
			}
			nextIndex = index + 1;
		}

		/**
		 * If index is not at the edge then go from current index lane to the one at the left
		 * represented by "-1"
		 */
		let transition;

		/* This is calculating the time it takes for the car to move from one lane to another. */
		let transitionTime =
			PLAYER_DETAILS.SECOND /
			Math.abs(
				this.centerPositionOfCar(this.playerElement) -
					this.positionCars[nextIndex]
			);

		/* This is used to clear the previous interval animation. */
		if (this.intervalAnimation) {
			clearInterval(this.intervalAnimation);
		}

		/* This is a function that is called every `transitionTime` milliseconds. It is used to move the car
		from one lane to another. */
		this.intervalAnimation = setInterval(() => {
			let playerPosition = this.carCurrentPosition(this.playerElement);
			let centerPos = this.centerPositionOfCar(this.playerElement);

			if (centerPos - this.positionCars[nextIndex] > 0) {
				transition = PLAYER_DETAILS.GO_LEFT;
			} else if (centerPos - this.positionCars[nextIndex] < 0) {
				transition = PLAYER_DETAILS.GO_RIGHT;
			} else {
				transition = 0;
				clearInterval(this.intervalAnimation);
			}
			this.playerElement.style.left = `${
				playerPosition.playerXMin + transition
			}px`;
		}, transitionTime);
	};

	/**
	 * This function is used to find the index of the current lane position of the car.
	 * @param center - center of the car
	 * @returns index of lane
	 */
	getIndexOfCurrentLanePosition = (center) => {
		let currentIndex = 0;
		let minimumDiff = 0;
		for (let i in this.positionCars) {
			let currentDiff = Math.abs(center - this.positionCars[i]);
			if (i == 0 || currentDiff < minimumDiff) {
				minimumDiff = currentDiff;
				currentIndex = i;
			}
		}
		return parseInt(currentIndex);
	};
}

export { Player };
