import { CAR_DETAILS } from './const.js';
import { midValue } from './utils.js';

class Car {
	/**
	 * This function gets the car moving positions and displays the player car.
	 */
	constructor() {
		this.gameArea = document.getElementById(CAR_DETAILS.ROOT_ID);

		this.getCarMovingPositions();
		this.displayPlayerCar();
		this.playerCarMove();
	}

	/**
	 *  Calculating the position to set the cars in the game.
	 */
	getCarMovingPositions = () => {
		let containerWidth = this.gameArea.clientWidth;

		/**
		 * Since there are three lanes, dividing the div into three different sections
		 * and finding the center of each section gives the path where cars run
		 */
		this.sectionWidth = containerWidth / CAR_DETAILS.CAR_LANES;

		this.positionCars = [];
		for (let i = 0; i < CAR_DETAILS.CAR_LANES; i++) {
			this.positionCars[i] = midValue(
				this.sectionWidth * i,
				this.sectionWidth * (i + 1)
			);
		}
	};

	/**
	 *  Creating a new player car.
	 */
	displayPlayerCar = () => {
		let playerImageLocation = `${CAR_DETAILS.CAR_IMAGE_PATH}/${CAR_DETAILS.PLAYER_IMAGE}`;
		let rotation = CAR_DETAILS.PLAYER_ROTATE;

		this.newCar(
			CAR_DETAILS.PLAYER_ID,
			playerImageLocation,
			rotation,
			this.positionCars[Math.floor(this.positionCars.length / 2)],
			CAR_DETAILS.PLAYER_POSITION_BOTTOM
		);
	};

	/**
	 * Creating a new car.
	 * @params id - Give new id of the creating car;
	 * @params imageLoaction - Location of the image of car to be displayed
	 * @params rotation - Angle by which the car should be rotated at the beginning
	 * @params positionLeft - position of the car with respect to left border in px;
	 * @params positionBottom - position of the car with respect to bottom border in px;
	 * */
	newCar = (id, imageLocation, rotation, positionLeft, positionBottom) => {
		let creatingCar = document.createElement('div');

		creatingCar.style.position = CAR_DETAILS.CAR_POSITION;
		creatingCar.style.background = `url(${imageLocation})`;
		creatingCar.style.backgroundSize = CAR_DETAILS.CAR_BACKGROUND_SIZE;
		creatingCar.style.width = CAR_DETAILS.CAR_WIDTH;
		creatingCar.style.aspectRatio = CAR_DETAILS.CAR_ASPECT_RATIO;

		/**
		 * Since left position gives the top right part of the car we need to calculate the middle part of the car
		 * and adjust it in such a way that the position is in the middle.
		 */
		let carPosition = `calc(${positionLeft}px - ${CAR_DETAILS.CAR_WIDTH} / 2)`;
		creatingCar.style.left = carPosition;
		creatingCar.style.bottom = positionBottom;

		creatingCar.style.transform = rotation;

		creatingCar.id = id;

		this.gameArea.appendChild(creatingCar);
	};

	playerCarMove = () => {
		this.playerElement = document.getElementById(CAR_DETAILS.PLAYER_ID);

		document.addEventListener('keypress', (ev) => {
			let pressedKey = ev.key.toLowerCase();
			if (pressedKey == 'a' || pressedKey == 'd') {
				this.movePlayerCar(pressedKey);
			}
		});
	};

	/**
	 *  Returning the position of the car.
	 * @param element - html element from document.getElementById()
	 * @returns object containing all positions of the car
	 */
	carCurrentPosition = (element) => {
		return {
			playerXMin: element.offsetLeft,
			playerXMax: element.offsetLeft + element.offsetWidth,
			playerYMin: 0,
			playerYMax: this.gameArea.clientHeight - element.offsetTop,
		};
	};

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
		this.transitionPlayerMove(nextIndex);
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

	/**
	 *  This function is used to move the car from one lane to another.
	 * @param destinationIndex - Gets the index of destination lane that player has to move to
	 */
	transitionPlayerMove = (destinationIndex) => {
		let transition;

		/* This is calculating the time it takes for the car to move from one lane to another. */
		let transitionTime =
			CAR_DETAILS.SECOND /
			Math.abs(
				this.centerPositionOfCar(this.playerElement) -
					this.positionCars[destinationIndex]
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

			if (centerPos - this.positionCars[destinationIndex] > 0) {
				transition = CAR_DETAILS.GO_LEFT;
			} else if (centerPos - this.positionCars[destinationIndex] < 0) {
				transition = CAR_DETAILS.GO_RIGHT;
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
	 *  Calculating the center of the car.
	 * @param element - html element from document.getElementById()
	 * @returns center of the car
	 */
	centerPositionOfCar = (element) => {
		let playerPosition = this.carCurrentPosition(element);
		return midValue(playerPosition.playerXMin, playerPosition.playerXMax);
	};

	addEnemyCars = () => {};
}

export { Car };
