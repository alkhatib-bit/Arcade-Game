// Enemy class. Enemies our player must avoid
let Enemy = function(x,y,speed) {
    // Variables applied to each of our instances to controll the x-axis & y-axis of the enemy
    this.x = x;
    this.y = y;
    this.speed = Math.floor((Math.random()*300)+200);
     // The image/sprite for our enemies
    this.sprite = 'images/enemy-bug.png'; 
};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
 if(this.x < 505) { this.x = this.x + this.speed * dt; } 
 else { this.x = -2; }
  //check if the player collides with an enemy and if so, it will restart the player back to it;s position
    if(this.x < player.x + 30 && this.x + 60 > player.x && this.y < player.y + 60 && this.y + 40 > player.y) {
        player.x = 200;
        player.y = 380;
    }
};

// Draw the enemy on the screen
Enemy.prototype.render = function() { ctx.drawImage(Resources.get(this.sprite), this.x, this.y); };


 // player class
let Player = function(x,y) {
    this.x = x;
    this.y = y;
    // The image/sprite for the player
    this.sprite = 'images/char-horn-girl.png';}
 
Player.prototype.update = function() {
    // conditions to make sure that the player doesent get out of the canvas
    if (this.y > 400) { this.y = 400; }

    if (this.x > 400) { this.x = 400; }

    if (this.x < 0) { this.x = 0; }
// condition to make sure that when the player gets to the water it wins and restarts the palyer in place 
    if (this.y < 0) {
        this.x = 200;
        this.y = 400;
         
    }
}//End of update

// Draw the player on the screen
Player.prototype.render = function(){ ctx.drawImage(Resources.get(this.sprite), this.x, this.y);}



Player.prototype.handleInput = function(keypressed){
    // switch to make the player move according to the mouse clicked 
    switch(keypressed){
        //diffrenece of only 50 insted of 100 to make it more fun :)
        case 'up' : this.y -= 50
        break;
        case 'down': this.y += 50
        break;
        case 'right': this.x += 50
        break;
        case 'left' : this.x -= 50
        break;
    }
}

  
// Place all enemy objects in an array with diffrent postions
let allEnemies=[new Enemy(0,50) , new Enemy(0, 140), new Enemy(0, 230) , new Enemy(100, 230),new Enemy(200, 230)]; 
    
// Place the player object in a variable called player and set its postion to the start 
let player = new Player(200, 400);
 
 
document.addEventListener('keyup', function(e) {
    let allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
 