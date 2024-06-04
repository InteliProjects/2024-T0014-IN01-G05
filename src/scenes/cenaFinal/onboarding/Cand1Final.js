// Definição de variáveis globais para candidato 1
var candidato1;
var stats1;
var voltar;
var voltarselec;
var escolher;
var escolherSelec;
var dino1
var instrucao1

class Cand1Final extends Phaser.Scene {
  constructor() {
    super({ key: "Cand1Final" });
  }

  preload() {
    //carregando imagens
    this.load.image("backgroundOnboarding", "src/assets/mecanica3/bg.png")
    this.load.image("cand1Final", "src/assets/mecanica3/candidato3.png");
    this.load.image("statsCand1Final", "src/assets/mecanica3/StatsCandidato1Final.png");
    this.load.image("voltar2Final", "src/assets/mecanica3/voltar2.png");
    this.load.image("voltarselecFinal", "src/assets/mecanica3/voltarselec.png");
    this.load.image("escolherVerdeFinal", "src/assets/mecanica3/escolherVerde.png");
    this.load.image("escolherAmareloFinal", "src/assets/mecanica3/escolherAmarelo.png");
    this.load.image("respostaErradaFinal","src/assets/mecanica3/resposta_errada_cayman.png");
    this.load.image("dinoCena3", "src/assets/personagens/dino.png");
    this.load.image("instrucao1", "src/assets/mecanica3/instrucoes_minigame3.png");

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
    this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "backgroundOnboarding").setScale(1.29);

    //adicionando personagem 1 na tela
    candidato1 = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.5, "cand1Final").setScale(1);

    //Estatística persongem 1
    stats1 = this.add.image(gameState.larguraJogo / 1.45, gameState.alturaJogo / 2.3, "statsCand1Final").setScale(0.4);

    //adicionando botao de escolher na cena
    escolher = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2.5, "escolherVerdeFinal").setScale(0.6);

    //adicionando interatividade no botão de escolher
    escolher.setInteractive();

    //adicionando mudança de cor ao passar por cima do botão de escolher
    escolher.on("pointerover", () => {
      escolherSelec = this.add.image(gameState.larguraJogo / 2,gameState.alturaJogo / 2.5,"escolherAmareloFinal").setScale(0.6);
    });

    //adicionando volta a cor normal quando mouse sair de cima do botão
    escolher.on("pointerout", () => {
      escolher.setVisible(true);
      escolherSelec.setVisible(false);
      1;
    });

    // Adicionando evento ao clicar no botão de escolher
    escolher.on("pointerdown", () => {
      this.click.play();
      this.error.play();
      this.respostaErrada = this.add.image( gameState.larguraJogo / 2, gameState.alturaJogo / 2, "respostaErradaFinal").setDepth(2);
      
      //adicionando timer para que o jogador volte ao início do minigame
      this.time.delayedCall(7000, () => {
        this.backgroundSong.stop();
        this.scene.start("Onboarding");
      });
    });

    //adicionando botão de volta
    voltar = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 7, "voltar2Final").setScale(0.5);

    //adicionando botão de volta
    voltar.setInteractive();

    //adicionando volta a tela inicial ao clicar no botão back
    voltar.on("pointerdown", () => {
      this.click.play();
      this.backgroundSong.stop();
      this.scene.start("Onboarding");
    });

    //adicionando mudança de cor ao passar por cima do botão back
    voltar.on("pointerover", () => {
      voltarselec = this.add.image(gameState.larguraJogo / 2,gameState.alturaJogo / 7,"voltarselecFinal").setScale(0.5);
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
