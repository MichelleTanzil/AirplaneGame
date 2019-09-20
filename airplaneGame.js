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

function drawPlayer(){
    content = "<div class='player' style='left:" + player.left + "px; top: "+ player.top +"px'></div>";
    document.getElementById("players").innerHTML = content;
}
drawPlayer();

function drawEnemies(){
    content = "";
    for (var idx = 0; idx < enemies.length; idx++){
        content += "<div class='enemy' style='left:" + enemies[idx].left + "px; top: "+ enemies[idx].top +"px'></div>";
        document.getElementById("enemies").innerHTML = content;
    }    
}
drawEnemies();

document.onkeydown = function(e){
    if (player.left > 0 && player.left < 830){
        if (e.keyCode == 37){ //LEFT
            player.left -= 10;
        }
        if (e.keyCode == 39){ //RIGHT
            player.left += 10;
        }
    }

    if (e.keyCode == 38 && player.top > 500){ //UP
    player.top -= 10;
    }

    if (e.keyCode == 40 && player.top < 625){ //DOWN
        player.top += 10;  
    }
    drawPlayer();
}