class Escrever extends Phaser.Scene {
    constructor() {
        super({ key: "Escrever" });
    }

    preload() {
        this.load.image("fundoEmail", "././assets/mecanica2/email/fundoEmail.png");
        this.load.image("logo", "././assets/mecanica2/email/logo.png");
        this.load.image("escrever", "././assets/mecanica2/email/escrever.png");
        this.load.image("entrada", "././assets/mecanica2/email/entrada.png");
        this.load.image("estrela", "././assets/mecanica2/email/estrela.png");
        this.load.image("adiados", "././assets/mecanica2/email/adiados.png");
        this.load.image("voltar", "././assets/mecanica2/email/voltar.png");
        this.load.image("avancar", "././assets/mecanica2/email/avançar.png");
        this.load.image("recarregar", "././assets/mecanica2/email/recarregar.png");
        this.load.image("barra", "././assets/mecanica2/email/barra.png");
        this.load.image("linhaWeb", "././assets/mecanica2/email/linha.png");

        // Carregando som de clique
        this.load.audio("click", "././assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././assets/songs/lofi-mec2.mp3");
        
    }
    
    create() {

        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play({ loop: true });

        this.click = this.sound.add("click");
      
          this.input.on('pointerdown', () => {
            this.click.play();
        }); 

        this.add.image(gameState.larguraJogo, gameState.alturaJogo, "fundoEmail").setScale(100);
        this.add.image(gameState.larguraJogo / 10, gameState.alturaJogo / 7.5, "logo").setScale(0.4);
        setaDeVolta = this.add.image(gameState.larguraJogo / 15, gameState.alturaJogo / 44, "voltar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 10, gameState.alturaJogo / 44, "avancar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 7.5, gameState.alturaJogo / 44, "recarregar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 2.5, gameState.alturaJogo / 30, "barra");
        this.add.image(gameState.larguraJogo / 11, gameState.alturaJogo / 4, "escrever").setScale(0.25);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.9, "entrada").setScale(0.3);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.4, "estrela").setScale(0.3);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.05, "adiados").setScale(0.3);
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 15, "linhaWeb").setScale(0.8);
        this.toInput = this.createTextInput(this, 400, 200, "Para");
        this.subjectInput = this.createTextInput2(this, 400, 250, "Assunto");
        this.bodyInput = this.createTextArea(this, 400, 300, "Corpo");
    
        // Configurar eventos de teclado para os campos de texto
        this.toInput.addListener('keydown');
        this.subjectInput.addListener('keydown');
        this.bodyInput.addListener('keydown');
    
        // Referência à cena
        var self = this;

        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => { 
            this.bgMusic.stop();
            this.scene.start("metamail");
        })

    
        // Quando a tecla "Enter" for pressionada em qualquer campo, exibir os valores dos campos de texto
        this.toInput.on('keydown', function(event) {
            if (event.key === 'Enter') {
                self.showEmail(self.toInput.node.firstChild.value, self.subjectInput.node.firstChild.value, self.bodyInput.node.firstChild.value);
            }
        });
    
        this.subjectInput.on('keydown', function(event) {
            if (event.key === 'Enter') {
                self.showEmail(self.toInput.node.firstChild.value, self.subjectInput.node.firstChild.value, self.bodyInput.node.firstChild.value);
            }
        });
    
        this.bodyInput.on('keydown', function(event) {
            if (event.key === 'Enter') {
                self.showEmail(self.toInput.node.firstChild.value, self.subjectInput.node.firstChild.value, self.bodyInput.node.firstChild.value);
            }
        });
    }
    
    createTextInput(scene, x, y, placeholder) {
        var input = scene.add.dom(1000, 200).createFromHTML(`<input type="text" style="font-size: 20px; width: 500px;" placeholder="${placeholder}">`);
        return input;
    }
    createTextInput2(scene, x, y, placeholder) {
        var input = scene.add.dom(1000, 150).createFromHTML(`<input type="text" style="font-size: 20px; width: 500px;" placeholder="${placeholder}">`);
        return input;
    }
    
    createTextArea(scene, x, y, placeholder) {
        var input = scene.add.dom(1000, 400).createFromHTML(`<textarea style="font-size: 20px; width: 500px; height: 300px;" placeholder="${placeholder}"></textarea>`);
        return input;
    }
    
    showEmail(to, subject, body) {
        // Removendo campos de entrada
        this.toInput.destroy();
        this.subjectInput.destroy();
        this.bodyInput.destroy();
    
        // Exibindo o e-mail na tela
        var emailText = this.add.text(400, 100, "E-mail enviado:", { fontFamily: 'Arial', fontSize: 24, color: '#000' });
        emailText.setOrigin(0.5);
    
        var emailDetails = this.add.text(400, 200, `Para: ${to}\nAssunto: ${subject}\nCorpo: ${body}`, { fontFamily: 'Arial', fontSize: 18, color: '#000' });
        emailDetails.setOrigin(0.5);
        
    }   
}
