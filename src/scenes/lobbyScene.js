class LobbyScene extends Phaser.Scene {
  constructor() {
    super({ key: "LobbyScene" });
  }

  preload() {
    // Carregamento dos conjuntos de blocos
    this.load.image("tilesOffice", "src/assets/tiled/OfficeInterior.png");
    this.load.image("tilesCity", "src/assets/tiled/JapaneseCityFree.png");
    
    // Carregamento do mapa
    this.load.tilemapTiledJSON("secretaria", "src/assets/tiled/secretaria.json");
    this.load.spritesheet("player", "src/assets/personagens/spritePlayer.png", { frameWidth: 145, frameHeight: 146 });

    // Carregamento do botão que leva o jogador para a próxima fase
    this.load.image("elevator", "src/assets/botoes/elevator.png");

    // Carregando instrução de como jogar
    this.load.image("instrucao", "././src/assets/secretaria/instrucao.png")

    // Carregamento do plugin do joystick e E da hud
    var url;
    url = 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js';
    this.load.plugin('rexvirtualjoystickplugin', url, true);
    this.load.image("hudE", "src/assets/botoes/E.png");

    // Carregamento da lógia do diálogo
    this.load.image('balaoDino','src/assets/baloesFala/balaoDino.png');
    this.load.image('letraE','src/assets/botoes/letraE.png');
    this.load.image('letraE2', 'src/assets/botoes/letraE2.png');
    this.load.image('dino', 'src/assets/personagens/dino.png');

    //musicas
    this.load.audio('steps', ['src/assets/effects/walking-sounds.mp3']);
    this.load.audio('backgroundSong', ['src/assets/songs/backgroundScenes.mp3']);
    this.load.audio('click', ['src/assets/effects/select-effect.mp3']);
    this.load.audio('elevator', ['src/assets/effects/elevator-click.mp3']);
    this.load.audio('dialogue', ['src/assets/effects/npc.mp3']);
  }

  create() {
    // Criação do mapa
    const secretaria = this.make.tilemap({
      key: "secretaria",
      tileWidth: 32,
      tileHeight: 32,
    });

    // Carregamento das imagens do mapa
    const officeInterior = secretaria.addTilesetImage( "OfficeInterior", "tilesOffice");
    const cityFree = secretaria.addTilesetImage( "japaneseCityFree", "tilesCity" );

    //carregando imagem player
    this.player = this.physics.add.sprite(420, 330, "player").setScale(0.2);
    this.player.setDepth(1);

    // Criação das camadas do mapa do tiled
    this.chao = secretaria.createLayer("chao", officeInterior, 0, 0);
    this.chaoCityFree = secretaria.createLayer("chaoCityFree", cityFree, 0, 0);
    this.paredesCityFree = secretaria.createLayer("paredesCityFree", cityFree, 0, 0);
    this.paredes = secretaria.createLayer("paredes", officeInterior, 0, 0);
    this.objetos = secretaria.createLayer("objetos", officeInterior, 0, 0);
    this.objetosDois = secretaria.createLayer("objetosDois", officeInterior, 0, 0);
    this.objetosTres = secretaria.createLayer("objetosTres", officeInterior, 0, 0);

    //Definindo a colisão com as paredes e objetos
    this.paredesCityFree.setCollisionByProperty({ collider: true });
    this.paredes.setCollisionByProperty({ collider: true });
    this.objetos.setCollisionByProperty({ collider: true });
    this.objetosDois.setCollisionByProperty({ collider: true });
    this.objetosTres.setCollisionByProperty({ collider: true });

      // Criar um contêiner para elementos fixos
      this.fixedElementsContainer = this.add.container();

    //Fixando itens
    this.instrucao = this.add.image(850, 370, "instrucao").setScale(0.2);
    this.fixedElementsContainer.add(this.instrucao);
    this.fixedElementsContainer.setScrollFactor(0);

    // Adicionando a colisão do player com as paredes e objetos
    this.physics.add.collider(this.player, this.paredesCityFree);
    this.physics.add.collider(this.player, this.paredes);
    this.physics.add.collider(this.player, this.objetos);
    this.physics.add.collider(this.player, this.objetosDois);
    this.physics.add.collider(this.player, this.objetosTres);

    //adicionando sons
    this.steps = this.sound.add('steps');
    this.click = this.sound.add('click');
    this.elevator = this.sound.add('elevator');
    this.dialogue = this.sound.add('dialogue');

    //adicionando música de fundo
    this.backgroundSong = this.sound.add('backgroundSong');
    this.backgroundSong.play();

    //teclas de movimentação e interação
    this.cursors = this.input.keyboard.createCursorKeys();

    this.joyStick = this.plugins.get('rexvirtualjoystickplugin').add(this, {
      x: this.cameras.main.width /2.8 ,
      y: this.cameras.main.height /1.8 ,
      radius: 30,
      base: this.add.circle(0, 0, 32, 0x5704a6),
      thumb: this.add.circle(0, 0, 16, 0x3b0073),
      // dir: '8dir',    'up&down'|0|'left&right'|1|'4dir'|2|'8dir'|3
       forceMin: 16,
       enable: true
    });

    this.joyStick.base.setDepth(1);
    this.joyStick.thumb.setDepth(1);

    this.hudE = this.add.image(this.cameras.main.width /1.5 , this.cameras.main.height /1.8 , "hudE").setScale(0.25);
    this.hudE.setDepth(1);
    this.hudE.setScrollFactor(0);
    this.hudE.setInteractive();

    this.input.keyboard.on('keydown-UP', () => {
      this.hudE.setVisible(false);
      this.joyStick.base.setVisible(false);
      this.joyStick.thumb.setVisible(false);
    });
  
    this.input.keyboard.on('keydown-DOWN', () => {
      this.hudE.setVisible(false);
      this.joyStick.base.setVisible(false);
      this.joyStick.thumb.setVisible(false);
    });
  
    this.input.keyboard.on('keydown-LEFT', () => {
      this.hudE.setVisible(false);
      this.joyStick.base.setVisible(false);
      this.joyStick.thumb.setVisible(false);
    });
  
    this.input.keyboard.on('keydown-RIGHT', () => {
      this.hudE.setVisible(false);
      this.joyStick.base.setVisible(false);
      this.joyStick.thumb.setVisible(false);
    });

    //animação do player
    this.anims.create({
      key: 'player_left',
      frames: this.anims.generateFrameNumbers('player', { start: 12, end: 15 }),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'player_right',
      frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'player_down',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3 }),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'player_up',
      frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
      frameRate: 7,
      repeat: -1
    });

    this.anims.create({
      key: 'player_stop',
      frames: this.anims.generateFrameNumbers('player', { start: 0, end: 0 }),
      frameRate: 7,
      repeat: -1
    });

    //adicionando balão de fala
    this.balaoDino = this.add.image(330, 300, 'balaoDino').setScale(0.4);
    this.balaoDino.setDepth(1); 
    this.balaoDino.setVisible(false);

    //adicionando texto de fala
    this.textoFala = this.add.text(247, 265, '', { fontSize: '135%', color: "black", fontFamily :'Verdana', fontWeight: 'extrablack', align: 'justify', wordWrap: { width: 260 }});
    this.textoFala.setVisible(false);
    this.textoFala.setDepth(2);

    // Diálogos: Array com os diálogos que serão exibidos
    this.dialogos = [
      "Bem vinde!",
      "Eu sou fabricinho e vim te acompanhar nessa jornada pelo processo de contratação da Meta!", 
      "Primeiramente queria dizer que é \num prazer te conhecer",
      "Agora pegue o elevador para conhecer sua mentora, a Tatá, que \nte guiará pela sua jornada aqui na Meta.",
      "Boa Sorte e até mais."
    ]
    this.dialogoAtual = 0; // Contador para controlar a posição do diálogo atual

    // Adicionando input para o nome do jogador e gênero e botão enter
    this.dino = this.add.image(330, 235, 'dino').setScale(0.15);
    this.physics.world.enable([this.player, this.dino]);
    this.dino.setSize(120, 200);
    this.dino.setDepth(1);

    // Definindo a sobreposição do jogador com o botão
    this.playerOverlappingDino = false;
    
    // Overlap entre o player e o botão aciona interatividade
    this.physics.add.overlap(this.player, this.dino, () => {
      this.playerOverlappingDino = true;
    }, null, this);
    
    //Colocando tela E em cima do dino para induzir o jogador a iniciar o diálogo
    this.letraE = this.add.image(380, 240, 'letraE').setScale(0.2);
    this.letraE2 = this.add.image(380, 240, 'letraE2').setScale(0.2);

    //Colocando a letra E para piscar
    this.letraEInterval2 = setInterval(() => {
    this.letraE2.visible = !this.letraE2.visible;
    }, 500);
  
    this.input.keyboard.on('keydown-E', () => {
      if (this.playerOverlappingDino) {
        // Lógica para exibir o diálogo entre o jogador e o NPC
        this.balaoDino.setVisible(true);
        this.textoFala.setVisible(true);
        this.textoFala.setText(this.dialogos[this.dialogoAtual]);
        
        // Avança para o próximo diálogo ou esconde o balão se for o último
        this.dialogoAtual++;
        if (this.dialogoAtual > this.dialogos.length) {
          this.balaoDino.setVisible(false);
          this.textoFala.setVisible(false);
          this.dino.setVisible(false)
          this.letraE.setVisible(false)
          this.letraE2.setVisible(false)
          clearInterval(this.letraEInterval2);
        } else if (this.textoFala.text == this.dialogos[0]) {
          this.dialogue.play();
        }
      }
    });

    this.letraE200 = this.add.image(543, 200, 'letraE').setScale(0.3);
    this.letraE210 = this.add.image(543, 200, 'letraE2').setScale(0.3);
    this.letraE200.setVisible(false)
    this.letraE210.setVisible(false)

    if(!this.balaoDino.visible && !this.dino.visible ){
      this.letraE200.setVisible(true)
      this.letraE210.setVisible(true)
      this.letraE200Interval200 = setInterval(() => {
      this.letraE210.visible = !this.letraE210.visible;
        }, 500);
    }

    // Adicionando o botão de interação do elevador para próxima fase
    this.button = this.physics.add.image(465, 180, "elevator").setScale(0.2);
    this.physics.world.enable([this.player, this.button]);
    this.button.body.setSize(900, 450);

    // Definindo a sobreposição do jogador com o botão
    this.playerOverlappingButton = false;

    // Overlap entre o player e o botão aciona interatividade
    this.physics.add.overlap(this.player, this.button, () => {
      this.playerOverlappingButton = true;
    }, null, this);

    this.input.keyboard.on('keydown-E', () => {
      // Verifica se o botão está habilitado para ser acionado
      if (this.playerOverlappingButton && !this.dino.visible) {
        this.elevator.play();
        // Se o botão estiver habilitado pode ser apertado
        this.backgroundSong.stop();
        this.scene.start("CenaUm");
        this.scene.stop("LobbyScene");
      }
    });

    // Definir o tamanho da câmera para o tamanho do mapa
    this.cameras.main.setBounds(0, 0, secretaria.widthInPixels, secretaria.heightInPixels);
    // Fazer a câmera seguir o jogador
    this.cameras.main.startFollow(this.player);
    // Dar zoom na câmera
    this.cameras.main.setZoom(2.2);

    //INTERAÇÕES PARA O BOTÃO E
    this.hudE.on('pointerdown', () => {
      this.click.play();
      if (this.playerOverlappingDino) {
        // Lógica para exibir o diálogo entre o jogador e o NPC
        this.balaoDino.setVisible(true);
        this.textoFala.setVisible(true);
        this.textoFala.setText(this.dialogos[this.dialogoAtual]);
          
        // Avança para o próximo diálogo ou esconde o balão se for o último
        this.dialogoAtual++;
      }
    });

    this.hudE.on('pointerdown', () => {
      // Verifica se o botão está habilitado para ser acionado
      if (this.playerOverlappingButton && !this.dino.visible) {
          // Se o botão estiver habilitado pode ser apertado
          this.backgroundSong.stop();
          this.scene.start("CenaUm");
          this.scene.stop("LobbyScene");
      }
    });
    
  }
  
  update() {
    // Definindo o estado inicial do player
    this.player.body.setVelocity(0);

    //Fazendo a movimentação do player com o joystick
    if (this.joyStick.right && !this.balaoDino.visible) {
      this.player.body.setVelocityX(150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      if (this.joyStick.down) {
        this.player.anims.play("player_down", true);
      } else if (this.joyStick.up) {
        this.player.anims.play("player_up", true);
      } else {
        this.player.anims.play("player_right", true);
      }
    }

    if (this.joyStick.left && !this.balaoDino.visible) {
      this.player.body.setVelocityX(-150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      if (this.joyStick.down) {
        this.player.anims.play("player_down", true);
      } else if (this.joyStick.up) {
        this.player.anims.play("player_up", true);
      } else {
        this.player.anims.play("player_left", true);
      }
    }

    if (this.joyStick.up && !this.balaoDino.visible) {
      this.player.body.setVelocityY(-150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      this.player.anims.play("player_up", true);
    }

    if (this.joyStick.down && !this.balaoDino.visible) {
      this.player.body.setVelocityY(150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      this.player.anims.play("player_down", true);
    }

    if (!this.joyStick.right && !this.joyStick.left && !this.joyStick.up && !this.joyStick.down && !this.balaoDino.visible && !this.cursors.left.isDown && this.cursors.right.isDown && this.cursors.up.isDown && this.cursors.down.isDown) {

      if (this.steps.isPlaying) {
        this.steps.stop();
      }

      this.player.anims.play("player_stop", true);
    }

    // Fazendo a movimentação do player com as setas
    if (this.cursors.left.isDown && !this.balaoDino.visible) {
      this.player.body.setVelocityX(-150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      if (this.cursors.down.isDown) {
        this.player.anims.play("player_down", true);
      } else if (this.cursors.up.isDown) {
        this.player.anims.play("player_up", true);
      } else {
        this.player.anims.play("player_left", true);
      }
    } 
    
    if (this.cursors.right.isDown && !this.balaoDino.visible ) {
      this.player.body.setVelocityX(150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      if (this.cursors.down.isDown) {
        this.player.anims.play("player_down", true);
      } else if (this.cursors.up.isDown) {
        this.player.anims.play("player_up", true);
      } else {
        this.player.anims.play("player_right", true);
      }
    }
    
    if (this.cursors.up.isDown && !this.balaoDino.visible) {
      this.player.body.setVelocityY(-150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      this.player.anims.play("player_up", true);
    } else if (this.cursors.down.isDown && !this.balaoDino.visible) {
      this.player.body.setVelocityY(150);

      if (!this.steps.isPlaying) {
        this.steps.play();
      }

      this.player.anims.play("player_down", true);
    }
    
    if (!this.cursors.up.isDown && !this.cursors.down.isDown && !this.cursors.left.isDown && !this.cursors.right.isDown && !this.balaoDino.visible && !this.joyStick.right && !this.joyStick.left && !this.joyStick.up && !this.joyStick.down) {

      if (this.steps.isPlaying) {
        this.steps.stop();
      }

      this.player.anims.play("player_stop", true);
    }

    // Verifique se o jogador está se sobrepondo ao botão
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.button.getBounds())) {
      this.playerOverlappingButton = true;
    } else {
      this.playerOverlappingButton = false;  
    }
    
    // Verifique se o jogador está se sobrepondo ao dinossauro
    if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(), this.dino.getBounds())) {
      this.playerOverlappingDino = true;
    } else {
      this.playerOverlappingDino = false;  
    }
  } 
}


