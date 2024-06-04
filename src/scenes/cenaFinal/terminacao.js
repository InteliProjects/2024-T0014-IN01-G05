class Terminacao extends Phaser.Scene {
    constructor() {
      super({ key: "Terminacao" });
    }
    preload(){
        this.load.image("backgroundTerminacao", "src/assets/cenaFinal/PlanodeFundoFinal.png")
        this.load.image("caixadesmarcada", "src/assets/cenaFinal/caixaDesmarcada.png")
        this.load.image("marcado", "src/assets/cenaFinal/marcado.png")
        this.load.image("aceitar", "src/assets/cenaFinal/certoFinal.png")
        this.load.image("negar", "src/assets/cenaFinal/erradoFinal.png")
        this.load.image("mensagemAcerto", "src/assets/cenaFinal/mensagemCerta.png")
        this.load.image("mensagemErro", "src/assets/cenaFinal/mensagemErro.png")
    
    }

    create(){
        //adicionando imagem de fundo
        this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/2, "backgroundTerminacao").setScale(1.2)

        //adicionando caixas desmarcadas
        this.caixa1 = this.add.image(765,290, "caixadesmarcada").setScale(0.15)
        this.caixa2 = this.add.image(765,370, "caixadesmarcada").setScale(0.15)
        this.caixa3 = this.add.image(765, 450, "caixadesmarcada").setScale(0.15)
        this.caixa4 = this.add.image(765, 530, "caixadesmarcada").setScale(0.15)

        //adicionando botões de aceitar e negar
        this.aceitar = this.add.image(gameState.larguraJogo/1.23, gameState.alturaJogo/10.9, "aceitar").setScale(0.25)
        this.negar = this.add.image(gameState.larguraJogo/1.73, gameState.alturaJogo/10.9, "negar").setScale(0.25)

        //definindo caixa como não marcadas
        this.marcado1 = false
        this.marcado2 = false
        this.marcado3 = false
        this.marcado4 = false

        //adicionando interação com caixa
        this.caixa1.setInteractive();

        //adicionando interação para marcar caixa e salvando informação
        this.caixa1.on("pointerdown", () => {
            this.correto1 = this.add.image(765,290, "marcado").setScale(0.2)
            this.marcado1 = true

            //adicionando interação com correto
            this.correto1.setInteractive();

            //adicionando interação para desmarcar caixa e salvando informação
            this.correto1.on("pointerdown", () => {
                this.correto1.setVisible(false);
                this.marcado1 = false
            });
        });

        //adicionando interação com caixa
        this.caixa2.setInteractive();

        //adicionando interação para marcar caixa e salvando informação
        this.caixa2.on("pointerdown", () => {
            this.correto2 = this.add.image(765,370, "marcado").setScale(0.2)
            this.marcado2 = true

            //adicionando interação com correto
            this.correto2.setInteractive();

            //adicionando interação para desmarcar caixa e salvando informação
            this.correto2.on("pointerdown", () => {
                this.correto2.setVisible(false);
                this.marcado2 = false
            });
        });

        //adicionando interação com caixa
        this.caixa3.setInteractive();

        //adicionando interação para marcar caixa e salvando informação
        this.caixa3.on("pointerdown", () => {
            this.correto3 = this.add.image(765,450, "marcado").setScale(0.2)
            this.marcado3 = true

            //adicionando interação com correto
            this.correto3.setInteractive();

            //adicionando interação para desmarcar caixa e salvando informação
            this.correto3.on("pointerdown", () => {
                this.correto3.setVisible(false);
                this.marcado3 = false
            });
        });

        //adicionando interação com caixa
        this.caixa4.setInteractive();

        //adicionando interação para marcar caixa e salvando informação
        this.caixa4.on("pointerdown", () => {
            this.correto4 = this.add.image(765,530, "marcado").setScale(0.2)
            this.marcado4 = true

            //adicionando interação com correto
            this.correto4.setInteractive();
            
            //adicionando interação para desmarcar caixa e salvando informação
            this.correto4.on("pointerdown", () => {
                this.correto4.setVisible(false);
                this.marcado4 = false
            });
        });

        //adicionando interação com botão de confirmação
        this.aceitar.setInteractive();

        this.aceitar.on("pointerdown", () => {
            if (this.marcado1 === true && this.marcado2 === true && this.marcado3 === true && this.marcado4 === true) {
                this.mensagemAcerto = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/2, "mensagemAcerto")
                this.time.delayedCall(5000, () => {
                    this.scene.start("Zerou");
                });
            } 

            else {
                this.mensagemErro = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/2, "mensagemErro")
                this.time.delayedCall(5000, () => {
                    this.scene.start("Terminacao");
                });
            }   
        });

        //adicionando interação com botão de negação
        this.negar.setInteractive();
        this.negar.on("pointerdown", () => {
            this.mensagemErro = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/2, "mensagemErro")
            this.time.delayedCall(5000, () => {
                this.scene.start("Terminacao");
            });
        });
    }
}