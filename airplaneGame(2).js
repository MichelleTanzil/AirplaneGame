var player = {
    left: 450,
    top: 620
}

var enemies = [
    {left: 350, top: 200},
    {left: 450, top: 250},
    {left: 250, top: 150},
    {left: 150, top: 100}
]

var missiles=[];

function drawPlayer(){
    content = "<div class='player' style='left:" + player.left + "px; top: "+ player.top +"px'></div>";
    document.getElementById("players").innerHTML = content;
}

function drawEnemies(){
    content = "";
    for (var idx = 0; idx < enemies.length; idx++){
        content += "<div class='enemy' style='left:" + enemies[idx].left + "px; top: "+ enemies[idx].top +"px'></div>";
    }    
    document.getElementById("enemies").innerHTML = content;
}

function drawMissiles(){
    content = "";
    for (var idx = 0; idx < missiles.length; idx++){
        content+="<div class = 'missile' style='left: "+missiles[idx].left+"px; top: "+missiles[idx].top+"px'></div>";
    }
    document.getElementById("missiles").innerHTML = content;  
}

function moveEnemies(){
    for (var idx = 0; idx < enemies.length; idx++){
        if (enemies[idx].top <= 625){
            enemies[idx].top = enemies[idx].top + 1;
        }
    }
}

function moveMissiles(){
    for (var idx = 0; idx < missiles.length; idx++){
        missiles[idx].top = missiles[idx].top - 4;
    }
}

document.onkeydown = function(e){
    if (player.left > 0){
        if (e.keyCode == 37){ //LEFT
            player.left -= 10;
        }
        if (e.keyCode == 39 && player.left < 830){ //RIGHT
            player.left += 10;
        }
    }

    if (e.keyCode == 38 && player.top > 500){ //UP
    player.top -= 10;
    }

    if (e.keyCode == 40 && player.top < 625){ //DOWN
        player.top += 10;
    }    

    if (e.keyCode == 32){ //FIRE
        missiles.push({left: (player.left + 34), top: (player.top - 8)});  
        drawMissiles(); 
        }
        console.log(missiles);
        drawPlayer();
    }   

function gameLoop(){
    drawPlayer();

    moveEnemies();
    drawEnemies();

    moveMissiles();
    drawMissiles();

    setTimeout(gameLoop, 10)
}
gameLoop();