// Definição de variáveis globais para candidato 1
var candidato1;
var stats1;
var voltar;
var voltarselec;
var escolher;
var escolherSelec;
var dino1
var instrucao1

class Cand1 extends Phaser.Scene {
  constructor() {
    super({ key: "Cand1" });
  }

  preload() {
    //carregando imagens
    this.load.image("bg", "src/assets/mecanica3/bg.png");
    this.load.image("cand1", "src/assets/mecanica3/candidato1.png");
    this.load.image("statsCand1", "src/assets/mecanica3/StatsCandidato1.png");
    this.load.image("voltar2", "src/assets/mecanica3/voltar2.png");
    this.load.image("voltarselec", "src/assets/mecanica3/voltarselec.png");
    this.load.image("escolherVerde", "src/assets/mecanica3/escolherVerde.png");
    this.load.image("escolherAmarelo", "src/assets/mecanica3/escolherAmarelo.png");
    this.load.image("respostaCorreta","src/assets/mecanica3/resposta_correta_cayman.png");
    this.load.image("dinoCena3", "src/assets/personagens/dino.png");
    this.load.image("instrucao1", "src/assets/mecanica3/instrucoes_minigame3.png");
    this.load.image("balaoFalaErro2", 'src/assets/mecanica3/balaoErro2.png');

    // Carregando sons necessários
    this.load.audio('backgroundSong', ['src/assets/songs/lofi-mec3.mp3']);
    this.load.audio('selectSound', ['src/assets/effects/select-sound.mp3']);
    this.load.audio('error', ['src/assets/effects/8bit-error.mp3']);
    this.load.audio('dino', ['src/assets/effects/cute-dino.mp3']);
    this.load.audio('correct', ['src/assets/effects/correct-sound.mp3']);
    this.load.audio('click', ['src/assets/effects/mouse-click.mp3']);
  }

  create() {

    // Adicionando o som de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    this.selectSound = this.sound.add('selectSound');

    this.dino = this.sound.add('dino');

    this.click = this.sound.add('click');

    this.error = this.sound.add('error');

    this.correct = this.sound.add('correct'); 

    //adicionando plano de fundo
    this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "bg").setScale(1.29);

    //adicionando personagem 1 na tela
    candidato1 = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.5, "cand1").setScale(1);

    //Estatística persongem 1
    stats1 = this.add.image(gameState.larguraJogo / 1.45, gameState.alturaJogo / 2.3, "statsCand1").setScale(0.4);

    //adicionando botao de escolher na cena
    escolher = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2.5, "escolherVerde").setScale(0.6);

    //adicionando interatividade no botão de escolher
    escolher.setInteractive();

    //adicionando mudança de cor ao passar por cima do botão de escolher
    escolher.on("pointerover", () => {
      escolherSelec = this.add.image(gameState.larguraJogo / 2,gameState.alturaJogo / 2.5,"escolherAmarelo").setScale(0.6);
    });

    //adicionando volta a cor normal quando mouse sair de cima do botão
    escolher.on("pointerout", () => {
      escolher.setVisible(true);
      escolherSelec.setVisible(false);
      1;
    });

    //adicionando interação no botão escolher para que imagem de parabens apareça
    escolher.on("pointerdown", () => {
      this.correct.play();
      this.respostaCorreta = this.add.image(gameState.larguraJogo / 2,gameState.alturaJogo / 2,"respostaCorreta").setDepth(2);
      
    //adicionando timer para que o jogador volte ao escritório
      this.time.delayedCall(5000, () => {
        this.click.play();
        this.backgroundSong.stop();
        this.scene.start("CenaQuatro");
      });
    });

    //adicionando botão de volta
    voltar = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 7, "voltar2").setScale(0.5);

    //adicionando botão de volta
    voltar.setInteractive();

    //adicionando volta a tela inicial ao clicar no botão back
    voltar.on("pointerdown", () => {
      this.backgroundSong.stop();
      this.scene.start("Minigame");
    });

    //adicionando mudança de cor ao passar por cima do botão back
    voltar.on("pointerover", () => {
      voltarselec = this.add.image(gameState.larguraJogo / 2,gameState.alturaJogo / 7,"voltarselec").setScale(0.5);
    });

    //adicionando volta a cor normal quando mouse sair de cima do botão
    voltar.on("pointerout", () => {
      voltarselec.setVisible(false);
    });
    
    this.dino1 = this.add.image(200, 100, "dinoCena3").setScale(0.5)
    this.dino1.setInteractive(); // Torna o botão interativo

    //aumentando tamanho fabricinho ao passar por cima
    this.dino1.on("pointerover", () => {
      this.dino1.setScale(0.75)
    })

    //diminunindo tamanho fabricinho após tirar o mouse de cima
    this.dino1.on("pointerout", () => {
      this.dino1.setScale(0.5)
    })
  
    // Define a função que será chamada quando o botão for clicado
    this.instrucao1 = this.add.image(330, 300, 'instrucao1').setScale(0.6);
    this.instrucao1.setVisible(false);

    this.dino1.on('pointerdown', () => {
      this.dino.play();
      // Supondo que você esteja dentro de uma cena ou objeto de jogo do Phaser
      //dino1.setVisible(false)
      this.instrucao1.setVisible(true)
    });

    
  }
}
