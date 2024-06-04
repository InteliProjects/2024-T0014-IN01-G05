class ShineMaster extends Phaser.Scene {
  constructor() {
    super({ key: "ShineMaster" });
  }

  preload() {
    // Carregando as imagens
    this.load.image("fundoEmail", "././src/assets/backemail.png");
    this.load.image("fundoResposta", "././src/assets/encaminhar.png");
    this.load.image("respostaShineMaster", "././src/assets/respostaShnMaster.png");
    this.load.image("encaminhar", "././src/assets/encaminhar.png");

    // Carregando som de clique
    this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
    this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
  }

  create() {

    this.bgMusic = this.sound.add("bgMusic");
    this.bgMusic.play({ loop: true });

    this.click = this.sound.add("click");
  
      this.input.on('pointerdown', () => {
        this.click.play();
      });

    // Adicionando as imagens do jogo
    this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "fundoEmail").setScale(1.2);

    this.add.image( gameState.larguraJogo / 1.59, gameState.alturaJogo / 1.35, "respostaShineMaster" ).setScale(1.0);

    this.setaDeVolta = this.add.image( gameState.larguraJogo / 15, gameState.alturaJogo / 44,"voltar" ).setScale(0.4);

    this.Encaminhar = this.add.image( gameState.larguraJogo / 1.2, gameState.alturaJogo / 1.2, "encaminhar" ).setScale(0.4);

    this.Escrever = this.add.image( gameState.larguraJogo / 11, gameState.alturaJogo / 4, "escrever" ).setScale(0.25);

    this.add.image( gameState.larguraJogo / 9, gameState.alturaJogo / 2.9, "entrada" ).setScale(0.3);

    this.Favoritos = this.add.image( gameState.larguraJogo / 9, gameState.alturaJogo / 2.4, "estrela" ).setScale(0.3);

    this.add.image( gameState.larguraJogo / 9, gameState.alturaJogo / 2.05, "adiados" ).setScale(0.3);

    this.Encaminhar.setInteractive();
    this.Encaminhar.on("pointerdown", () => {
      this.bgMusic.stop();
      this.scene.start("ContatosShine");
    });
  }
}
