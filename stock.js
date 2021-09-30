var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize',function(){
    //canvas.width = window.innerWidth;
    //canvas.height = window.innerHeight; 
});
    
const c = canvas.getContext('2d');

// clas ===================================

class Bar{
    constructor(x,y,min,max,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color ==-1?'#00ff00':'red'
        this.draw = function(){
            c.beginPath();
               
           c.strokeStyle = this.color;
            c.fillStyle = this.color
            c.fill();
            c.fillRect( this.x, this.y, this.width,this.height);
            line(x+ width/2 ,y + max,x + width/2 ,y+height+min)
           // c.fill();
            c.stroke();
        }
        this.update = function(){
            this.draw();
        }
    }

}

function line(x1,y1,x2,y2){
    c.beginPath( )

    c.moveTo(x1,y1)
    c.lineTo(x2,y2)
    c.stroke()
}
//to generate random numbers between min and max

var randomInterval = (min,max) => {
    return ((max - min)*Math.random()) + min;

}
class Stock{
    constructor(){
        this.open = randomInterval(80,300)
        this.close = randomInterval(90,310)
        this.min = randomInterval(-40,-60)
        this.max = randomInterval(50,70)
    }
}
let n = 50
let array = []
let stockArray = []
for(i=0;i<n;i++){
stockArray.push(new Stock())
}
let interval = canvas.width/n
for(i=0;i<n;i++){
    array.push(new Bar(interval*i
    ,stockArray[i].open
    
    ,stockArray[i].min
    ,stockArray[i].max
    ,10
    ,Math.abs(stockArray[i].open - stockArray[i].close)
    ,Math.sign(stockArray[i].open - stockArray[i].close)))
}

function animate(){
    requestAnimationFrame(animate)
    c.fillStyle = '#223046ff'
    c.fillRect(0,0,canvas.width,canvas.height)


    c.fill()
    for (let index = 0; index < array.length; index++) {
        array[index].draw();
        
    }

}
animate()
