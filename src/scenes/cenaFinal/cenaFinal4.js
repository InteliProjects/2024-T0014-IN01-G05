class CenaFinal4 extends Phaser.Scene {
  constructor() {
    super({ key: "CenaFinal4" });
  }

    preload() {
      this.load.image("backgroundCenaFinal", "src/assets/cenaFinal/fundoDeBatalha.png");
      this.load.image("due_diligence", "src/assets/cenaFinal/due_diligence.png");
      this.load.image("onboarding", "src/assets/cenaFinal/onboarding.png");
      this.load.image("selecaoDeForn", "src/assets/cenaFinal/selecao.png");
      this.load.image("terminacao", "src/assets/cenaFinal/terminaticao.png");
      this.load.image("vida", "src/assets/cenaFinal/barraDeVida.png");
      this.load.image("barraVida3", "src/assets/cenaFinal/vida3.png");
      this.load.image("chefe", "src/assets/cenaFinal/iws.png");

      this.load.audio('elevator', ['src/assets/effects/elevator-ding.mp3']);
    }

    create() {
      //adicionando plano de fundo
      this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/3, "backgroundCenaFinal").setScale(1.45);

      //Adicionando vida 
      this.add.image(gameState.larguraJogo/2.8, gameState.alturaJogo/2.5, "vida");

      //Adicionando barra de vida 
      this.add.image(gameState.larguraJogo/6.8, gameState.alturaJogo/4.7, "barraVida3").setScale(1.8);

      //Adicionando chefão
      this.add.image(gameState.larguraJogo/1.4, gameState.alturaJogo/4, "chefe").setScale(1);

      // Adição do botão due diligence
      this.due = this.add.image(gameState.larguraJogo/1.17, gameState.alturaJogo/1.31, "due_diligence").setScale(1.45);

      this.selecao = this.add.image(gameState.larguraJogo/1.63, gameState.alturaJogo/1.31, "selecaoDeForn").setScale(1.45);
      
      this.terminacao = this.add.image(gameState.larguraJogo/1.17, gameState.alturaJogo/1.08, "terminacao").setScale(1.45);
      this.terminacao.setInteractive(); // Torna o botão interativo
      this.terminacao.on('pointerdown', () => {
          this.scene.start("Terminacao");
      }); 

      // Adição do som do elevador
      this.elevator = this.sound.add('elevator');
      this.elevator.play();
      
      // Adição dos botões de interação
      this.onboard = this.add.image(gameState.larguraJogo/1.63, gameState.alturaJogo/1.08, "onboarding").setScale(1.45);




      // Adição do som do elevador
      this.elevator = this.sound.add('elevator');
      this.elevator.play();

      // Configuração do texto de diálogo
    this.textoFala = this.add.text(gameState.larguraJogo/7, gameState.alturaJogo/1.25, '', { 
      fontSize: '22px', 
      color: "black", 
      fontFamily: 'Verdana', 
      align: "justify", 
      wordWrap: { width: 550 }
    });
    this.textoFala.setDepth(4);

    // Iniciar a exibição dos diálogos
    this.mostrarDialogo();
  }

  mostrarDialogo() {
    // Diálogos de exemplo
    this.dialogos = [
      "VAMOS NESSA",
    ];

    // Variável para controlar o índice do diálogo atual
    this.indiceDialogo = 0;

    // Mostrar o primeiro diálogo
    this.exibirProximoDialogo();
    
    // Adicionar evento de teclado para avançar nos diálogos
    this.input.keyboard.on('keydown-E', () => {
      if (this.indiceDialogo < this.dialogos.length - 1) {
        // Se houver mais diálogos, mostrar o próximo
        this.indiceDialogo++;
        this.exibirProximoDialogo();
      } else {
        // Se não houver mais diálogos, encerrar a cena ou fazer outra ação
        this.encerrarDialogo();
      }
    });
  }

  exibirProximoDialogo() {
    // Atualizar o texto com o próximo diálogo
    this.textoFala.setText(this.dialogos[this.indiceDialogo]);
  }
    }
    
    
