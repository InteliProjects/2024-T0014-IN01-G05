var setaDeVolta;
var bolaSeta;
var hud; 
var davi;
var fernando;
var leonardo;
var mateus;
var renan; 
var ibiapina;
var murilo;

class Creditos extends Phaser.Scene {
    constructor() {
        super({ key: "Creditos" });
    }

    // Carregando as imagens
    preload() {
        this.load.image("home", "src/assets/Insta (2).png");
        this.load.image("hud", "src/assets/HUDINSTA.png"); // Carregar a imagem do HUD
        this.load.image("setaDeVolta", "./src/assets/mecanica2/browserMecanica2/setaDeVolta.png");
        this.load.image("bolaSeta", "./src/assets/mecanica2/browserMecanica2/bolaSeta.png");
        this.load.image("Davi", "./src/assets/Davi.png");
        this.load.image("Fernando", "./src/assets/Fernando.png");
        this.load.image("Leonardo", "./src/assets/Leo.png");
        this.load.image("Renan", "./src/assets/Renan.png");
        this.load.image("Murilo", "./src/assets/Murilo.png");
        this.load.image("Mateus", "./src/assets/Mateus.png");
        this.load.image("Ibiapina", "./src/assets/Ibiapina.png");

        // Carregando som de clique
        this.load.audio("click", "././src/assets/effects/mouse-click.mp3");
        this.load.audio("bgMusic", "././src/assets/songs/credits-lofi.mp3");
        
    }

    // Adicionando as imagens do jogo
    create() {

        this.click = this.sound.add("click");
        this.bgMusic = this.sound.add("bgMusic");
        this.bgMusic.play();
  
        this.input.on('pointerdown', () => {
            this.click.play();
        });

        hud = this.add.image(gameState.larguraJogo / 9, gameState.alturaJogo / 2, "hud").setScale(0.6); // Posicionar o HUD à esquerda

        reclameF2 = this.add.image(gameState.larguraJogo / 1.6, gameState.alturaJogo / 2, "home").setScale(1.06);

        bolaSeta = this.add.image(gameState.larguraJogo / 30, gameState.alturaJogo / 28, "bolaSeta");
        bolaSeta.setVisible(false);

        setaDeVolta = this.add.image(gameState.larguraJogo / 30, gameState.alturaJogo / 28, "setaDeVolta");

        davi = this.add.image(gameState.larguraJogo / 2.6, gameState.alturaJogo / 9.5, "Davi").setScale(0.25);

        fernando = this.add.image(gameState.larguraJogo / 1.6, gameState.alturaJogo / 9.5, "Fernando").setScale(0.25);

        leonardo = this.add.image(gameState.larguraJogo / 1.16, gameState.alturaJogo / 9.5, "Leonardo").setScale(0.25);

        ibiapina = this.add.image(gameState.larguraJogo / 2.6, gameState.alturaJogo / 1.5, "Ibiapina").setScale(0.25);

        renan = this.add.image(gameState.larguraJogo / 1.6, gameState.alturaJogo / 1.5, "Renan").setScale(0.25);

        mateus = this.add.image(gameState.larguraJogo / 1.16, gameState.alturaJogo / 1.5, "Mateus").setScale(0.25);

        murilo = this.add.image(gameState.larguraJogo / 2.6, gameState.alturaJogo / 0.80, "Murilo").setScale(0.25);


        // Lógica para o "scroll" do mouse
        this.input.on('wheel', function(pointer, gameObjects, deltaX, deltaY, deltaZ) {
            if (deltaY > 0 && reclameF2.y > -100) {
                // Se o deltaY for positivo, a roda do mouse foi rolada para cima
                reclameF2.y -= 20;
                davi.y -= 20;
                fernando.y -= 20;
                leonardo.y -= 20;
                mateus.y -= 20; 
                renan.y -= 20; 
                ibiapina.y -= 20;   
                murilo.y -= 20;
            }

            if (deltaY <= 0 && reclameF2.y < 770) {
                // Se o deltaY for negativo, a roda do mouse foi rolada para baixo
                reclameF2.y += 20;
                davi.y += 20;
                fernando.y += 20;
                leonardo.y += 20;
                mateus.y += 20; 
                renan.y += 20; 
                murilo.y += 20;
                ibiapina.y += 20; 
            }
        });

        // Interatividades com o mouse
        setaDeVolta.setInteractive({ cursor: "pointer" });
        setaDeVolta.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("TelaInicial");
        })

        davi.setInteractive({ cursor: "pointer" });
        davi.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Davi");
        })

        fernando.setInteractive({ cursor: "pointer" });
        fernando.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Fernando");
        })

        leonardo.setInteractive({ cursor: "pointer" });
        leonardo.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Leo");
        })

        mateus.setInteractive({ cursor: "pointer" });
        mateus.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Mateus");
        })

        murilo.setInteractive({ cursor: "pointer" });
        murilo.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Murilo");
        })

        renan.setInteractive({ cursor: "pointer" });
        renan.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Renan");
        })

        ibiapina.setInteractive({ cursor: "pointer" });
        ibiapina.on("pointerdown", () => {
            this.bgMusic.stop();
            this.scene.start("Ibiapina");
        })

        setaDeVolta.on("pointerover", function() {
            bolaSeta.setVisible(true);
        })

        setaDeVolta.on("pointerout", function() {
            bolaSeta.setVisible(false);
        })
    }

    update() {

    }
}
