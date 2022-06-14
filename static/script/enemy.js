import { Car } from './car.js';
import { ENEMY_DETAILS } from './const.js';
import { midValue, randomNumber } from './utils.js';

class EnemyPlayer extends Car {
	constructor() {
		super();

		this.speedFactor = ENEMY_DETAILS.ENEMY_SPEED;
		this.speed = ENEMY_DETAILS.SECOND / this.speedFactor;

		this.enemyCars;

		this.createEnemy();
	}

	/**
	 *  A function that is returning an array of partitioned heights of the path
	 */
	heightDivide = () => {
		let partitionNumber = 2 * ENEMY_DETAILS.CAR_LANES - 1;
		let partitionHeight = Math.round(
			this.gameArea.clientHeight / partitionNumber
		);

		let partitionLimit = [];
		for (let i = 0; i < partitionNumber; i++) {
			partitionLimit[i] = partitionHeight * (i + 1);
		}
		return partitionLimit;
	};

	/**
	 *  This is a function that is creating the enemy cars.
	 */
	createEnemy = () => {
		if (!this.enemyCars) {
			this.enemyCars = [0];
		} else {
			let carsNumber = this.enemyCars.length;
			let i;
			for (i = 0; i < carsNumber; i++) {
				if (!(i in this.enemyCars)) {
					this.enemyCars.push(i);
				}
			}
			if (i == this.enemyCars.length) {
				this.enemyCars.push(i);
			}
		}

		let enemyList = ENEMY_DETAILS.ENEMY_IMAGE;

		let currentCar = randomNumber(0, enemyList.length - 1);
		let enemyImageLocation = `${ENEMY_DETAILS.CAR_IMAGE_PATH}/${enemyList[currentCar]}`;
		let rotation = ENEMY_DETAILS.ENEMY_ROTATE;

		let index = randomNumber(0, ENEMY_DETAILS.CAR_LANES);

		for (let i in this.enemyCars) {
			if (!document.getElementById(`${this.enemyCars[i]}`)) {
				this.newCar(
					`${this.enemyCars[i]}`,
					enemyImageLocation,
					rotation,
					this.positionCars[index],
					ENEMY_DETAILS.ENEMY_POSITION_BOTTOM,
					false
				);
				this.moveEnemy(this.enemyCars[i]);
			}
		}
	};

	/**
	 *  This is a function that is moving the enemy cars.
	 * @param id - id of the enemy car to me moved
	 * @param enemySpeed - speed of the enemy car to be moved
	 */
	moveEnemy = (id) => {
		let enemySpeed = this.speed;
		let translateEnemy = setInterval(() => {
			enemySpeed = this.speed;
			let enemyElement = document.getElementById(`${id}`);
			let { playerYMin, playerYMax } = this.carCurrentPosition(enemyElement);
			if (playerYMax <= 0) {
				clearInterval(translateEnemy);
				this.gameArea.removeChild(enemyElement);
				this.enemyCars = this.enemyCars.splice(1, this.enemyCars.length - 1);
				this.createEnemy();
			} else {
				enemyElement.style.bottom = `${playerYMin - 1}px`;
			}
			if (this.enemyCars[0] == parseInt(enemyElement.id)) {
				this.checkGap(playerYMin);
			}
		}, enemySpeed);
	};

	/* Checking the distance between the enemy car and the player car. */
	checkGap = (x) => {
		let partition = this.heightDivide();

		let distance = this.gameArea.clientHeight - x;

		for (let i in partition) {
			if (partition[i] % 2 == 0) {
				if (distance == partition[i]) {
					this.createEnemy();
				}
			}
		}
	};
}

export { EnemyPlayer };
