function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoIncialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto()
}

function mostraCarro(){
  image(imagemCarro , xCarro, yCarro, 50, 40)
}