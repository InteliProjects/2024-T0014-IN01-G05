class CenaFinal1 extends Phaser.Scene {
  constructor() {
    super({ key: "CenaFinal1" });
  }

  preload() {
    this.load.image("backgroundCenaFinal", "src/assets/cenaFinal/fundoDeBatalha.png");
    this.load.image("due_diligencePB", "src/assets/cenaFinal/due_diligencePB.png");
    this.load.image("onboardingPB", "src/assets/cenaFinal/onboardingPB.png");
    this.load.image("selecaoDeForn", "src/assets/cenaFinal/selecao.png");
    this.load.image("terminacaoPB", "src/assets/cenaFinal/terminaticaoPB.png");
    this.load.image("vida", "src/assets/cenaFinal/barraDeVida.png");
    this.load.image("chefe", "src/assets/cenaFinal/iws.png");

    this.load.audio('elevator', ['src/assets/effects/elevator-ding.mp3']);
  }

  create() {
    // Adicionando plano de fundo
    this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/3, "backgroundCenaFinal").setScale(1.45);

    // Adicionando vida 
    this.add.image(gameState.larguraJogo/2.9, gameState.alturaJogo/2.5, "vida");

    // Adicionando chefão
    this.add.image(gameState.larguraJogo/1.4, gameState.alturaJogo/4, "chefe").setScale(1);

    // Adição do botão due diligence
    this.due = this.add.image(gameState.larguraJogo/1.17, gameState.alturaJogo/1.31, "due_diligencePB").setScale(1.45);
      
    // Adição dos botões de interação
    this.onboard = this.add.image(gameState.larguraJogo/1.63, gameState.alturaJogo/1.08, "onboardingPB").setScale(1.45);

    this.selecao = this.add.image(gameState.larguraJogo/1.63, gameState.alturaJogo/1.31, "selecaoDeForn").setScale(1.45);
    this.selecao.setInteractive(); // Torna o botão interativo
    this.selecao.on('pointerdown', () => {
      this.scene.start("SelecaoFornecedores");
    });
      
    this.terminacao = this.add.image(gameState.larguraJogo/1.17, gameState.alturaJogo/1.08, "terminacaoPB").setScale(1.45);

    // Adição do som do elevador
    this.elevator = this.sound.add('elevator');
    this.elevator.play();

    // Configuração do texto de diálogo
    this.textoFala = this.add.text(gameState.larguraJogo/ 20, gameState.alturaJogo/1.4, '', { 
      fontSize: '22px', 
      color: "black", 
      fontFamily: 'Verdana', 
      align: "justify", 
      wordWrap: { width: 500 }
    });
    this.textoFala.setDepth(4);

    // Iniciar a exibição dos diálogos
    this.mostrarDialogo();
  }

  mostrarDialogo() {
    // Diálogos de exemplo
    this.dialogos = [
      "PARABÉNS você chegou no seu desafio final. Nessa fase você deve provar que realmente aprendeu sobre o processo e aplicar seus conhecimentos para contratar o último fornecedor, a IWS.",
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