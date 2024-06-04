class Privacy extends Phaser.Scene {
  constructor() {
    super({ key: "Privacy" });
  }

  preload() {
    // Carregando as imagens
    this.load.image("fundoPrivacy", "src/assets/mecanica1/mesaFundo.png");

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
    this.load.image("balaoLer", "./src/assets/baloesFala/balaoLer.png");
    this.load.image("balaoLixo", "./src/assets/baloesFala/balaoLixo.png");
    this.load.image("balaoOk", "./src/assets/baloesFala/balaoOk.png");
    this.load.image("balaoPasta", "./src/assets/baloesFala/balaoPasta.png");

    this.load.image("dino", "./src/assets/personagens/dino.png");

    // Carregando as imagens dos Formulários Abertos
    this.load.image("formA1_img", "src/assets/mecanica1/Security/Form1_Security.png");
    this.load.image("formA2_img", "src/assets/mecanica1/Security/Form2_Security.png");
    this.load.image("formA3_img", "src/assets/mecanica1/Security/Form3_Security.png");
    this.load.image("formA4_img", "src/assets/mecanica1/Security/Form4_Security.png");

    //sons
    this.load.audio('backgroundSong', ['src/assets/songs/8bitty_mecanica1.mp3']);
    this.load.audio('crumpledPaper', ['src/assets/effects/crumpled-paper.mp3']);
    this.load.audio('correctSound', ['src/assets/effects/correct-sound.mp3']);
    this.load.audio('errorSound', ['src/assets/effects/error-sound-effect.mp3']);
    this.load.audio('paperOpen', ['src/assets/effects/paper-open.mp3']);

  }

  // Adicionando os elementos
  create() {
    this.add.image(gameState.larguraJogo / 2.9, gameState.alturaJogo / 2.03, "fundoPrivacy").setScale(1.1);

    // Adicionando a imagem da "Prancheta"
    var prancheta = this.physics.add.sprite(1080, 293, "prancheta_img").setScale(2.0);

    // Adicionando o Aprovado
    this.aprovado = this.physics.add.staticImage(600, 450, "aprovado_img").setScale(0.6).refreshBody();

    // Adicionando o Lixo
    this.lixo = this.physics.add.staticImage(90, 450, "lixo_img").setScale(0.7);

    // Adicionando a imagem de "Error"
    this.error = this.add.image(630, 300, "error_img").setScale(1);
    this.error.setVisible(false);

    // Adicionando a imagem de "Congratulations"
    this.cong = this.add.image(630, 300, "correto_img").setScale(1);
    this.cong.setVisible(false);

    // Adicionando o Formulário Aberto 
    this.formAberto_1 = this.physics.add.sprite(-100, -500, "formA1_img");
    this.formAberto_2 = this.physics.add.sprite(-500, -500, "formA2_img");
    this.formAberto_3 = this.physics.add.sprite(-300, -300, "formA3_img");
    this.formAberto_4 = this.physics.add.sprite(-500, -500, "formA4_img");

    // Adicionando os Formulários e suas colisões
    this.formulário_1 = this.physics.add.sprite(260, 100, "formulário1_img").setScale(0.2);
    this.formulário_2 = this.physics.add.sprite(420, 100, "formulário2_img").setScale(0.2);
    this.formulário_3 = this.physics.add.sprite(580, 100, "formulário3_img").setScale(0.2);
    this.formulário_4 = this.physics.add.sprite(740, 100, "formulário4_img").setScale(0.2);

    // Adicionando o som de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    this.crumpledPaper = this.sound.add('crumpledPaper');

    this.correctSound = this.sound.add('correctSound');

    this.errorSound = this.sound.add('errorSound');

    this.paperOpen = this.sound.add('paperOpen');

    // Colocando o Formulário_2 como Interativo
    this.formulário_2.setInteractive();

    this.formulário_2.on("pointerdown", () => {
      this.arrastof_2 = true;
    });

    this.formulário_2.on("pointerup", () => {
      this.arrastof_2 = false;
    });

    // Colocando o Formulário_3 como Interativo
    this.formulário_3.setInteractive();

    this.formulário_3.on("pointerdown", () => {
      this.arrastof_3 = true;
    });

    this.formulário_3.on("pointerup", () => {
      this.arrastof_3 = false;
    });

    // Colocando o Formulário_4 como Interativo
    this.formulário_4.setInteractive();

    this.formulário_4.on("pointerdown", () => {
      this.arrastof_4 = true;
    });

    this.formulário_4.on("pointerup", () => {
      this.arrastof_4 = false;
    });

    
    // Colocando o Formulário Aberto 2 como Interativo
    this.formAberto_2.setInteractive();

    this.formAberto_2.on("pointerdown", () => {
      this.arrastoR2 = true;
    });

    this.formAberto_2.on("pointerup", () => {
      this.arrastoR2 = false;
    });

    // Colocando o Formulário Aberto 3 como Interativo
    this.formAberto_3.setInteractive();

    this.formAberto_3.on("pointerdown", () => {
      this.arrastoR3 = true;
    });

    this.formAberto_3.on("pointerup", () => {
      this.arrastoR3 = false;
    });

    // Colocando o Formulário Aberto 4 como Interativo
    this.formAberto_4.setInteractive();

    this.formAberto_4.on("pointerdown", () => {
      this.arrastoR4 = true;
    });

    this.formAberto_4.on("pointerup", () => {
      this.arrastoR4 = false;
    });

    

    // Funções de Tempo para "Error"
    const tempoDoerro = () => {
      this.error.setVisible(false);
    };

    // Funções de Tempo para "Congratulations"
    const tempoDecong = () => {
      this.cong.setVisible(false);
    };
    
    this.destruido = 0

    // Quando o formulário_1 encostar no Lixo
    this.physics.add.overlap(this.formulário_1, this.lixo, () => {
      this.correctSound.play();
      this.crumpledPaper.play();
      this.formulário_1.setVisible(false);
      this.arrastof_1 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_1.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_1.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_2 encostar no Lixo
    this.physics.add.overlap(this.formulário_2, this.lixo, () => {
      this.errorSound.play();
      this.formulário_2.x = 420;
      this.formulário_2.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_3 encostar no Lixo
    this.physics.add.overlap(this.formulário_3, this.lixo, () => {
      this.errorSound.play();
      this.formulário_3.x = 580;
      this.formulário_3.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_4 encostar no Lixo
    this.physics.add.overlap(this.formulário_4, this.lixo, () => {
      this.correctSound.play();
      this.crumpledPaper.play();
      this.formulário_4.setVisible(false);
      this.arrastof_4 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_4.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_4.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_1 encostar no Aprovado
    this.physics.add.overlap(this.formulário_1, this.aprovado, () => {
      this.errorSound.play();
      this.formulário_1.x = 260;
      this.formulário_1.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_2 encostar no Aprovado
    this.physics.add.overlap(this.formulário_2, this.aprovado, () => {
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
    this.physics.add.overlap(this.formulário_3, this.aprovado, () => {
      this.correctSound.play();
      this.formulário_3.setVisible(false);
      this.arrastof_3 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_3.destroy(); CORRIGIR FUTURAMENTE (funciona mas da erro no console)
      this.formAberto_3.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_4 encostar no Aprovado
    this.physics.add.overlap(this.formulário_4, this.aprovado, () => {
      this.errorSound.play();
      this.formulário_4.x = 740;
      this.formulário_4.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Cria o primeiro balão e define o tempo de exibição
    this.balaoPasta = this.add.image(510, 220, "balaoPasta").setScale(0.7);
    this.tempoDeExibicao = 5000; // 1 segundos

    // Após o tempo de exibição, substitua a primeira asset pela segunda asset
    setTimeout(
      function () {
        this.balaoPasta.destroy(); // Remove a primeira asset
        this.balaoLer = this.add.image(800, 380, "balaoLer"); // Adiciona a segunda asset em uma posição específica

        // Define o tempo de exibição para o balao2
        setTimeout(
          function () {
            this.balaoLer.destroy(); // Remove a segunda asset
            this.balaoOk = this.add.image(500, 300, "balaoOk").setScale(0.9); // Adiciona a terceira asset em uma posição específica

            // Define o tempo de exibição para o balao3
            setTimeout(
              function () {
                this.balaoOk.destroy(); // Remove a terceira asset
                this.balaoLixo = this.add.image(270, 300, "balaoLixo").setScale(0.8); // Adiciona a quarta asset em uma posição específica

                // Define o tempo de exibição para o balao5
                setTimeout(
                  function () {
                    this.balaoLixo.destroy(); // Remove a quinta asset
                  }.bind(this),
                  this.tempoDeExibicao
                );
              }.bind(this),
              this.tempoDeExibicao
            );
          }.bind(this),
          this.tempoDeExibicao
        );
      }.bind(this),
      this.tempoDeExibicao
    );

    //botão para reiniciar
    // Adiciona um botão à tela
    this.dino = this.add.image(50, 50, "dino").setScale(0.5);
    this.dino.setInteractive(); // Torna o botão interativo

    // Define a função que será chamada quando o botão for clicado
    this.dino.on(
      "pointerdown",
      function () {
        this.balaoPasta = this.add.image(510, 220, "balaoPasta").setScale(0.7);
        setTimeout(
          function () {
            this.balaoPasta.destroy(); // Remove a primeira asset
            this.balaoLer = this.add.image(1100, 300, "balaoLer"); // Adiciona a segunda asset em uma posição específica

            // Define o tempo de exibição para o balao2
            setTimeout(
              function () {
                this.balaoLer.destroy(); // Remove a segunda asset
                this.balaoOk = this.add.image(500, 270, "balaoOk").setScale(0.9); // Adiciona a terceira asset em uma posição específica

                // Define o tempo de exibição para o balao3
                setTimeout(
                  function () {
                    this.balaoOk.destroy(); // Remove a terceira asset
                    this.balaoLixo = this.add.image(270, 300, "balaoLixo").setScale(0.8); // Adiciona a quarta asset em uma posição específica

                    // Define o tempo de exibição para o balao5
                    setTimeout(
                      function () {
                        this.balaoLixo.destroy(); // Remove a quinta asset
                      }.bind(this),
                      this.tempoDeExibicao
                    );
                  }.bind(this),
                  this.tempoDeExibicao
                );
              }.bind(this),
              this.tempoDeExibicao
            );
          }.bind(this),
          this.tempoDeExibicao
        );

        //botão para reiniciar
      },
      this
    );

   

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
    // Declarando as próximas Cenas
    if (this.destruido === 4) {
      this.backgroundSong.stop();
      this.scene.start("Political");
      this.scene.stop("Privacy");
    }
   
    this.form1.voltarFormularios();
    this.form2.voltarFormularios();
    this.form3.voltarFormularios();
    this.form4.voltarFormularios();
  }
}
