class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  start() {
    player = new Player();
    playerCount = player.getCount();

    form = new Form();
    form.display();

    car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("carro1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("carro2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];

    // C38 AP
   fuels = newGroup();
    powerCoins = new Group ();//criar novo grupo para fuels e powerCoins

    // Adicione o sprite de combustível ao jogo
    this.addSprites(fuels, 4, fuelImage, 0.02);
    
    this.addSprites(PowerCoins, 18, powwerCoinImage, 0.09);
  }
  
  addSprotes(spriteGroup, numberOfSrites, spriteImage, scale) {
    for (var i = 0; i < numberOfSprites; i ++) {
      var, x, y;
      
      x= random(width / 2 150, width / 2-15e);

      y= random(-height 4.5, height 400);

      var sprite=createSprite(x, y);

      sprite.addlmage("sprite", spriteImage);

      sprite.scale = scale;

      spriteGroup,add(sprite);
    // Adicione o sprite de moeda ao jogo
  }

  // C38 AP
  addSprites(spriteGroup, numberOfSprites, spriteImage, scale) {
    for (var i = 0; i < numberOfSprites; i++) {
     
    }
  }

  handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }

  play() {
    this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      image(track, 0, -height * 5, width, height * 6);

      //índice da matriz
      var index = 0;
      for (var plr in allPlayers) {
        //adicione 1 ao índice para cada loop
        index = index + 1;

        //use os dados do banco de dados para exibir os carros nas direções x e y
        var x = allPlayers[plr].positionX;
        var y = height - allPlayers[plr].positionY;

        cars[index - 1].position.x = x;
        cars[index - 1].position.y = y;

        // C38  Marcar o jogador
        if (index === player.index) {
          stroke(10);

          fill("red");

          ellipse(x, y, 60, 60);

          this.handleFuel(index);

          this.handlePowerCoins(index);
          

        }
      }

      // manipulação dos eventos do teclado
      if (keyIsDown(UP_ARROW)) {
        player.positionY += 10;
        player.update();
      }

      drawSprites();
    }
  }

  handleFuel(index) {
    handleFuel (index) [
cars [index - 1) overlap (fuels, function(collector, collected) {
playerfuel =  165;

//So event

collected.remove();
 });
}
   


  handlePowerCoins(index) {
    cars[index - 1].overlap(powerCoins, function(collector, collected) {
      player.score += 21;
      player.update();
      //collected (coletado) é o sprite no grupo de colecionáveis que desencadeia
      //o evento
      collected.remove();
    });
  }
}
