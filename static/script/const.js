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
const ROUND_OFF_ERROR_FIX = -1;

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

const SECOND = 1000;
const GO_LEFT = -1;
const GO_RIGHT = 1;

const ENEMY_IMAGE = ['enemy1.png', 'enemy2.png', 'enemy3.png'];
const ENEMY_ROTATE = 'rotate(180deg)';
const ENEMY_POSITION_BOTTOM = '0px';

const ENEMY_SPEED = '20';
const CHANGE_FACTOR = -1;
const SCORE_POSITION = 'absolute';
const SCORE_BACKGROUND = 'white';
const SCORE_COLOR = 'black';
const SCORE_WIDTH = '20%';
const SCORE_ID = 'score';

/**
 * For playing area
 */
const WELCOME_INFO = 'Welcome To the Game';
const START_INFO = 'Press Space To Start';
const BACKGROUND_COLOR = 'rgba(0,0,0,0.8)';
const TEXT_COLOR = 'white';
const WIDTH = '100%';
const ASPECT_RATIO = '1/1.75';
const DISPLAY = 'flex';
const FLEX_WRAP = 'nowrap';
const FLEX_DIRECTION = 'column';
const JUSTIFY_CONTENTS = 'center';
const ALIGN_ITEMS = 'center';

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
	ROUND_OFF_ERROR_FIX,
};

let PLAYER_DETAILS = {
	CAR_IMAGE_PATH,
	PLAYER_IMAGE,
	PLAYER_POSITION_BOTTOM,
	PLAYER_ROTATE,
	PLAYER_ID,
	SECOND,
	GO_LEFT,
	GO_RIGHT,
};

let ENEMY_DETAILS = {
	CAR_IMAGE_PATH,
	CAR_LANES,
	ENEMY_IMAGE,
	ENEMY_ROTATE,
	ENEMY_POSITION_BOTTOM,
	ENEMY_SPEED,
	SECOND,
	CHANGE_FACTOR,
	SCORE_BACKGROUND,
	SCORE_COLOR,
	SCORE_ID,
	SCORE_POSITION,
	SCORE_WIDTH,
};

let GAME_DETAILS = {
	WELCOME_INFO,
	START_INFO,
	BACKGROUND_COLOR,
	TEXT_COLOR,
	WIDTH,
	ASPECT_RATIO,
	DISPLAY,
	FLEX_WRAP,
	FLEX_DIRECTION,
	JUSTIFY_CONTENTS,
	ALIGN_ITEMS,
};

export {
	ROAD_DETAILS,
	CAR_DETAILS,
	PLAYER_DETAILS,
	ENEMY_DETAILS,
	GAME_DETAILS,
};
