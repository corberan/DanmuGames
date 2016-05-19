ScriptManager.clearTimer();
ScriptManager.clearEl();
ScriptManager.clearTrigger();

var COLOR_BACKGROUND = 0xC8C8C8;
var COLOR_LINE = 0x133C40;
var COLOR_BIGBAR = 0x133C40;
var COLOR_BAR = 0x133C40;
var COLOR_WIN_BACKGROUND = 0x55CCAE;
var COLOR_FAIL_BACKFROUND = 0xC76363;

var PIN_RADIUS = 8;
var PIN_DISTANCE_TO_CENTER = 120;

var playerWidth = Player.width;
var playerHeight = Player.height;
var playerCenterX = playerWidth / 2;
var playerCenterY = playerHeight / 2;

var sharpBack = $.createShape({lifeTime: 0});
var sharpMain = $.createShape({lifeTime: 0, x: playerCenterX, y: playerCenterY});
var sharpFront = $.createShape({lifeTime: 0});

var gameData = {
    levelNumber: 10,
    data: [
        [2, 4, 2, 1, 0], // 初始球数，需要插进去的球数，旋转速度，顺时针转-1逆时针转1忽快忽慢0，限制时间
        [5, 6, 2, -1, 0],
        [6, 6, 2, -1, 0],
        [8, 7, 2, 1, 0],
        [9, 8, 2, 1, 0],
        [9, 9, 2, -1, 0],
        [8, 15, 2, 0, 0],
        [9, 15, 1, -1, 0],
        [10, 14, 2, 1, 0],
        [1, 30, 1, 0, 40],        
    ]
};

var gamePassNow = 0;
var gameStatus = 0;

var pinsAngleArray = [];
var pinsRotationNow = 0;
var pinsLeavedCount = 0;
var pinsTurnSpeed = 0;
var pinsTurnDirection = 1;
var pinsTimeLimit = 0;
var pinsSafeMargin = 0;

var timeWhenPassStart = 0;

var gameDescription = $.createComment("操作说明：鼠标点击屏幕把小球插入♂空隙",{x:playerWidth/2-300,y:20,color:0xFFFFFF,fontsize:18,font:"Verdana",lifeTime:2});
gameDescription.width = 600;
gameDescription.autoSize = "center";  

var pinsSafeMargin = Math.asin(PIN_RADIUS/Math.sqrt(PIN_RADIUS*PIN_RADIUS+PIN_DISTANCE_TO_CENTER*PIN_DISTANCE_TO_CENTER)) / Math.PI * 360;
var passText = $.createComment((gamePassNow+1),{x:playerCenterX-8,y:playerCenterY-14,color:0xFFFFFF,fontsize:24,lifeTime:0,parent:sharpFront});
var msgText = $.createComment("剩余球数："+pinsLeavedCount+" ，剩余时间："+pinsTimeLimit,{color:0xC76363,fontsize:12,lifeTime:0});
msgText.transform.matrix3D = null;

function createHollowCircle(sharp, x, y, r, mr) {
    sharp.graphics.drawCircle(x, y, r);
    sharp.graphics.drawCircle(x, y, mr);
}

function drawOnePin(sharp, centerX, centerY, angle, distance, radius){
    var radian = angle * Math.PI / 180;
    var pinCenterX = centerX + distance * Math.cos(radian);
    var pinCenterY = centerY - distance * Math.sin(radian);
    
    sharp.graphics.lineStyle(0, COLOR_LINE, 1, true, "none", "none", "miter", 10);
    sharp.graphics.moveTo(centerX, centerY);
    sharp.graphics.lineTo(pinCenterX, pinCenterY);     

    sharp.graphics.lineStyle(0, COLOR_BAR, 1, true, "none", "none", "miter", 10);
    if (radius > 0) {
        sharp.graphics.beginFill(COLOR_BAR);
        createHollowCircle(sharp, pinCenterX, pinCenterY, 0, radius);
        sharp.graphics.endFill();
    }   
}

function playAnimal_toNextLevel(distance){         
    if (distance < playerWidth * 2 / 3 && gameStatus == 255) {        
        for (var i = 0; i < pinsAngleArray.length; i++) {
            drawOnePin(sharpMain, 0, 0, pinsAngleArray[i] + (-pinsRotationNow), distance, 0);
        }                   
    }
}

