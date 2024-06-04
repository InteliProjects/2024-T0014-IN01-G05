class ContatosFF extends Phaser.Scene {
    constructor() {
      super({ key: "ContatosFF" });
    }
  
    // Carregando as imagens
    preload() {
      this.load.image("fundoEmail", "././src/assets/backemail.png");
      this.load.image("contato1", "././src/assets/depContratos.png");
      this.load.image("contato2", "././src/assets/depDesenvolvimento.png");
      this.load.image("contato3", "././src/assets/depMark.png");
      this.load.image("voltar", "././src/assets/voltar.png");
      this.load.image("escrever", "././src/assets/escrever.png");
      this.load.image("entrada", "././src/assets/entrada.png");
      this.load.image("estrela", "././src/assets/estrela.png");
      this.load.image("adiados", "././src/assets/adiados.png");

      // Carregando som de clique
      this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
      this.load.audio("correct", "././src/assets/effects/correct-sound.mp3");
      this.load.audio("error", "././src/assets/effects/windows-error.mp3");
      this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
    }
  
    create() {

      this.correct = this.sound.add("correct");
      this.error = this.sound.add("error");
      this.click = this.sound.add("click");
      this.bgMusic = this.sound.add("bgMusic");
      this.bgMusic.play();

      this.input.on('pointerdown', () => {
          this.click.play();
      });

      // Adicionando as imagens do jogo
      this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "fundoEmail").setScale(1.2);
      this.setaDeVolta = this.add.image(gameState.larguraJogo / 14, gameState.alturaJogo / 24.2, "voltar").setScale(0.4);
      this.escrever = this.add.image(gameState.larguraJogo / 11, gameState.alturaJogo / 4, "escrever").setScale(0.25);
      this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.9, "entrada").setScale(0.3);
      this.favoritos = this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.4, "estrela").setScale(0.3);
      this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.05, "adiados").setScale(0.3);
  
      // Adicionando fornecedores
      this.fornecedor1 = this.add.image( gameState.larguraJogo / 1.6, gameState.alturaJogo / 3, "contato1").setScale(0.9);
      this.fornecedor2 = this.add.image( gameState.larguraJogo / 1.6, gameState.alturaJogo / 2.5, "contato2").setScale(0.9);
      this.fornecedor3 = this.add.image(gameState.larguraJogo / 1.6,gameState.alturaJogo / 2.1,"contato3").setScale(0.9);
  
      // Definindo interatividade dos fornecedores
      this.fornecedor1.setInteractive();
      this.fornecedor2.setInteractive();
      this.fornecedor3.setInteractive();
      this.escrever.setInteractive();
      this.setaDeVolta.setInteractive();
      this.favoritos.setInteractive();
   
      // Configurar eventos de clique
      this.fornecedor1.on("pointerdown", () => {
        console.log("Clicou em fornecedor1");
        this.correct.play();
        this.bgMusic.stop();
        this.startScene("AcertouFF");
      });
  
        // Configurar eventos de clique
      this.fornecedor2.on("pointerdown", () => {
        console.log("Clicou em fornecedor1");
        this.error.play();
        this.bgMusic.stop();
        this.startScene("ErrouFF");
      });
  
        // Configurar eventos de clique
      this.fornecedor3.on("pointerdown", () => {
        console.log("Clicou em fornecedor1");
        this.error.play();
        this.bgMusic.stop();
        this.startScene("ErrouFF");
      });
    }
  
    startScene(sceneKey) {
      // Parar a cena atual e iniciar uma nova cena
      console.log("Tentando mudar para cena:", sceneKey);
      this.bgMusic.stop();
      this.scene.stop();
      this.scene.start(sceneKey);
    }
  }
  