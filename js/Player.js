class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
    }

 
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){

            playerCount=data.val();

        })
  }

updateCount(count){

    database.ref('/').update({
        'playerCount':count
    })
}

update(){
    var playerIndex="Players/Player"+this.index;
    database.ref(playerIndex).set({
        'name':this.name,
        'distance':this.distance
    })
}

  static  getPlayerInfo(){

    var getPlayerInfoRef=database.ref('Players');
    getPlayerInfoRef.on("value",function(data){
        allPlayers=data.val();
    })

    }
}