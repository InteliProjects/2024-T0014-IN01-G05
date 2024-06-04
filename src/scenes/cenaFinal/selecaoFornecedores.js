class SelecaoFornecedores extends Phaser.Scene {
  constructor() {
    super({ key: "SelecaoFornecedores" });
  }
  preload() {
    // Carregando as imagens
    this.load.image("fundoPrivacy", "src/assets/mecanica1/mesaFundo.png");

    // Carregando as imagens dos Formulários
    this.load.image(
      "formulário1Final_img",
      "src/assets/mecanica1/formulario_1final.png"
    );
    this.load.image(
      "formulário2Final_img",
      "src/assets/mecanica1/formulario_2final.png"
    );
    this.load.image(
      "formulário3Final_img",
      "src/assets/mecanica1/formulario_3final.png"
    );
    this.load.image(
      "formulário4Final_img",
      "src/assets/mecanica1/formulario_4final.png"
    );
    this.load.image("error_img", "src/assets/mecanica1/error.png");
    this.load.image("correto_img", "src/assets/mecanica1/congratulations.png");
    this.load.image("prancheta_img", "src/assets/mecanica1/prancheta.png");
    this.load.image(
      "lixo_img",
      "src/assets/mecanica1/lixoOF_resized_resized_resized.png"
    );
    this.load.image("aprovado_img", "src/assets/mecanica1/orgAprovado.png");
    this.load.image("balaoLer", "./src/assets/baloesFala/balaoLer.png");
    this.load.image("balaoLixo", "./src/assets/baloesFala/balaoLixo.png");
    this.load.image("balaoOk", "./src/assets/baloesFala/balaoOk.png");
    this.load.image("balaoPasta", "./src/assets/baloesFala/balaoPasta.png");

    this.load.image("dino", "./src/assets/personagens/dino.png");

    // Carregando as imagens dos Formulários Abertos
    this.load.image(
      "formA1Final_img",
      "src/assets/mecanica1/Security/FormFinal_Security.png"
    );
    this.load.image(
      "formA2Final_img",
      "src/assets/mecanica1/Brand/FormFinal_Brand.png"
    );
    this.load.image(
      "formA3Final_img",
      "src/assets/mecanica1/Netzero/FormFinal_NetZero.png"
    );
    this.load.image(
      "formA4Final_img",
      "src/assets/mecanica1/Political/FormFinal_Political.png"
    );
  }

  // Adicionando os elementos
  create() {
    this.add
      .image(
        gameState.larguraJogo / 2.9,
        gameState.alturaJogo / 2.03,
        "fundoPrivacy"
      )
      .setScale(1.1);

    // Adicionando a imagem da "Prancheta"
    var prancheta = this.physics.add
      .sprite(1080, 293, "prancheta_img")
      .setScale(2.0);

    // Adicionando o Aprovado
    this.aprovado = this.physics.add
      .staticImage(600, 450, "aprovado_img")
      .setScale(0.6)
      .refreshBody();

    // Adicionando o Lixo
    this.lixo = this.physics.add.staticImage(90, 450, "lixo_img").setScale(0.7);

    // Adicionando a imagem de "Error"
    this.error = this.add.image(630, 300, "error_img").setScale(1);
    this.error.setVisible(false);

    // Adicionando a imagem de "Congratulations"
    this.cong = this.add.image(630, 300, "correto_img").setScale(1);
    this.cong.setVisible(false);

    // Adicionando o Formulário Aberto 1
    this.formAberto_1 = this.physics.add.sprite(-100, -500, "formA1Final_img");
    // Adicionando o Formulário Aberto 2
    this.formAberto_2 = this.physics.add.sprite(-500, -500, "formA2Final_img");
    // Adicionando o Formulário Aberto 3
    this.formAberto_3 = this.physics.add.sprite(-300, -300, "formA3Final_img");

    // Adicionando o Formulário Aberto 4
    this.formAberto_4 = this.physics.add.sprite(-500, -500, "formA4Final_img");
    // Adicionando os Formulários e suas colisões
    this.formulário_1 = this.physics.add
      .sprite(260, 100, "formulário1Final_img")
      .setScale(0.6);

    this.formulário_2 = this.physics.add
      .sprite(420, 100, "formulário2Final_img")
      .setScale(0.6);

    this.formulário_3 = this.physics.add
      .sprite(580, 100, "formulário3Final_img")
      .setScale(0.6);

    this.formulário_4 = this.physics.add
      .sprite(740, 100, "formulário4Final_img")
      .setScale(0.6);

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

    this.destruido = 0;

    // Quando o formulário_1 encostar no Lixo
    this.physics.add.overlap(this.formulário_1, this.lixo, () => {
      this.formulário_3.x = 580;
      this.formulário_3.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_2 encostar no Lixo
    this.physics.add.overlap(this.formulário_2, this.lixo, () => {
      this.formulário_2.x = 420;
      this.formulário_2.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_3 encostar no Lixo
    this.physics.add.overlap(this.formulário_3, this.lixo, () => {
      this.formulário_3.x = 580;
      this.formulário_3.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_4 encostar no Lixo
    this.physics.add.overlap(this.formulário_4, this.lixo, () => {
      this.formulário_3.x = 580;
      this.formulário_3.y = 100;
      this.error.setVisible(true);
      setTimeout(tempoDoerro, 1500);
    });

    // Quando o formulário_1 encostar no Aprovado
    this.physics.add.overlap(this.formulário_1, this.aprovado, () => {
      this.formulário_1.setVisible(false);
      this.arrastof_1 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      // this.formulário_1.destroy(); CORRIGIR FUTURAMENTE (funciona mas dá erro no console)
      this.formAberto_1.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_2 encostar no Aprovado
    this.physics.add.overlap(this.formulário_2, this.aprovado, () => {
      this.formulário_2.setVisible(false);
      this.arrastof_2 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_2.destroy(); CORRIGIR FUTURAMENTE (funciona mas dá erro no console)
      this.formAberto_2.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_3 encostar no Aprovado
    this.physics.add.overlap(this.formulário_3, this.aprovado, () => {
      this.formulário_3.setVisible(false);
      this.arrastof_3 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_3.destroy(); CORRIGIR FUTURAMENTE (funciona mas dá erro no console)
      this.formAberto_3.destroy();
      this.destruido = this.destruido + 1;
    });

    // Quando o formulário_4 encostar no Aprovado
    this.physics.add.overlap(this.formulário_4, this.aprovado, () => {
      this.formulário_4.setVisible(false);
      this.arrastof_4 = false;
      this.cong.setVisible(true);
      setTimeout(tempoDecong, 1600);
      //this.formulário_4.destroy(); CORRIGIR FUTURAMENTE (funciona mas dá erro no console)
      this.formAberto_4.destroy();
      this.destruido = this.destruido + 1;
    });

    this.form1 = new Pasta(
      this,
      this.formulário_1,
      this.formAberto_1,
      prancheta
    );
    this.form1.movimento();

    this.form2 = new Pasta(
      this,
      this.formulário_2,
      this.formAberto_2,
      prancheta
    );
    this.form2.movimento();

    this.form3 = new Pasta(
      this,
      this.formulário_3,
      this.formAberto_3,
      prancheta
    );
    this.form3.movimento();

    this.form4 = new Pasta(
      this,
      this.formulário_4,
      this.formAberto_4,
      prancheta
    );
    this.form4.movimento();
  }

//Atualizando os elementos no jogo
update() {
  // Declarando as próximas Cenas
  if (this.destruido === 4) {
    this.scene.start("CenaFinal2");
  
  }

    this.form1.voltarFormularios();
    this.form2.voltarFormularios();
    this.form3.voltarFormularios();
    this.form4.voltarFormularios();
  }
}
