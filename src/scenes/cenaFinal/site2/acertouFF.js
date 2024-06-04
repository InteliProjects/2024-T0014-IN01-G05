class AcertouFF extends Phaser.Scene {
    constructor() {
      super({ key: "AcertouFF" });
    }
  
    // Carregando as imagens
    preload() {
      this.load.image("fundoEmail3", "././src/assets/acertou.png");

      // Carregando som de clique
      this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
      this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
    }
  
    create() {

      this.click = this.sound.add("click");
      this.bgMusic = this.sound.add("bgMusic");
      this.bgMusic.play();

      this.input.on('pointerdown', () => {
          this.click.play();
      });

      // Adicionando as imagens do jogo
      this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "fundoEmail3").setScale(1.2);
  
      // Define um temporizador para mudar de cena após 10 segundos
      this.time.delayedCall(5000, () => {
        // Muda para a cena desejada após 10 segundos (10000 milissegundos)
        this.scene.start("CenaFinal3");
      });
    }
  }