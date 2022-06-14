import { ROAD_DETAILS } from './const.js';

/**
 * It sets the game area, the road, and the game speed
 */
class Path {
	/**
	 * The constructor function is used to set the initial speed of the game, set the game area, set the
	 * road, and set the game speed.
	 */
	constructor() {
		this.initialSpeed = 20;

		this.gameAreaSet();
		this.roadSet();
		this.gameSpeed();
	}

	/**
	 *  Setting the game area.
	 */
	gameAreaSet = () => {
		this.gameAreaElement = document.getElementById(ROAD_DETAILS.ROOT_ID);

		/**
		 * For Position of play Area
		 */
		this.gameAreaElement.style.width = ROAD_DETAILS.GAMEAREA_WIDTH;
		this.gameAreaElement.style.aspectRatio = ROAD_DETAILS.GAMEAREA_ASPECT_RATIO;
		this.gameAreaElement.style.margin = ROAD_DETAILS.GAMEAREA_CENTERIZE;
		this.gameAreaElement.style.position = ROAD_DETAILS.GAMEAREA_POSITION;
	};

	/* Setting the background of the game area as a road. */
	roadSet = () => {
		this.gameAreaElement.style.background = ROAD_DETAILS.GAMEAREA_BACKGROUND;
		this.gameAreaElement.style.backgroundRepeat =
			ROAD_DETAILS.GAMEAREA_BACKGROUND_REPEAT;
		this.gameAreaElement.style.backgroundSize =
			ROAD_DETAILS.GAMEAREA_BACKGROUND_SIZE;
	};

	/* Setting the speed of the game. */
	gameSpeed = () => {
		/**
		 * For Animation of background path with
		 */
		let animationDetail = `slide ${this.initialSpeed}s linear infinite`;
		this.gameAreaElement.style.animation = animationDetail;
	};
}

export { Path };
