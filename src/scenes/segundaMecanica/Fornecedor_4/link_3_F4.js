// Criando as variáveis
var jusMetaF4;
var setaDeVolta;
var bolaSeta;

class LinkJusMetaF4 extends Phaser.Scene {
    constructor () {
        super({ key: "LinkJusMetaF4"});
    }

    // Carregando as imagens do jogo
    preload() {
        this.load.image("pagJusMetaF4" ,"././src/assets/mecanica2/Fornecedor_4_img/fornecedor4_jusMeta.png")
        this.load.image("setaDeVolta", "././src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta" , "././src/assets/mecanica2/browserMecanica2/bolaSeta.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");

    }

    // Adicionando as imagens do jogo
    create() {

        jusMetaF4 = this.add.image(gameState.larguraJogo/2, gameState.alturaJogo/1.17, "pagJusMetaF4");

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);

        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && jusMetaF4.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                jusMetaF4.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 && jusMetaF4.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                jusMetaF4.y += 20;
                setaDeVolta.y += 20;
            }
        });

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();

        this.input.on('pointerdown', () => {
        this.click.play();
        });

        //Interatividade com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("BrowserF4");
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