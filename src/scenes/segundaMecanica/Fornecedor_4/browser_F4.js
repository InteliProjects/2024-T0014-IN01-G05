// Criando as variáveis
var linkReclameF4; 
var linkBancoF4;
var linkJusMetaF4;

var linha4;
var linha4;
var linha4;

class BrowserF4 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF4" });
    }

    // Carregando as imagens
    preload() {
        this.load.image("browserF4", "././src/assets/mecanica2/Fornecedor_4_img/browser_fornecedor4.png");
        this.load.image("reclameF4", "././src/assets/mecanica2/Fornecedor_4_img/link_forn4_reclame_cropped.png");
        this.load.image("bancoF4", "././src/assets/mecanica2/Fornecedor_4_img/link_forn4_banco_cropped.png");
        this.load.image("jusMetaF4", "././src/assets/mecanica2/Fornecedor_4_img/link_forn4_jusMeta_cropped.png");
        this.load.image("linha", "././src/assets/mecanica2/browserMecanica2/linha.png");
        this.load.image("setaDeVolta", "././src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta" , "././src/assets/mecanica2/browserMecanica2/bolaSeta.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");

    }

    create() {
        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF4").setScale(1.3, 1.185);
        linkReclameF4 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF4").setScale(1.2);
        linkBancoF4 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF4").setScale(1.2);
        linkJusMetaF4 = this.add.image(gameState.larguraJogo / 5.30, gameState.alturaJogo / 1.14, "jusMetaF4").setScale(1.2);
        
        bolaSeta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "setaDeVolta");

        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(1.2, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.57, "linha");
        linha2.setVisible(false);
        linha2.setScale(1.3, 1);

        linha3 = this.add.image(gameState.larguraJogo / 5.3, gameState.alturaJogo / 1.13, "linha");
        linha3.setVisible(false);
        linha3.setScale(1.15, 1);

        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF4.setInteractive({ cursor: "pointer" });
        linkReclameF4.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkReclameF4");
        })
        
        linkBancoF4.setInteractive({ cursor: "pointer" });
        linkBancoF4.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkBancoF4");
        })

        linkJusMetaF4.setInteractive({ cursor: "pointer" });
        linkJusMetaF4.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkJusMetaF4");
        })

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();

        this.input.on('pointerdown', () => {
        this.click.play();
        });

        // Passando o mouse por cima do linkReclameF1
        linkReclameF4.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF4.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF1
        linkBancoF4.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF4.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF4.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF4.on('pointerout', function () {
            linha3.setVisible(false);
        })


        // Interatividades com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("MainBrowser");
        })
  
        setaDeVolta.on("pointerover", function () {
            bolaSeta.setVisible(true);
        })
  
        setaDeVolta.on("pointerout", function () {
            bolaSeta.setVisible(false);
        })
    }
  
    update() {
    }
}
  