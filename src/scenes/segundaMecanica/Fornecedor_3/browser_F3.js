// Criando as variáveis
var linkReclameF3;
var linkBancoF3;
var linkJusMetaF3;

var linha1;
var linha2;
var linha3;

class BrowserF3 extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserF3" });
    }

    // Carregando as imagens
    preload() {
        this.load.image("browserF3", "././src/assets/mecanica2/Fornecedor_3_img/browser_fornecedor3.png");
        this.load.image("reclameF3", "././src/assets/mecanica2/Fornecedor_3_img/link_forn3_reclame_cropped.png");
        this.load.image("bancoF3", "././src/assets/mecanica2/Fornecedor_3_img/link_forn3_banco_cropped.png");
        this.load.image("jusMetaF3", "././src/assets/mecanica2/Fornecedor_3_img/link_forn3_jusMeta_cropped.png");
        this.load.image("linha", "././src/assets/mecanica2/browserMecanica2/linha.png");
        this.load.image("setaDeVolta", "././src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta" , "././src/assets/mecanica2/browserMecanica2/bolaSeta.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");

    }



    create() {
        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF3").setScale(1.3, 1.185);
        linkReclameF3 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.57, "reclameF3").setScale(1.2);
        linkBancoF3 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.6, "bancoF3").setScale(1.2);
        linkJusMetaF3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.14, "jusMetaF3").setScale(1.2);
        
        bolaSeta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "setaDeVolta");

        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.52, "linha");
        linha1.setVisible(false);
        linha1.setScale(1.4, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.58, "linha");
        linha2.setVisible(false);
        linha2.setScale(1.5, 1);

        linha3 = this.add.image(gameState.larguraJogo / 5.88, gameState.alturaJogo / 1.13, "linha");
        linha3.setVisible(false);
        linha3.setScale(1.3, 1);

        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF3.setInteractive({ cursor: "pointer" });
        linkReclameF3.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkReclameF3");
        })
        
        linkBancoF3.setInteractive({ cursor: "pointer" });
        linkBancoF3.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkBancoF3");
        })

        linkJusMetaF3.setInteractive({ cursor: "pointer" });
        linkJusMetaF3.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkJusMetaF3");
        })

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();

        this.input.on('pointerdown', () => {
        this.click.play();
        });

        // Passando o mouse por cima do linkReclameF3
        linkReclameF3.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF3.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF3
        linkBancoF3.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF3.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF3.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF3.on('pointerout', function () {
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
