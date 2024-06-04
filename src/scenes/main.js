var gameState = {
  // Definindo as dimensões do nosso jogo
  larguraJogo: window.innerWidth,
  alturaJogo: window.innerHeight,
}; 

// configuração padrão do nosso jogo
var config = {
  type: Phaser.AUTO,
  width: gameState.larguraJogo,
  height: gameState.alturaJogo,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: false, 
      gravity: { y: 0 },
    },
  },
  pixelArt: true,
  parent: "game", // id do elemento que vai conter o jogo
    dom: {
      createContainer: true
    },
  // Definição dos nomes das cenas

  scene: [
  TelaInicial,
  StartCutscene,
  LobbyScene,
  ElevatorCutscene,
  CenaUm,
  Privacy,
  Political,
  CenaDois, 
  MainBrowser,
  Metamail,
  Techlume,
  ShineMaster,
  MMC,
  ContatosTech,
  ContatosMMC,
  ContatosShine,
  ErrouMMC,
  ErrouShine,
  Errou,
  Errou2,
  Errou3,
  Acertou,
  Favoritos,
  Escrever,
  BrowserF1,
  LinkReclameF1,
  LinkBancoF1,
  LinkJusMetaF1,
  BrowserF2,
  LinkReclameF2,
  LinkBancoF2,
  LinkJusMetaF2,
  BrowserF3,
  LinkReclameF3,
  LinkBancoF3,
  LinkJusMetaF3,
  BrowserF4,
  LinkReclameF4,
  LinkBancoF4,
  LinkJusMetaF4,
  CenaTres,
  Minigame,
  Cand1,
  Cand2,
  Cand3,
  Cand4,
  CenaQuatro,
  ElevatorCutscene2,
  CenaFinal1,
  CenaFinal2,
  CenaFinal3,
  CenaFinal4,
  Due_diligenceCF,
  SelecaoFornecedores,
  Onboarding,
  Cand1Final,
  Cand2Final,
  Cand3Final,
  Cand4Final,
  Terminacao,
  MainBrowserFF,
  BrowserFF,
  MetamailFF,
  Iws,
  ContatosFF,
  LinkReclameFF,
  LinkBancoFF,
  LinkJusMetaFF,
  ErrouFF,
  AcertouFF,
  Leo,
  Fernando,
  Ibiapina,
  Davi,
  Renan,
  Murilo,
  Mateus,
  Zerou,
  Creditos, 

  ],
};
// Configuração padrão do Phaser para a configuração de um novo jogo
var game = new Phaser.Game(config);