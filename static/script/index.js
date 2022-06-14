import { Path } from './path.js';
import { Player } from './player.js';
import { EnemyPlayer } from './enemy.js';

class carGame {
	constructor() {
		this.path = new Path();
		this.car = new Player();
		this.enemy = new EnemyPlayer();
	}
}

new carGame();
