// Criando as variáveis
var reclameF1
var setaDeVolta;
var bolaSeta;

class LinkReclameFF extends Phaser.Scene {
    constructor() {
        super({ key: "LinkReclameFF" });
    }

      // Carregando as imagens
      preload() {
        this.load.image("pagReclameF1", "././src/assets/mecanica2/Fornecedor_1_img/fornecedor1_reclameFF.png");
        this.load.image("setaDeVolta", "././src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta" , "././src/assets/mecanica2/browserMecanica2/bolaSeta.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/lofi-mec2.mp3");
    }

    // Adicionando as imagens do jogo
    create() {
        
        reclameF1 = this.add.image(gameState.larguraJogo / 2, gameState.alturaJogo / 1.17, "pagReclameF1").setScale(1.39);

        bolaSeta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "bolaSeta");
        bolaSeta.setVisible(false);
        
        setaDeVolta = this.add.image(gameState.larguraJogo / 5.38, gameState.alturaJogo / 31, "setaDeVolta");

        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function (pointer, gameObjects, deltaX, deltaY, deltaZ) {

            if (deltaY > 0 && reclameF1.y > 100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                reclameF1.y -= 20;
                setaDeVolta.y -= 20;
            } 
            
            if (deltaY <= 0 &&  reclameF1.y < 500 ) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                reclameF1.y += 20;
                setaDeVolta.y += 20;
            }
        });

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();

        this.input.on('pointerdown', () => {
            this.click.play();
        });

        // Interatividades com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("BrowserFF");
        })

        setaDeVolta.on("pointerover", function () {
            bolaSeta.setVisible(true);
        })

        setaDeVolta.on("pointerout", function () {
            bolaSeta.setVisible(false);
        })
    }


}