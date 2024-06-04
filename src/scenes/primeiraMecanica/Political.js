class Political extends Phaser.Scene {
  constructor() {
    super({ key: "Political" });

    this.cong;
    this.error;

    // Adicionando as Variáveis
    this.formulário_1 = 1;
    this.formulário_2 = 2;
    this.formulário_3 = 3;
    this.formulário_4 = 4;

    // Variáveis de arrasto dos formulários
    this.arrastof_1;
    this.arrastof_2;
    this.arrastof_3;
    this.arrastof_4;

    // Variáveis para controlar se o formulário está em cima do lixo
    this.emcimaLixo = false;

    // Variáveis de arrasto dos formulários dentro da prancheta
    this.arrastoR1;
    this.arrastoR2;
    this.arrastoR3;
    this.arrastoR4;

    // Variáveis para o Formulário Aberto 2 e para conferir se ele foi aberto
    this.formAberto_1;
    this.formA_1VisibleRecente = false;

    this.formAberto_2;
    this.formA_2VisibleRecente = false;

    this.formAberto_3;
    this.formA_3VisibleRecente = false;

    this.formAberto_4;
    this.formA_4VisibleRecente = false;

    this.emcimap;

    // Variavél para conferir se ta destruido os formulários
    this.destruido = 0;

    this.paperOpen;
  }

  preload() {
    // Carregando as imagens
    this.load.image("fundoPolitical", "src/assets/mecanica1/mesaFundo.png");

    this.load.image("troca", "src/assets/mecanica1/trocaDePasta.png");

    // Carregando as imagens dos Formulários
    this.load.image("formulário1_img", "src/assets/mecanica1/formulario_1.png");
    this.load.image("formulário2_img", "src/assets/mecanica1/formulario_2.png");
    this.load.image("formulário3_img", "src/assets/mecanica1/formulario_3.png");
    this.load.image("formulário4_img", "src/assets/mecanica1/formulario_4.png");

    this.load.image("error_img", "src/assets/mecanica1/error.png");
    this.load.image("correto_img", "src/assets/mecanica1/congratulations.png");
    this.load.image("prancheta_img", "src/assets/mecanica1/prancheta.png");
    this.load.image("lixo_img", "src/assets/mecanica1/lixoOF_resized_resized_resized.png");
    this.load.image("aprovado_img", "src/assets/mecanica1/orgAprovado.png");
    //adiconando a duvida
    this.load.image("duvida", "./src/assets/mecanica1/duvida.png");
    this.load.image("explica", "./src/assets/mecanica1/download.png");
    this.load.image("x", "./src/assets/mecanica1/x.png");

    //sons
    this.load.audio('backgroundSong', ['src/assets/songs/8bitty_mecanica1.mp3']);
    this.load.audio('paperOpen', ['src/assets/effects/paper-open.mp3']);
    this.load.audio('crumpledPaper', ['src/assets/effects/crumpled-paper.mp3']);
    this.load.audio('correctSound', ['src/assets/effects/correct-sound.mp3']);
    this.load.audio('errorSound', ['src/assets/effects/error-sound-effect.mp3']);

    // Carregando as imagens dos Formulários Abertos
    this.load.image("formB1_img", "src/assets/mecanica1/Political/Form1_Political.png");
    this.load.image("formB2_img", "src/assets/mecanica1/Political/Form2_Political.png");
    this.load.image("formB3_img", "src/assets/mecanica1/Political/Form3_Political.png");
    this.load.image("formB4_img", "src/assets/mecanica1/Political/Form4_Political.png");
    this.load.image("dino", "./src/assets/personagens/dino.png");
  }

  // Adicionando os elementos
  create() {
    this.add.image(gameState.larguraJogo / 2.9, gameState.alturaJogo / 2.03, "fundoPolitical").setScale(1.1);

    // Adicionando a imagem da "Prancheta"
    var prancheta = this.physics.add.sprite(1180, 293, "prancheta_img").setScale(2.2);
    prancheta.body.allowGravity = false;

    // Adicionando a nossa linha
    var linha = this.physics.add.staticImage(440, 200, "linha_img");
    linha.setVisible(false);

    // Adicionando o Aprovado
    var aprovado = this.physics.add.staticImage(600, 450, "aprovado_img").setScale(0.6).refreshBody();

    // Adicionando o Lixo
    var lixo = this.physics.add.staticImage(90, 400, "lixo_img").setScale(0.7).refreshBody();

    // Adicionando a imagem de "Error"
    this.error = this.add.image(630, 300, "error_img").setScale(1);
    this.error.setVisible(false);

    // Adicionando a imagem de "Congratulations"
    this.cong = this.add.image(630, 300, "correto_img").setScale(1);
    this.cong.setVisible(false);

    // Adicionando o Formulário Aberto 1
    this.formAberto_1 = this.physics.add.sprite(500, 500, "formB1_img").setScale(1.0);
    this.formAberto_1.body.allowGravity = false;
    this.formAberto_1.setVisible(false);

    // Adicionando o Formulário Aberto 2
    this.formAberto_2 = this.physics.add.sprite(500, 500, "formB2_img").setScale(1.0);
    this.formAberto_2.body.allowGravity = false;
    this.formAberto_2.setVisible(false);

    // Adicionando o Formulário Aberto 3
    this.formAberto_3 = this.physics.add.sprite(500, 500, "formB3_img").setScale(1.0);
    this.formAberto_3.body.allowGravity = false;
    this.formAberto_3.setVisible(false);

    // Adicionando o Formulário Aberto 4
    this.formAberto_4 = this.physics.add.sprite(500, 500, "formB4_img").setScale(1.0);
    this.formAberto_4.body.allowGravity = false;
    this.formAberto_4.setVisible(false);

    // Adicionando os Formulários e suas colisões
    this.formulário_1 = this.physics.add.sprite(260, 100, "formulário1_img").setScale(0.2);
    this.formulário_1.body.allowGravity = false;

    this.formulário_2 = this.physics.add.sprite(420, 100, "formulário2_img").setScale(0.2);
    this.formulário_2.body.allowGravity = false;

    this.formulário_3 = this.physics.add.sprite(580, 100, "formulário3_img").setScale(0.2);
    this.formulário_3.body.allowGravity = false;

    this.formulário_4 = this.physics.add.sprite(740, 100, "formulário4_img").setScale(0.2);
    this.formulário_4.body.allowGravity = false;

    // Adicionando o som de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    this.paperOpen = this.sound.add('paperOpen');

    this.crumpledPaper = this.sound.add('crumpledPaper');

    this.correctSound = this.sound.add('correctSound');

    this.errorSound = this.sound.add('errorSound');

    // Funções de Tempo para "Error"
    const tempoDoerro = () => {
      this.error.setVisible(false);
    };

    // Funções de Tempo para "Congratulations"
    const tempoDecong = () => {
      this.cong.setVisible(false);
    };

    // Quando o formulário_1 encostar no Lixo
    this.physics.add.overlap(this.formulário_1, lixo, () => {
      this.errorSound.play();
      this.formulário_1.x = 260;
      this.formulário_1.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_2 encostar no Lixo
    this.physics.add.overlap(this.formulário_2, lixo, () => {
      this.errorSound.play();
      this.formulário_2.x = 420;
      this.formulário_2.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_3 encostar no Lixo
    this.physics.add.overlap(this.formulário_3, lixo, () => {
      this.correctSound.play();
      this.crumpledPaper.play();
      this.formulário_3.setVisible(false);
      this.arrastof_3 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_3.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_3.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_4 encostar no Lixo
    this.physics.add.overlap(this.formulário_4, lixo, () => {
      this.errorSound.play();
      this.formulário_4.x = 740;
      this.formulário_4.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_1 encostar no Aprovado
    this.physics.add.overlap(this.formulário_1, aprovado, () => {
      this.correctSound.play();
      this.formulário_1.setVisible(false);
      this.arrastof_1 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_1.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_1.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_2 encostar no Aprovado
    this.physics.add.overlap(this.formulário_2, aprovado, () => {
      this.correctSound.play();
      this.formulário_2.setVisible(false);
      this.arrastof_2 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_2.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_2.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_3 encostar no Aprovado
    this.physics.add.overlap(this.formulário_3, aprovado, () => {
      this.errorSound.play();
      this.formulário_3.x = 580;
      this.formulário_3.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_4 encostar no Aprovado
    this.physics.add.overlap(this.formulário_4, aprovado, () => {
      this.correctSound.play();
      this.formulário_4.setVisible(false);
      this.arrastof_4 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_4.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_4.destroy();
      this.destruido = this.destruido + 1;
    });
    
    // criando a lógica para tirar dúvida do personagem
    this.x = this.add.image(100, 100, "x").setScale(0.5);
    this.x.setVisible(false);
    

    this.x.setInteractive();
    this.x.on("pointerdown", () => {
      this.explica.setVisible(false);
      this.x.setVisible(false);
    });

    this.dino = this.add.image(50, 50, "dino").setScale(0.5);
    // Torna o botão interativo
    this.tempoDeExibicao = 5000;
    // Define a função que será chamada quando o botão for clicado

    this.troca = this.add.image(500, 270, "troca").setScale(0.9);

    // Define um segundo setTimeout para remover a imagem após 5 segundos
    setTimeout(
      function () {
        this.troca.destroy(); // Remove a imagem 'troca'
      }.bind(this),
      this.tempoDeExibicao
    );

    this.destruido = 0


    this.form1 = new Pasta(this, this.formulário_1, this.formAberto_1, prancheta);
    this.form1.movimento();

    this.form2 = new Pasta(this, this.formulário_2, this.formAberto_2, prancheta);
    this.form2.movimento();

    this.form3 = new Pasta(this, this.formulário_3, this.formAberto_3, prancheta);
    this.form3.movimento();

    this.form4 = new Pasta(this, this.formulário_4, this.formAberto_4, prancheta);
    this.form4.movimento();
  }

  //Atualizando os elementos no jogo
  update() {
    
    // Declarando as proximas Cenas
    if (this.destruido === 4) {
      this.backgroundSong.stop();
      this.scene.start("CenaDois");
      this.scene.stop("Political");
    }

    this.form1.voltarFormularios();
    this.form2.voltarFormularios();
    this.form3.voltarFormularios();
    this.form4.voltarFormularios();
  }
}
