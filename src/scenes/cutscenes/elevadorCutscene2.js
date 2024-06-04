class ElevatorCutscene2 extends Phaser.Scene {
  constructor() {
    super({ key: "ElevatorCutscene2" });
  }

  preload() {
    //adicionando vídeo
    this.load.video("elevator", "src/assets/videos/elevator.mp4", "canplay", false, true);

    //musica
    this.load.audio("bgMusic", "././src/assets/songs/elevator-music.mp3");
  }

  create() {

    this.bgMusic = this.sound.add("bgMusic");
    this.bgMusic.play({ loop: true });

    // criando uma cena com vídeo
    const video = this.add.video(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "elevator");
    video.setScale(gameState.alturaJogo / video.height);
    video.on('complete', () => {
      // Muda para outra cena
      this.scene.start('CenaFinal1');
    }, this)
    video.play(false);
  }
}
