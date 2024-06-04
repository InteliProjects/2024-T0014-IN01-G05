var linkReclameF1;
var linkBancoF1;
var linkJusMetaF1;

var linha1;
var linha2;
var linha3;

class BrowserFF extends Phaser.Scene {
    constructor() {
        super({ key: "BrowserFF" });
    }

    // Carregando as imagens
    preload() {

        this.load.image("browserF1", "././src/assets/mecanica2/Fornecedor_1_img/browser_fornecedorFF.png");
        this.load.image("reclameF1", "././src/assets/mecanica2/Fornecedor_1_img/link_forn1_reclame_croppedFF.png");
        this.load.image("bancoF1", "././src/assets/mecanica2/Fornecedor_1_img/link_forn1_banco_croppedFF.png");
        this.load.image("jusMetaF1", "././src/assets/mecanica2/Fornecedor_1_img/link_forn1_jusMeta_croppedFF.png");
        this.load.image("linha", "././src/assets/mecanica2/browserMecanica2/linha.png");
        this.load.image("setaDeVolta", "././src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta" , "././src/assets/mecanica2/browserMecanica2/bolaSeta.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");

    }



    create() {

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();

        this.input.on('pointerdown', () => {
            this.click.play();
        });


        // Adionando as imagens do jogo
        this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 2, "browserF1").setScale(1.77);
        linkReclameF1 = this.add.image(228, gameState.alturaJogo / 2.63, "reclameF1").setScale(0.5);
        linkBancoF1 = this.add.image(233, gameState.alturaJogo / 1.55, "bancoF1").setScale(0.5);
        linkJusMetaF1 = this.add.image(222, gameState.alturaJogo / 1.1, "jusMetaF1").setScale(0.5);
        
        bolaSeta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 24, gameState.alturaJogo / 4, "setaDeVolta");

        linha1 = this.add.image(gameState.larguraJogo / 5.57, gameState.alturaJogo / 2.54, "linha");
        linha1.setVisible(false);
        linha1.setScale(0.9, 1);

        linha2 = this.add.image(gameState.larguraJogo / 5.24, gameState.alturaJogo / 1.53, "linha");
        linha2.setVisible(false);


        linha3 = this.add.image(gameState.larguraJogo / 5.78, gameState.alturaJogo / 1.08, "linha");
        linha3.setVisible(false);
        linha3.setScale(0.8, 1);



        // Fazendo com que ao apertar em um link o jogo mude de cena
        linkReclameF1.setInteractive({ cursor: "pointer" });
        linkReclameF1.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkReclameFF");
        })
        
        linkBancoF1.setInteractive({ cursor: "pointer" });
        linkBancoF1.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkBancoFF");
        })

        linkJusMetaF1.setInteractive({ cursor: "pointer" });
        linkJusMetaF1.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("LinkJusMetaFF");
        })


        // Passando o mouse por cima do linkReclameF1
        linkReclameF1.on('pointerover', function () {
            linha1.setVisible(true);
        })

        linkReclameF1.on('pointerout', function () {
            linha1.setVisible(false);
        })

        // Passando o mouse por cima do linkBancoF1
        linkBancoF1.on('pointerover', function () {
            linha2.setVisible(true);
        })

        linkBancoF1.on('pointerout', function () {
            linha2.setVisible(false);
        })

        // Passando o mouse por cima do linkJusMetaF1
        linkJusMetaF1.on('pointerover', function () {
            linha3.setVisible(true);
        })

        linkJusMetaF1.on('pointerout', function () {
            linha3.setVisible(false);
        })


        // Interatividades com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("MainBrowserFF");
        })

        setaDeVolta.on("pointerover", function () {
            bolaSeta.setVisible(true);
        })

        setaDeVolta.on("pointerout", function () {
            bolaSeta.setVisible(false);
        })
    }
  
}