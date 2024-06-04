class ElevatorCutscene extends Phaser.Scene {
  constructor() {
    super({ key: "ElevatorCutscene" });
  }

  preload() {
    //adicionando vídeo
    this.load.video("elevator22", "src/assets/videos/elevator.mp4", "canplay", false, true);

    //musica
    this.load.audio("bgMusic22", "././src/assets/songs/elevator-music.mp3");
  }

  create() {

    this.bgMusic22 = this.sound.add("bgMusic22");
    this.bgMusic22.play({ loop: true });

    // criando uma cena com vídeo
    const videoElevador1 = this.add.video(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "elevator22");
    videoElevador1.setScale(gameState.alturaJogo / videoElevador1.height);
    videoElevador1.on('complete', () => {
      // Muda para outra cena
      this.bgMusic22.stop();
      this.scene.stop("ElevatorCutscene")
      this.scene.start('CenaUm');
    }, this)
    
    videoElevador1.play(false);
  }
}
