class MainBrowser extends Phaser.Scene {
  constructor() {
    super({ key: "MainBrowser" });
  }

  preload() {
    this.load.image("fundo", "././src/assets/mecanica2/browserMecanica2/googleMeta.png");
    this.load.image("dicas", "././src/assets/mecanica2/browserMecanica2/dicas.png");
    this.load.image("botaoDicas1", "././src/assets/mecanica2/browserMecanica2/botaoDicas.png");
    this.load.image("botaoDicas2", "././src/assets/mecanica2/browserMecanica2/botaoDicas2_cropped.png");
    this.load.image("pesquiseNoBrowser", "././src/assets/mecanica2/browserMecanica2/pesquiseNoBrowser.png");
    this.load.html("form", "././src/assets/mecanica2/form.html");
    this.load.image("indicador", "././src/assets/mecanica2/browserMecanica2/indicador.png");

    // Carregando som de clique
    this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
    this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
  }

  create() {
    // Configuração das teclas e variáveis da cena
    this.cursors = this.input.keyboard.createCursorKeys();
    this.returnKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    this.nameFilled = false;

    // Carregar os src/assets nas antigas posições
    const fundoX = gameState.larguraJogo / 2;
    const fundoY = gameState.alturaJogo / 2;
    const dicasX = gameState.larguraJogo / 2;
    const dicasY = gameState.alturaJogo / 1.12;
    const botaoDicas1X = gameState.larguraJogo / 2.37;
    const botaoDicas1Y = gameState.alturaJogo / 1.04;
    const botaoDicas2X = gameState.larguraJogo / 1.94;
    const botaoDicas2Y = gameState.alturaJogo / 1.045;

    const fundo = this.add.image(fundoX, fundoY, "fundo").setScale(1.3, 1.185);
    const dicas = this.add.image(dicasX, dicasY, "dicas");
    const botaoDicas1 = this.add.image(botaoDicas1X + 5, botaoDicas1Y - 32, "botaoDicas1");

    // Adicionando indicador para dicas
    gameState.indicador = this.add.image(gameState.larguraJogo / 2.34, gameState.alturaJogo / 1.12, "indicador");

    // Inicializando o indicador como visível
    gameState.indicador.visible = true;

    // Configurando o piscar do indicador usando um temporizador
    gameState.blinkTimer = this.time.addEvent({
      delay: 500, // Intervalo de 500 milissegundos (0.5 segundos)
      loop: true, // Repetição infinita
      callback: function () {
        if (!this.dicasExpandida) {
          gameState.indicador.visible = !gameState.indicador.visible;
        } else{
            gameState.indicador.visible = false;
        }

        // Alternar a visibilidade do indicador
      },
      callbackScope: this, // Garante que o escopo da função de retorno de chamada seja o contexto atual (scene)
    });

    // Configuração de eventos para atualizar o nome
    var inputSize = { width: 270, height: 42, padding: 15 };
    var inputButton = { width: 425, height: 12 };
    var inputCoords = {
      xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
      yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
    };
    this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache("form").setOrigin(0, 0);
    this.returnKey.on("down", (event) => {
      this.updateName(this.inputName);
    });

    this.click = this.sound.add("click");
    this.bgMusic = this.sound.add("bgMusic");
    this.bgMusic.play();

    this.input.on('pointerdown', () => {
      this.click.play();
    });

    // Configuração de interatividade dos botões de dicas
    botaoDicas1.setInteractive({ cursor: "pointer" });
    botaoDicas1.on("pointerup", () => {
      dicas.y = 325;
      botaoDicas1.y = 335;
      gameState.indicador.visible = false;
      this.dicasExpandida = true;
    });

    var inputSize = { width: 270, height: 42, padding: 15 };
    var inputButton = { width: 425, height: 12 };
    var inputCoords = {
      xposition: (this.game.config.width - inputSize.width) / 2 - inputButton.width,
      yposition: (this.game.config.height - inputSize.height - inputSize.padding * 2) / 2,
    };
    this.inputName = this.add.dom(inputCoords.xposition, inputCoords.yposition).createFromCache("form").setOrigin(0, 0);
    this.returnKey.on("down", (event) => {
      this.updateName(this.inputName);
    });

    this.spaceKey.on("down", (event) => {
      this.insertSpace(this.inputName);
    });
  }

  updateName(inputNameElement) {
    let name = inputNameElement.getChildByName("name");
    if (name.value != "") {
      this.nameFilled = true;
      this.game.name = name.value;
    }
  }

  insertSpace(inputNameElement) {
    let name = inputNameElement.getChildByName("name");
    name.value += " ";
  }

  update() {
    if (Phaser.Input.Keyboard.JustDown(this.returnKey) && this.nameFilled === true) {
      this.click.play();
      let name = this.inputName.getChildByName("name").value.trim().toLowerCase();
      if (name == "mmc") {
        this.bgMusic.stop();
        this.scene.start("BrowserF1");
        this.scene.stop("mainBrowser");
      }
      if (name == "shinemaster") {
        this.bgMusic.stop();
        this.scene.start("BrowserF3");
        this.scene.stop("mainBrowser");
      }
      if (name == "luxlight") {
        this.bgMusic.stop();
        this.scene.start("BrowserF2");
        this.scene.stop("mainBrowser");
      }
      if (name == "techlume") {
        this.bgMusic.stop();
        this.scene.start("BrowserF4");
        this.scene.stop("mainBrowser");
      }
      if (name == "metamail") {
        this.bgMusic.stop();
        this.scene.start("Metamail");
        this.scene.stop("mainBrowser");
      }
    }
  }
}
