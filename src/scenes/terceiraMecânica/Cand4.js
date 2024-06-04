// Definição de variáveis globais para candidato 4
var candidato4;
var stats4;
var voltar;
var voltarselec;
var escolher;
var escolherSelec;

// Definição da cena para o candidato 4
class Cand4 extends Phaser.Scene {
  constructor() {
    super({ key: "Cand4" });
  }

  // Pré-carregamento de recursos
  preload() {
    // Carregando imagens necessárias
    this.load.image("bg", "src/assets/mecanica3/bg.png");
    this.load.image("cand4", "src/assets/mecanica3/candidato4.png");
    this.load.image("statsCand4", "src/assets/mecanica3/StatsCandidato4.png");
    this.load.image("voltar2", "src/assets/mecanica3/voltar2.png");
    this.load.image("voltarselec", "src/assets/mecanica3/voltarselec.png");
    this.load.image("escolherVerde", "src/assets/mecanica3/escolherVerde.png");
    this.load.image("escolherAmarelo", "src/assets/mecanica3/escolherAmarelo.png");
    this.load.image("respostaErrada", 'src/assets/mecanica3/balaoErro4.png');
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

  // Configuração da cena
  create() {

    // Adicionando o som de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    this.selectSound = this.sound.add('selectSound');

    this.dino = this.sound.add('dino');

    this.click = this.sound.add('click');

    this.error = this.sound.add('error');

    this.correct = this.sound.add('correct'); 

    // Adicionando plano de fundo
    this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "bg").setScale(1.29);

    // Adicionando imagem do candidato 4 na tela
    candidato1 = this.add
      .image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.5, "cand4")
      .setScale(1);

    // Adicionando estatísticas do candidato 4
    stats1 = this.add
      .image(
        gameState.larguraJogo / 1.45,
        gameState.alturaJogo / 2.3,
        "statsCand4"
      )
      .setScale(0.4);

    // Adicionando botão de escolher
    escolher = this.add
      .image(
        gameState.larguraJogo / 2,
        gameState.alturaJogo / 2.5,
        "escolherVerde"
      )
      .setScale(0.6);
    escolher.setInteractive(); // Habilitando interatividade

    // Mudança de cor ao passar o mouse sobre o botão de escolher
    escolher.on("pointerover", () => {
      escolherSelec = this.add
        .image(
          gameState.larguraJogo / 2,
          gameState.alturaJogo / 2.5,
          "escolherAmarelo"
        )
        .setScale(0.6);
    });

    // Voltando à cor normal ao retirar o mouse do botão
    escolher.on("pointerout", () => {
      escolher.setVisible(true);
      escolherSelec.setVisible(false);
    });

    // Adicionando evento ao clicar no botão de escolher
    escolher.on("pointerdown", () => {
      this.error.play();
      this.backgroundSong.stop();
      this.respostaErrada = this.add.image(
        gameState.larguraJogo / 2,
        gameState.alturaJogo / 2,
        "respostaErrada"
      ).setDepth(2).setScale(1.3);

      //adicionando timer para que o jogador volte ao início do minigame
      this.time.delayedCall(5000, () => {
        this.scene.start("Minigame");
      });
    });

    // Adicionando botão de voltar
    voltar = this.add
      .image(gameState.larguraJogo / 2, gameState.alturaJogo / 7, "voltar2")
      .setScale(0.5);
    voltar.setInteractive(); // Habilitando interatividade

    // Retornando à tela inicial ao clicar no botão de voltar
    voltar.on("pointerdown", () => {
      this.click.play();
      this.backgroundSong.stop();
      this.scene.start("Minigame");
    });

    // Mudança de cor ao passar o mouse sobre o botão de voltar
    voltar.on("pointerover", () => {
      voltarselec = this.add
        .image(
          gameState.larguraJogo / 2,
          gameState.alturaJogo / 7,
          "voltarselec"
        )
        .setScale(0.5);
    });

    // Voltando à cor normal ao retirar o mouse do botão
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
