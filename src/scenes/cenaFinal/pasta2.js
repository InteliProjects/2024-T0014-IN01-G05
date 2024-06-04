class Pasta2 {
    constructor(self, formulario, formularioAberto, prancheta) {
      (this.self = self),
        (this.formulario = formulario),
        (this.formularioAberto = formularioAberto),
        (this.prancheta = prancheta),
        (this.emcimap = false),
        (this.arrastof = false),
        (this.arrasto = false);
      this.vistoRecentemente = false;
    }
  
    movimento() {
      // Colocando a Prancheta como Interativa
      this.prancheta.setInteractive();
  
      this.prancheta.on("pointerover", () => {
        this.emcimap = true;
      });
  
      this.prancheta.on("pointerout", () => {
        this.emcimap = false;
      });
  
      // Colocando o Formulário_1 como Interativo
      this.formulario.setInteractive();
  
      this.formulario.on("pointerdown", () => {
        this.arrastof = true;
      });
      this.formulario.on("pointerup", () => {
        this.arrastof = false;
      });
  
      // Colocando o Formulário Aberto 1 como Interativo
      this.formularioAberto.setInteractive();
  
      this.formularioAberto.on("pointerdown", () => {
        console.log("qwe");
        this.arrasto = true;
      });
  
      this.formularioAberto.on("pointerup", () => {
        this.arrasto = false;
      });
  
      this.self.input.setDraggable(this.formulario);
  
      this.self.input.on("drag", function (pointer, gameObject, dragX, dragY) {
        // Atualiza a posição do objeto durante o arrasto
        gameObject.x = dragX;
        gameObject.y = dragY;
      });
  
      //INICIO
      this.self.physics.add.overlap(this.formulario, this.prancheta, () => {
        console.log("a");
        console.log(this.arrastof); //true
        console.log(this.arrasto);
        console.log(this.emcimap);
        this.formulario.setScale(0.2);
  
        if (this.arrastof === false && this.emcimap === true && !this.vistoRecentemente) {
          this.formularioAberto.x = this.self.input.x;
          this.formularioAberto.y = this.self.input.y;
          this.formulario.setVisible(false);
          this.formularioAberto.setVisible(true);
          this.vistoRecentemente = true;
          console.log("b");
        }
  
        if (this.arrasto === true) {
          console.log("c");
          this.formularioAberto.x = this.self.input.x;
          this.formularioAberto.y = this.self.input.y;
          this.formulario.x = this.self.input.x;
          this.formulario.y = this.self.input.y;
        }
  
        if (this.arrastof === false) {
          console.log("d");
          this.formularioAberto.setScale(1.0).setVisible(true);
          this.formulario.setVisible(false);
        }
      });
    }
  
    voltarFormularios() {
      // Se o formularioAberto sair da Prancheta
      if (this.formulario.x < 950 || this.formularioAberto.x < 950) {
        this.formularioAberto.x = 960;
        this.formulario.setScale(0.32);
        this.formularioAberto.setVisible(false);
        this.formulario.setVisible(true);
      }
  
    }
  }
  