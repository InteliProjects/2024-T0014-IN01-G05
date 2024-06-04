var X;

class Renan extends Phaser.Scene {
    constructor() {
      super({ key: "Renan" });
    }
  
    // Carregando as imagens
    preload() {
      this.load.image("fundoEmailR", "././src/assets/RenanInstagram.png");
      this.load.image("XXX", "././src/assets/XXX.png");

       // Carregando som de clique
       this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
       this.load.audio("bgMusic", "././src/assets/songs/credits-lofi.mp3");
    }
  
    create() {

      this.click = this.sound.add("click");
      this.bgMusic = this.sound.add("bgMusic");
      this.bgMusic.play();

      this.input.on('pointerdown', () => {
          this.click.play();
      });

      // Adicionando as imagens do jogo
      this.add
        .image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "fundoEmailR")
        .setScale(1.3);

        X = this.add
        .image(gameState.larguraJogo / 1.05, gameState.alturaJogo / 9, "XXX")
        .setScale(0.06);
  

        X.setInteractive({ cursor: "pointer" });
        X.on("pointerdown", () => {
          this.bgMusic.stop();
            this.scene.start("Creditos");
        })
    }
  }
  