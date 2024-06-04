class TelaInicial extends Phaser.Scene {
  constructor() {
    super({ key: "TelaInicial" });
  }

  preload() {
    // adicionando imagens
    this.load.image("background", "src/assets/telaInicial/tela_menu.png");
    this.load.image("startButton", "src/assets/telaInicial/botao_start.png");
    this.load.image("exitButton", "src/assets/telaInicial/botao_sair.png");
    this.load.image("creditsButton", "src/assets/TelaInicial/creditosbotao.png");
    this.load.image("languageButton", "src/assets/TelaInicial/botao_idioma.png");

    this.load.audio('trilhaInicio', ['src/assets/songs/telaInicial-song.mp3']);
    this.load.audio('click1', ['src/assets/effects/select-effect.mp3'])
  }

  create() {

    // Adiciona a trilha sonora
    this.music = this.sound.add('trilhaInicio');
    this.music.play();

    this.click1 = this.sound.add('click1');

    // Adiciona o fundo
    var telaBackground = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "background");
    telaBackground.setScale(gameState.alturaJogo / telaBackground.height);

    var languageButton = this.add.image(gameState.larguraJogo / 3.3, gameState.alturaJogo / 1.30, "languageButton").setScale(1.2);

    var exitButton = this.add.image(gameState.larguraJogo / 1.37 , gameState.alturaJogo / 1.30, "exitButton").setScale(1.3);
    exitButton.setInteractive();
    exitButton.on("pointerdown", () => {
      this.click1.play();
      window.close();
    });

    var creditsButton = this.add.image (gameState.larguraJogo / 1.2, gameState.alturaJogo/ 1.05, "creditsButton").setScale(1.2);
    creditsButton.setInteractive();
    creditsButton.on("pointerdown", () => {
      this.click1.play();
      this.music.stop();
      this.scene.start("Creditos");
    })

    // Adiciona o botão de Start
    var startButton = this.add.image(gameState.larguraJogo / 1.95, gameState.alturaJogo / 1.30, "startButton").setScale(1.3);
    startButton.setInteractive();
    startButton.on("pointerdown", () => {
      this.click1.play();
      this.music.stop();
      this.scene.start("StartCutscene");
      //Mudar para proxima cena
      this.scene.stop("TelaInicial");
    });
  }
}
