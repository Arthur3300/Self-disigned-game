class Brick {
    constructor(x, y, width, height, image) {
      this.x = x
      this.y = y
      this.width = width
      this.height = height
      this.image = image
      this.points = 1
    }
  
    display() {
      image(brick1Image, this.x, this.y, this.width, this.height);
    }
  
    // isColliding(ball) {
    //   // collide with brick
    //   // AABB axis aligned bounding box
    //   if(ball.y - ball.radius <= this.y + this.height &&
    //       ball.y + ball.radius >= this.y &&
    //       ball.x + ball.radius >= this.x &&
    //       ball.x - ball.radius <= this.x + this.width) {
    //         return true
    //       }
    // }
  }