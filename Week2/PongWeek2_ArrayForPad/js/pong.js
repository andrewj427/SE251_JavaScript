//canvas and context
var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)

//timer to make the game run at 60fps
var timer = setInterval(main, 1000/60)

//global friction variable
var fy = .97
var players = []
//players setup
for(var i=0;i<2;i++) {
    players[i] = new Player();
    players[i].name = `player ${i + 1}`;
    players[i].pad = new Box();
    players[i].pad.w = 20;
    players[i].pad.h = 150;

}

//create array for pads
var pad = []
//iterate through and store players pads to array
for(var i=0;i<2;i++) {
    pad[i] = players[i].pad
}
pad[0].x = 0 + pad[0].w/2
pad[0].color = 'red'

pad[1].x = c.width - pad[1].w/2
pad[1].color = 'blue'

//ball setup
var ball = new Box();
ball.w = 20
ball.h = 20
ball.vx = -2
ball.vy = -2
ball.color = `white`

function main()
{
    //erases the canvas
    ctx.clearRect(0,0,c.width,c.height)
    
    //players[0] accelerates when key is pressed 
    if(keys[`w`])
    {
       pad[0].vy += -pad[0].force
    }

    if(keys[`s`])
    {
        pad[0].vy += pad[0].force
    }

    if(keys['ArrowUp'])
    {
        pad[1].vy += -pad[1].force
    }

    if(keys['ArrowDown'])
    {
        pad[1].vy += pad[1].force
    }
    //applies friction
    pad[0].vy *= fy
    pad[1].vy *= fy
    //player movement
    pad[0].move();
    pad[1].move();

    //ball movement
    ball.move()

    //players[0] collision
    if(pad[0].y < 0+pad[0].h/2)
    {
        pad[0].y = 0+pad[0].h/2
    }
    if(pad[0].y > c.height-pad[0].h/2)
    {
        pad[0].y = c.height-pad[0].h/2
    }

    //players[1] collision
    if(pad[1].y < 0+pad[1].h/2)
    {
        pad[1].y = 0+pad[1].h/2
    }
    if(pad[1].y > c.height-pad[1].h/2)
    {
        pad[1].y = c.height-pad[1].h/2
    }
    //ball collision 
    if(ball.x < 0) //left side
    {
        ball.x = c.width/2
        ball.y  =c.height/2
        ball.vx =  Math.random()*(7-3)+3
        ball.vy =  Math.random()*(3-1)+1 //set vy a bit lower so the ball always has more x movement than y

    }
    if(ball.x > c.width) //right side
    {
        ball.x = c.width/2
        ball.y = c.height/2
        ball.vx =  Math.random()*7
        ball.vy =  Math.random()*3

    }
    if(ball.y < 0)
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if(ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
       
    }

    //players[0] with ball collision
    if(ball.collide(pad[0]))
    {
        ball.x = pad[0].x + pad[0].w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.collide(pad[1]))
    {
        ball.x = pad[1].x - pad[1].w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    pad[0].draw()
    pad[1].draw()
    ball.draw()
}
