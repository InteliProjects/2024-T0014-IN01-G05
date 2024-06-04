class StartCutscene extends Phaser.Scene {
  constructor() {
    super({ key: "StartCutscene" });
  }

  preload() {
    // Carregando vídeo e áudio
    this.load.video("videoStart", "src/assets/videos/Cena_rua.mp4", "loadeddata", false);
    this.load.audio('backgroundVideo', ['src/assets/songs/backgroundVideo.mp3']);
  }

  create() {
    // Adicionando áudio de fundo
    this.backgroundVideo = this.sound.add('backgroundVideo');
    this.backgroundVideo.play();

    // Criando o vídeo
    var videoStart = this.add.video(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "videoStart");
    videoStart.setScale(gameState.alturaJogo / videoStart.height);
    
    // Evento 'complete' para detectar quando o vídeo termina
    videoStart.on('complete', function(video) {
      
      // Parando a música de fundo do vídeo
      this.backgroundVideo.stop();
    
      // Iniciando a próxima cena após o término do vídeo
      this.scene.stop("StartCutscene")
      this.scene.start('LobbyScene');
    }, this);

    // Reproduzindo o vídeo
    videoStart.play(false);
  }
}
