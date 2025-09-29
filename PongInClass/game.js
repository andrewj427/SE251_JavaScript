let c = document.querySelector(`canvas`)
let ctx = c.getContext(`2d`)

let timer = setInterval(main, 1000/60)

class GameObject
{
    constructor()
    {
        this.x = 100
        this.y = 100
        this.w = 100
        this.h = 100
        this.color = `red`
        this.vx = 0
        this.vy = 0
    }

    render()
    {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x,this.y,this.w,this.h)
    }
    move()
    {
        this.x += this.vx
        this.y += this.vy
    }
    

}


let box = []
 for(let i=0; i<50; i++)
    {
        box[i] = new GameObject
        box[i].x = Math.random()*c.width
        box[i].y = Math.random()*c.height   
        box[i].vy = Math.random()*(15-5)+5
        //box[i].vx = Math.random()*(15-5)+5
        box[i].w = box[i].vy; 
        box[i].h = box[i].w

    }


function main(){
    
    ctx.clearRect(0,0,c.width,c.height)
   
    for(let i=0; i<box.length; i++)
    {
        box[i].render()
        box[i].move()
        if(box[i].y >c.height - box[i].h)
        {
            box[i].y = 0
        }
        // if(box[i].y > c.height - box[i].h)
        // {
        //     box[i].vy = -box[i].vy
        // }
        // if(box[i].y <0 )
        // {
        //     box[i].vy = -box[i].vy
        // }
        // if(box[i].x > c.width - box[i].w)
        // {
        //     box[i].vx = -box[i].vx
        // }
        // if(box[i].x < 0 )
        // {
        //     box[i].vx = -box[i].vx
        // }
        
        
    }
}