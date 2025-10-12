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

players[0].pad.x = 0 + players[0].pad.w/2
players[0].pad.color = 'red'

players[1].pad.x = c.width - players[1].pad.w/2
players[1].pad.color = 'blue'

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
       players[0].pad.vy += -players[0].pad.force
    }

    if(keys[`s`])
    {
        players[0].pad.vy += players[0].pad.force
    }

    if(keys['ArrowUp'])
    {
        players[1].pad.vy += -players[1].pad.force
    }

    if(keys['ArrowDown'])
    {
        players[1].pad.vy += players[1].pad.force
    }
    //applies friction
    players[0].pad.vy *= fy
    players[1].pad.vy *= fy
    //player movement
    players[0].pad.move();
    players[1].pad.move();

    //ball movement
    ball.move()

    //players[0] collision
    if(players[0].pad.y < 0+players[0].pad.h/2)
    {
        players[0].pad.y = 0+players[0].pad.h/2
    }
    if(players[0].pad.y > c.height-players[0].pad.h/2)
    {
        players[0].pad.y = c.height-players[0].pad.h/2
    }

    //players[1] collision
    if(players[1].pad.y < 0+players[1].pad.h/2)
    {
        players[1].pad.y = 0+players[1].pad.h/2
    }
    if(players[1].pad.y > c.height-players[1].pad.h/2)
    {
        players[1].pad.y = c.height-players[1].pad.h/2
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
    if(ball.collide(players[0].pad))
    {
        ball.x = players[0].pad.x + players[0].pad.w/2 + ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.collide(players[1].pad))
    {
        ball.x = players[1].pad.x - players[1].pad.w/2 - ball.w/2
        ball.vx = -ball.vx;
    }

    //draw the objects
    players[0].pad.draw()
    players[1].pad.draw()
    ball.draw()
}
