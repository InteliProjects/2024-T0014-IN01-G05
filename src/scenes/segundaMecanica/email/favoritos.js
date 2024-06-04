var fornecedor1;
var fornecedor2;
var fornecedor3;

var linha1;
var linha2;
var linha3;

class Favoritos extends Phaser.Scene {
    constructor() {
        super({ key: "Favoritos" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("favoritos", "././src/assets/mecanica2/email/email_fav01.png");
        this.load.image("voltar", "././src/assets/mecanica2/email/voltar.png");
        this.load.image("avancar", "././src/assets/mecanica2/email/avançar.png");
        this.load.image("recarregar", "././src/assets/mecanica2/email/recarregar.png");
        this.load.image("barra", "././src/assets/mecanica2/email/barra.png");
        this.load.image("logo", "././src/assets/mecanica2/email/logo.png");
        this.load.image("escrever", "././src/assets/mecanica2/email/escrever.png");
        this.load.image("entrada", "././src/assets/mecanica2/email/entrada.png");
        this.load.image("estrela", "././src/assets/mecanica2/email/estrela.png");
        this.load.image("adiados", "././src/assets/mecanica2/email/adiados.png");
        this.load.image("linhaWeb", "././src/assets/mecanica2/email/linha.png");
        this.load.image("lupa", "././src/assets/mecanica2/email/lupa.png");
        this.load.image("fundoEmail", "././src/assets/mecanica2/email/fundoEmail.png");
        this.load.image("fundoRespostas", "././src/assets/mecanica2/email/fundoRespostas.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
    }



    create() {

        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play({ loop: true });

        this.click = this.sound.add("click");
      
          this.input.on('pointerdown', () => {
            this.click.play();
        }); 

        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo, gameState.alturaJogo, "fundoEmail").setScale(100);
        this.add.image(gameState.larguraJogo / 1.5, gameState.alturaJogo / 1.2, "fundoRespostas").setScale(0.8);
        this.add.image(gameState.larguraJogo / 15, gameState.alturaJogo / 44, "voltar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 10, gameState.alturaJogo / 44, "avancar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 7.5, gameState.alturaJogo / 44, "recarregar").setScale(0.4);
        this.add.image(gameState.larguraJogo / 2.5, gameState.alturaJogo / 30, "barra");
        this.add.image(gameState.larguraJogo / 10, gameState.alturaJogo / 7.5, "logo").setScale(0.4);
        escrever = this.add.image(gameState.larguraJogo / 11, gameState.alturaJogo / 4, "escrever").setScale(0.25);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.9, "entrada").setScale(0.3);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.4, "estrela").setScale(0.3);
        this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2.05, "adiados").setScale(0.3);
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 15, "linhaWeb").setScale(0.8);
        this.add.image(gameState.larguraJogo / 2.5, gameState.alturaJogo / 8, "lupa").setScale(0.5);
        fornecedor1 = this.add.image(gameState.larguraJogo / 1.8, gameState.alturaJogo / 3.5,"favoritos1").setScale(0.6);
        fornecedor2 = this.add.image(gameState.larguraJogo / 1.8, gameState.alturaJogo / 2.9, "fornecedor2").setScale(0.6);
        fornecedor3 = this.add.image(gameState.larguraJogo / 1.8, gameState.alturaJogo / 2.4, "fornecedor3").setScale(0.6);
    
        // Fazendo com que ao apertar em um link o jogo mude de cena
        escrever.setInteractive({ cursor: "pointer" });
        escrever.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("escrever");
        })
    }
}