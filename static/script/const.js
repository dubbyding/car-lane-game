/**
 * For container ID
 */
const ROOT_ID = 'root';

/**
 * For Road/Path
 */
const GAMEAREA_WIDTH = '25%';
const GAMEAREA_ASPECT_RATIO = '1/1.75';
const GAMEAREA_POSITION = 'relative';
const GAMEAREA_BACKGROUND = 'url("../images/backgroundImage.png")';
const GAMEAREA_BACKGROUND_REPEAT = 'repeat-y';
const GAMEAREA_CENTERIZE = '0 auto';
const GAMEAREA_BACKGROUND_SIZE = 'contain';
const GAMEAREA_BACKGROUND_SOUND = 'https://www.youtube.com/watch?v=iXuJGUKCjS8';

/**
 * For Cars
 */
const CAR_LANES = 3;
const CAR_IMAGE_PATH = '../images';
const CAR_WIDTH = '10%';
const CAR_ASPECT_RATIO = '1/2';
const CAR_POSITION = 'absolute';
const CAR_BACKGROUND_SIZE = 'cover';
const PLAYER_IMAGE = 'player.png';
const PLAYER_POSITION_BOTTOM = '0px';
const PLAYER_ROTATE = 'rotate(0)';
const PLAYER_ID = 'player';
const ENEMY_IMAGE = ['enemy1.png', 'enemy2.png', 'enemy3.png'];
const ENEMY_ROTATE = 'rotate(180deg)';
const SECOND = 1000;
const GO_LEFT = -1;
const GO_RIGHT = 1;

let ROAD_DETAILS = {
	ROOT_ID,
	GAMEAREA_WIDTH,
	GAMEAREA_ASPECT_RATIO,
	GAMEAREA_POSITION,
	GAMEAREA_BACKGROUND,
	GAMEAREA_BACKGROUND_REPEAT,
	GAMEAREA_CENTERIZE,
	GAMEAREA_BACKGROUND_SIZE,
	GAMEAREA_BACKGROUND_SOUND,
};

let CAR_DETAILS = {
	ROOT_ID,
	CAR_LANES,
	CAR_IMAGE_PATH,
	CAR_WIDTH,
	CAR_ASPECT_RATIO,
	CAR_POSITION,
	CAR_BACKGROUND_SIZE,
	PLAYER_IMAGE,
	PLAYER_POSITION_BOTTOM,
	PLAYER_ROTATE,
	PLAYER_ID,
	ENEMY_IMAGE,
	ENEMY_ROTATE,
	SECOND,
	GO_LEFT,
	GO_RIGHT,
};

export { ROAD_DETAILS, CAR_DETAILS };
