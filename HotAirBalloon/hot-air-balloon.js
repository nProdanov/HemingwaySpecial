var height = 30;
var width = 30;
var velocity = 0;
var mass = 0.2;

function HotAirBalloon(x, y, ctx) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.velocity = velocity;
    this.mass = mass;
    this.ctx = ctx;
    this.img = createImage();

    this.borderPoints = function () {
        var borderPoints,
            p1, p2, p3, p4,
            p5, p6, p7, p8,
            p9, p10, p11, p12, p13;

        borderPoints = [];

        p1 = { x: this.x, y: this.y };
        p2 = { x: this.x + this.width, y: this.y };
        p3 = { x: this.x + this.width, y: this.y + this.height };
        p4 = { x: this.x, y: this.y + this.height };
        p5 = { x: this.x + 40, y: this.y - 20 };
        p6 = { x: this.x - 10, y: this.y - 20 };
        p7 = { x: this.x + 60, y: this.y - 60 };
        p8 = { x: this.x - 30, y: this.y - 60 };
        p9 = { x: this.x, y: this.y - 105 };
        p10 = { x: this.x + this.width, y: this.y - 105 };
        p11 = { x: this.x + this.width / 2, y: this.y - 105 };
        p12 = { x: this.x - this.width / 2, y: this.y - 95 };
        p13 = { x: this.x + this.width * 3 / 2, y: this.y - 95 };

        borderPoints.push(p1);
        borderPoints.push(p2);
        borderPoints.push(p3);
        borderPoints.push(p4);
        borderPoints.push(p5);
        borderPoints.push(p6);
        borderPoints.push(p7);
        borderPoints.push(p8);
        borderPoints.push(p9);
        borderPoints.push(p10);
        borderPoints.push(p11);
        borderPoints.push(p12);
        borderPoints.push(p13);

        return borderPoints;
    };

    this.draw = function () {
        var balloonPattern;
        // body of the balloon 
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = "brown";
        this.ctx.strokeStyle = "darkbrown";
        this.ctx.fill();
        this.ctx.stroke();

        // ropes
        this.ctx.beginPath();
        this.ctx.moveTo(this.x + 30, this.y);
        this.ctx.lineTo(this.x + 40, this.y - 20);
        this.ctx.moveTo(this.x, this.y);
        this.ctx.lineTo(this.x - 10, this.y - 20);
        this.ctx.stroke();

        balloonPattern = this.ctx.createPattern(this.img, 'repeat');
        
        // balloon
        this.ctx.beginPath();
        this.ctx.moveTo(this.x - 10, this.y - 20);
        this.ctx.lineTo(this.x + 40, this.y - 20);
        this.ctx.lineTo(this.x + 60, this.y - 60);
        this.ctx.lineTo(this.x - 30, this.y - 60);
        this.ctx.lineTo(this.x - 10, this.y - 20);
        this.ctx.arc(this.x + 15, this.y - 60, 45, 0, Math.PI, true);
        this.ctx.fillStyle = balloonPattern;
        this.ctx.strokeStyle = "red";
        this.ctx.stroke();
        this.ctx.fill();
    };


    this.moveUp = function (reverseSpeedIndex, speedUp) {
        this.velocity = (-(this.y) / reverseSpeedIndex) - speedUp;
    };

    function createImage() {
        var img = new Image();
        img.src = 'images/balloon-pattern.png';
        return img;
    }
}