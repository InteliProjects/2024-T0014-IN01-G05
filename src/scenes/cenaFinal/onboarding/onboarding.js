var candidato1;
var candidato2;
var candidato3;
var candidato4;

class Onboarding extends Phaser.Scene {
  constructor() {
    super({ key: "Onboarding" });
  }

  preload(){
    this.load.image("backgroundOnboarding", "src/assets/mecanica3/bg.png");
    this.load.image("cand1", "src/assets/mecanica3/candidato1.png");
    this.load.image("cand2", "src/assets/mecanica3/candidato2.png");
    this.load.image("cand3", "src/assets/mecanica3/candidato3.png");
    this.load.image("cand4", "src/assets/mecanica3/candidato4.png");
    this.load.image("stats1", "src/assets/mecanica3/StatsCandidato1.png");
    this.load.image("stats2", "src/assets/mecanica3/StatsCandidato2.png");
    this.load.image("stats3", "src/assets/mecanica3/StatsCandidato3.png");
    this.load.image("stats4", "src/assets/mecanica3/StatsCandidato4.png");

    //sons
    this.load.audio('backgroundSong', ['src/assets/songs/lofi-mec3.mp3']);
    this.load.audio('selectSound', ['src/assets/effects/select-sound.mp3']);
  }

  create(){

    // Adicionando o som de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    this.selectSound = this.sound.add('selectSound');

    this.add.image(gameState.larguraJogo/2 , gameState.alturaJogo/2, "backgroundOnboarding").setScale(1.29);

    //adicionando candidato 1
    candidato1 = this.add.image(gameState.larguraJogo / 8, gameState.alturaJogo / 2, "cand3").setScale(1);
    candidato1.setInteractive();

    //adicionando opção de click
    candidato1.on("pointerdown", () => {
      this.selectSound.play();
      this.backgroundSong.stop();
      this.scene.start("Cand1Final");
    });

    //adicionando interação para aumentar personagem ao passar mouse por cima
    candidato1.on("pointerover", () => {
      candidato1.setScale(1.7);
    });

    //adicionando interação para personagem retornar personagem ao tamanho normal após mouse sair de cima
    candidato1.on("pointerout", () => {
      candidato1.setScale(1);
    });

    //adicionando candidato 2
    candidato2 = this.add.image(gameState.larguraJogo / 2.8, gameState.alturaJogo / 2, "cand1").setScale(1);
    candidato2.setInteractive();
    candidato2.on("pointerdown", () => {
      this.selectSound.play();
      this.backgroundSong.stop();
      this.scene.start("Cand2Final");
    });

    candidato2.on("pointerover", () => {
      candidato2.setScale(1.7);
    });

    candidato2.on("pointerout", () => {
      candidato2.setScale(1);
    });

    //adicionando candidato 3
    candidato3 = this.add.image(gameState.larguraJogo / 1.55, gameState.alturaJogo / 2, "cand4").setScale(1);
    candidato3.setInteractive();
    candidato3.on("pointerdown", () => {
      this.selectSound.play();
      this.backgroundSong.stop();
      this.scene.start("Cand3Final");
    });

    candidato3.on("pointerover", () => {
      candidato3.setScale(1.7);
    });

    candidato3.on("pointerout", () => {
      candidato3.setScale(1);
    });

    //adicionando candidato 4
    candidato4 = this.add.image(gameState.larguraJogo / 1.15, gameState.alturaJogo / 2, "cand2").setScale(1);
    candidato4.setInteractive();

    candidato4.on("pointerdown", () => {
      this.selectSound.play();
      this.backgroundSong.stop();
      this.scene.start("Cand4Final");
    });

    candidato4.on("pointerover", () => {
      candidato4.setScale(1.7);
    });

    candidato4.on("pointerout", () => {
      candidato4.setScale(1);
    });
  }
}

    
