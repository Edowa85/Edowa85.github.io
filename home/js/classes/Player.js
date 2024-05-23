class Player extends Sprite {
    constructor({
        CollisionBlocks = [], imageSrc, frameRate }) {
        super({ imageSrc, frameRate})
        this.position = {
            x: 200,
            y: 200
        }

        this.velocity = {
            x:0,
            y:0,
        }
        
    
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1

        this.CollisionBlocks = CollisionBlocks
    }



 update() {
    c.fillStyle = 
    this.position.x += this.velocity.x
    for (let i = 0; i < this.CollisionBlocks.length; i++) {
        const CollisionBlock = this.CollisionBlocks[i]
        if (
        this.position.x <= CollisionBlock.position.x + CollisionBlock.width &&
        this.position.x + this.width >= CollisionBlock.position.x &&
        this.position.y + this.height >= CollisionBlock.position.y &&
        this.position.y <= CollisionBlock.position.y + CollisionBlock.height
        ) {
            if(this.velocity.x < -0) {
                this.position.x = CollisionBlock.position.x + CollisionBlock.width + 0.01
                break

            }
            if (this.velocity.x > 0) {
                this.position.x = CollisionBlock.position.x - this.width -0.01
                break
            }
        }
    }

    // apply gravity
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
   

    // vertical collisions
    for (let i = 0; i < this.CollisionBlocks.length; i++) {
        const CollisionBlock = this.CollisionBlocks[i]
        if (
        this.position.x <= CollisionBlock.position.x + CollisionBlock.width &&
        this.position.x + this.width >= CollisionBlock.position.x &&
        this.position.y + this.height >= CollisionBlock.position.y &&
        this.position.y <= CollisionBlock.position.y + CollisionBlock.height
        ) {
            if(this.velocity.y < 0) {
                this.velocity.y = 0
                this.position.y = CollisionBlock.position.y + CollisionBlock.height + 0.01
                break

            }
            if (this.velocity.y > 0) {
                this.velocity.y = 0
                this.position.y = CollisionBlock.position.y - this.height -0.01
                break
            }
        }
    }


  }
}