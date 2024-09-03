import Paddle from "./Paddle.js";
import Ball from "./Ball.js"

export default class AiPaddle extends Paddle {
    constructor(x, y, width, height, canvasHeight) {
        super(x, y, width, height, canvasHeight);
    }
    
    move(ballY, dt) {
        this.y = ballY 
        this.update(dt) // So that the paddles dont go over the edge
    
    }
}