function playAnimal_playLevelAgain(angle){   
    if (gameStatus == 255) {
        var distance = 0;
        for (var i = 0; i < pinsAngleArray.length; i++) {
            distance = pinsAngleArray[i] - angle;
            if (distance > 5) {
                pinsAngleArray[i] -= 10;
            }else if(distance < -5){
                pinsAngleArray[i] += 10;
            }        
        }
        sharpMain.graphics.clear();   
        drawOnePin(sharpMain, 0, 0, angle + (-pinsRotationNow), PIN_DISTANCE_TO_CENTER + 4, PIN_RADIUS);
        for (var i = 0; i < pinsAngleArray.length; i++) {        
            drawOnePin(sharpMain, 0, 0, pinsAngleArray[i] + (-pinsRotationNow), PIN_DISTANCE_TO_CENTER, PIN_RADIUS);        
        }
    }
}    

function levelInit() {   
    gameStatus = 255;      
    pinsRotationNow = 0;
    pinsTimeLimit = gameData.data[gamePassNow][4];
    pinsTurnDirection = gameData.data[gamePassNow][3];     
    pinsTurnSpeed = gameData.data[gamePassNow][2];
    pinsLeavedCount = gameData.data[gamePassNow][1]; 
    
    (Tween.to(sharpBack, {y:0}, 0.001)).play();
    sharpBack.graphics.beginFill(COLOR_BACKGROUND);
    sharpBack.graphics.drawRect(0, 0, playerWidth, playerHeight + 4 * PIN_RADIUS * pinsLeavedCount);
    sharpBack.graphics.endFill();
    sharpFront.graphics.clear();        
    sharpMain.graphics.clear();        

    sharpFront.graphics.beginFill(COLOR_BIGBAR);
    createHollowCircle(sharpFront, playerCenterX, playerCenterY, 30, 0);
    sharpFront.graphics.endFill();    
    passText.text = gamePassNow + 1;
    if (gamePassNow > 8) {
        passText.x = playerCenterX - 14;
    }

    pinsAngleArray = [];
    var number = gameData.data[gamePassNow][0];
    for(var i=0;i<number;i++){      
        pinsAngleArray.push(i / number * 360);
        drawOnePin(sharpMain, 0, 0, i / number * 360, PIN_DISTANCE_TO_CENTER, PIN_RADIUS);
    }        
    sharpBack.graphics.beginFill(COLOR_BAR);  
    for(var i=0;i<pinsLeavedCount;i++){
        createHollowCircle(sharpBack, playerCenterX, playerCenterY + 150 + i*PIN_RADIUS*2.5, 0, PIN_RADIUS);
    }
    sharpBack.graphics.endFill(); 
    if (pinsTimeLimit == 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：无限";
    }else if (pinsTimeLimit > 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：" + pinsTimeLimit + " s";
    }    
    gameStatus = 1;
    timeWhenPassStart = Player.time;
}

function addOnePin(){    
    //trace(sharpBack.y);
    var pinAngle = (270 + pinsRotationNow) % 360;
    if (pinAngle < 0) {
        pinAngle += 360;
    }
        
    //reDrawBars(sharpBack);    
    sharpBack.graphics.beginFill(COLOR_BACKGROUND);
    sharpBack.graphics.drawRect(playerCenterX-PIN_RADIUS, -sharpBack.y+playerCenterY + 150 -PIN_RADIUS, 2*PIN_RADIUS, 2*PIN_RADIUS);
    sharpBack.graphics.endFill();
    (Tween.to(sharpBack, {y:sharpBack.y-PIN_RADIUS*2.5}, 0.1)).play();
    drawOnePin(sharpMain, 0, 0, pinAngle, PIN_DISTANCE_TO_CENTER, PIN_RADIUS);                    

    var number = pinsAngleArray.length;
    for(var i=0;i<number;i++){      
        if (Math.abs(pinsAngleArray[i] - pinAngle) <= pinsSafeMargin) {            
            //sharpBack.graphics.clear();            
            //drawOnePin(sharpMain, 0, 0, pinAngle, PIN_DISTANCE_TO_CENTER, PIN_RADIUS+3);
            gameStatus = 255;                        
            COLOR_BAR = 0xC1392B;
            sharpBack.graphics.beginFill(COLOR_FAIL_BACKFROUND);
            sharpBack.graphics.drawRect(0, -sharpBack.y, playerWidth, playerHeight + PIN_RADIUS * 2.5);
            sharpBack.graphics.endFill();
            //(Tween.to(sharpBack, {y:0}, 0.001)).play();
            sharpMain.graphics.clear();
            sharpMain.rotation = 0;        
            Player.seek(133000);
            interval(function(){playAnimal_playLevelAgain(pinAngle);}, 1, 50);
            timer(function(){gameStatus = 0;COLOR_BAR = COLOR_BIGBAR;Player.seek(16000);},1000);
            return;
        }
    }

    if (pinsTimeLimit == 0) {
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：无限";
    }
    
    pinsAngleArray.push(pinAngle);      
    pinsLeavedCount--;    

    if (pinsLeavedCount == 0) {     
         if (gamePassNow < gameData.levelNumber - 1) {
            gamePassNow++;
        }else{
            gameStatus = 6;return;
        }        
        gameStatus = 255;
        sharpMain.graphics.clear();                
        sharpBack.graphics.beginFill(COLOR_WIN_BACKGROUND);
        sharpBack.graphics.drawRect(0, -sharpBack.y, playerWidth, playerHeight + PIN_RADIUS * 2.5);
        sharpBack.graphics.endFill();
        //(Tween.to(sharpBack, {y:0}, 0.001)).play();
        sharpMain.rotation = 0;
        var distance = PIN_DISTANCE_TO_CENTER;
        interval(function(){playAnimal_toNextLevel(distance+=20);}, 10, 40);
        timer(function(){gameStatus = 0;},500);
        return;
    }
    gameStatus = 1;
}

