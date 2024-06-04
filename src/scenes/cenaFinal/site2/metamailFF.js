class MetamailFF extends Phaser.Scene {
    constructor() {
        super({ key: "MetamailFF" });
    }
  
    // Carregando as imagens
    preload() {
      this.load.image("fundoEmail", "././src/assets/backemail.png");
      this.load.image("fornecedor1", "././src/assets/iws.png");
      this.load.image("voltar", "././src/assets/voltar.png");
      this.load.image("escrever", "././src/assets/escrever.png");
      this.load.image("entrada", "././src/assets/entrada.png");
      this.load.image("estrela", "././src/assets/estrela.png");
      this.load.image("adiados", "././src/assets/adiados.png");

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
    this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "fundoEmail").setScale(1.2);
    this.setaDeVolta = this.add.image(gameState.larguraJogo / 14, gameState.alturaJogo / 24.2, "voltar").setScale(0.4);
    this.escrever = this.add.image(gameState.larguraJogo / 11, gameState.alturaJogo / 4, "escrever").setScale(0.25);
    this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.9, "entrada").setScale(0.3);
    this.favoritos = this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.4, "estrela").setScale(0.3);
    this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.05, "adiados").setScale(0.3);
  
    this.fornecedor1 = this.add.image( gameState.larguraJogo / 1.6, gameState.alturaJogo / 3.2, "fornecedor1" ).setScale(1.8);
  
    this.fornecedor1.setInteractive();
    this.escrever.setInteractive();
    this.setaDeVolta.setInteractive();
    this.favoritos.setInteractive();
  
    // Configurar eventos de clique
    this.fornecedor1.on("pointerdown", () => {
      console.log("Clicou em fornecedor1");
      this.startScene("Iws");
    });
        
      this.setaDeVolta.on("pointerdown", () => {
        console.log("Clicou na seta de volta");
        this.startScene("browserFF");
      });
    }
  
    startScene(sceneKey) {
      // Parar a cena atual e iniciar uma nova cena
      this.scene.stop();
      this.scene.start(sceneKey);
    }
  }
