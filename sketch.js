var  database;
var playerCount;
var gameState=0;
var allPlayers;

var form,player,game;

var car1,car2,car3,car4,cars;

function setup(){
  database = firebase.database();
  
  createCanvas(windowWidth,windowHeight);

  game=new Game();
  game.getState();
  game.start();


}

function draw(){

  if(playerCount===4){
    game.update(1);
  }

  if(gameState===1){
    clear();
    game.play();
  }
   
  
}
