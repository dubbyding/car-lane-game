import { CAR_DETAILS } from './const.js';
import { midValue } from './utils.js';

/**
 *  The class creates a new car and returns the position of the car.
 */
class Car {
	/**
	 * This function gets the car moving positions and displays the player car.
	 */
	constructor() {
		this.gameArea = document.getElementById(CAR_DETAILS.ROOT_ID);

		this.getCarMovingPositions();
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
	 * Creating a new car.
	 * @params id - Give new id of the creating car;
	 * @params imageLoaction - Location of the image of car to be displayed
	 * @params rotation - Angle by which the car should be rotated at the beginning
	 * @params positionLeft - position of the car with respect to left border in px;
	 * @params positionBottom - position of the car with respect to bottom border in px;
	 * @params bottom - takes positionBottom from bottom only if this is true else takes from top. Default is true.
	 * */
	newCar = (
		id,
		imageLocation,
		rotation,
		positionLeft,
		positionBottom,
		bottom = true
	) => {
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

		if (bottom) {
			creatingCar.style.bottom = positionBottom;
		} else {
			creatingCar.style.bottom = `${
				this.gameArea.clientHeight - parseInt(positionBottom)
			}px`;
		}

		creatingCar.style.transform = rotation;

		creatingCar.id = id;

		this.gameArea.appendChild(creatingCar);
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
			playerYMin: parseInt(element.style.bottom),
			playerYMax: parseInt(element.style.bottom) + element.offsetHeight,
		};
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
}

export { Car };
