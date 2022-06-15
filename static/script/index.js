import { Path } from './path.js';
import { Player } from './player.js';
import { EnemyPlayer } from './enemy.js';
import { GAME_DETAILS } from './const.js';

/**
 *  It creates a menu for the game, and when the user presses the spacebar, it creates a new player and
enemy, and then checks for collisions 
*/
class carGame {
	/**
	 * The constructor function is a special function that is called when an object is created from a
	 * class.
	 */
	constructor() {
		this.path = new Path();
		this.startMenu();
	}

	/** 
     * This is a function that creates a menu for the game. It creates a section element, and then creates
    a heading and a paragraph element. It then adds the heading and paragraph to the section element.
    It then adds the section element to the game area. It then adds an event listener to the document
    that listens for the spacebar to be pressed. When the spacebar is pressed, it clears the game area,
    creates a new player and enemy, and then checks for collisions. 
    */
	startMenu = () => {
		let menu = document.createElement('section');

		let heading = document.createElement('h1');
		heading.innerHTML = GAME_DETAILS.WELCOME_INFO;

		let p = document.createElement('p');
		p.innerHTML = GAME_DETAILS.START_INFO;

		menu.appendChild(heading);
		menu.appendChild(p);

		menu.style.backgroundColor = GAME_DETAILS.BACKGROUND_COLOR;
		menu.style.color = GAME_DETAILS.TEXT_COLOR;
		menu.style.width = GAME_DETAILS.WIDTH;
		menu.style.aspectRatio = GAME_DETAILS.ASPECT_RATIO;
		menu.style.display = GAME_DETAILS.DISPLAY;
		menu.style.flexWrap = GAME_DETAILS.FLEX_WRAP;
		menu.style.flexDirection = GAME_DETAILS.FLEX_DIRECTION;
		menu.style.justifyContent = GAME_DETAILS.JUSTIFY_CONTENTS;
		menu.style.alignItems = GAME_DETAILS.ALIGN_ITEMS;

		this.path.gameAreaElement.appendChild(menu);

		document.addEventListener('keypress', (ev) => {
			if (ev.code == 'Space') {
				this.path.gameAreaElement.innerHTML = '';
				this.car = new Player();
				this.enemy = new EnemyPlayer(this.car);

				this.collisionStatusCheck();
			}
		});
	};

	/**
	 *  Creating a new menu when the game ends.
	 */
	endMenu = () => {
		let menu = document.createElement('section');

		let heading = document.createElement('h1');

		// Retrieve highscore
		let highScore = localStorage.getItem('Score');
		if (!highScore || this.score > highScore) {
			highScore = this.score;
		}
		heading.innerHTML = `HighScore: ${highScore}<br>Score:${this.score}`;

		localStorage.setItem('Score', highScore); // Save highscore to local storage

		let p = document.createElement('p');
		p.innerHTML = GAME_DETAILS.START_INFO;

		menu.appendChild(heading);
		menu.appendChild(p);

		menu.style.backgroundColor = GAME_DETAILS.BACKGROUND_COLOR;
		menu.style.color = GAME_DETAILS.TEXT_COLOR;
		menu.style.width = GAME_DETAILS.WIDTH;
		menu.style.aspectRatio = GAME_DETAILS.ASPECT_RATIO;
		menu.style.display = GAME_DETAILS.DISPLAY;
		menu.style.flexWrap = GAME_DETAILS.FLEX_WRAP;
		menu.style.flexDirection = GAME_DETAILS.FLEX_DIRECTION;
		menu.style.justifyContent = GAME_DETAILS.JUSTIFY_CONTENTS;
		menu.style.alignItems = GAME_DETAILS.ALIGN_ITEMS;

		this.path.gameAreaElement.innerHTML = '';
		this.path.gameAreaElement.appendChild(menu);

		document.addEventListener('keypress', this.startGame);
	};

	/** This is a function that is called when the user presses the spacebar. It removes the event listener
    for the spacebar, clears the game area, creates a new player and enemy, and then checks for
    collisions. 
    * @param ev - keyboard on press object
    */
	startGame = (ev) => {
		if (ev.code == 'Space') {
			document.removeEventListener('keypress', this.startGame);
			this.path.gameAreaElement.innerHTML = '';
			this.car = new Player();
			this.enemy = new EnemyPlayer(this.car);

			this.collisionStatusCheck();
		}
	};

	/**
	 * Checking for collision between the player and the enemy.
	 */
	collisionStatusCheck = () => {
		let collisionCheck = setInterval(() => {
			console.log('in');
			try {
				if (this.enemy.collisionStatus) {
					clearInterval(collisionCheck);
					this.score = this.enemy.score;
					this.endMenu();
				}
			} catch (e) {
				clearInterval(collisionCheck);
			}
		}, this.enemy.speed);
	};
}

new carGame();