function refreshFrame(){
    if(Player.time > 120000) {
        gameStatus = 255;
        Player.seek(16000);
        gameStatus = 1;
    }
    if(pinsTimeLimit > 0){
        var timePassed = Math.round((Player.time - timeWhenPassStart) / 1000);
        if(timePassed > pinsTimeLimit) {
            gameStatus = 0;
        }
        msgText.text = "剩余球数：" + pinsLeavedCount + " ，剩余时间：" + (pinsTimeLimit-timePassed) + " s";
    }    
    if (pinsTurnDirection == 1) {
        pinsRotationNow += pinsTurnSpeed;
    }else if (pinsTurnDirection == -1) {
        pinsRotationNow -= pinsTurnSpeed;
    }else if(pinsTurnDirection == 0){
        var timePassed = Math.round((Player.time - timeWhenPassStart) / 1000);        
        if(timePassed % 3 == 0) {        
            pinsRotationNow += pinsTurnSpeed * 2;
        }else {
            pinsRotationNow += pinsTurnSpeed * 0.5;
        }
        
    }
    if (Math.abs(pinsRotationNow) >= 360) {
        pinsRotationNow %= 360;
    }   
    sharpMain.rotation = pinsRotationNow;
}



function gameWin(){
    sharpMain.graphics.clear();
    sharpBack.graphics.clear();
    sharpFront.graphics.clear();
    passText.text = "";
    sharpFront.graphics.beginFill(COLOR_WIN_BACKGROUND);
    sharpFront.graphics.drawRect(0, 0, playerWidth, playerHeight);
    sharpFront.graphics.endFill();
    var gameWinText1 = $.createComment("恭喜过关！获得称号：",{x:playerWidth/2-300,y:170,color:0,fontsize:18,font:"Verdana",lifeTime:0});
    gameWinText1.width = 600;
    gameWinText1.autoSize = "center";
    var gameWinText1 = $.createComment("黄金抖M",{x:playerWidth/2-300,y:190,color:0xEEC710,fontsize:24,font:"Verdana",lifeTime:0});
    gameWinText1.width = 600;
    gameWinText1.autoSize = "center";
    var gameWinText1 = $.createComment("立刻向你的朋友炫耀去吧！@_@",{x:playerWidth/2-300,y:220,color:0,fontsize:18,font:"Verdana",lifeTime:0});
    gameWinText1.width = 600;
    gameWinText1.autoSize = "center";
    gameStatus = 256;    
    ScriptManager.clearTimer();
    ScriptManager.clearTrigger();
}

function runGame(){
    switch(gameStatus)
    {
        case 0: levelInit();break;
        case 1: refreshFrame();break;
        case 3: break;
        case 4: break;
        case 5: break;
        case 6: gameWin();break;        
        default: break;
    }
}
  
var controlButton = $.createButton({
    x: 0,
    y: 0,
    text: '',
    alpha: 0,
    lifeTime: 0,
    onclick: function() {
        if(gameStatus != 4 && gameStatus != 6 && gameStatus != 5 && gameStatus != 255 && Player.state != "pause") addOnePin();        
    }
});
controlButton.width = playerWidth;
controlButton.height = playerHeight;

var runTimer = interval(runGame, 24, 0);