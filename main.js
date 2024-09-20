console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Estilizando o elemento
novoElemento.style.textAlign = 'center';
novoElemento.style.marginTop = '20%';

// Função para gerar cores aleatórias
function gerarCorAleatoria() {
  const letras = '0123456789ABCDEF';
  let cor = '#';
  for (let i = 0; i < 6; i++) {
    cor += letras[Math.floor(Math.random() * 16)];
  }
  return cor;
}

// Função para alterar o tamanho e cor do texto de forma animada
function animarTexto() {
  let tamanhoFonte = 20;
  let aumento = true;

  setInterval(() => {
    if (tamanhoFonte >= 60) aumento = false;
    if (tamanhoFonte <= 20) aumento = true;

    tamanhoFonte = aumento ? tamanhoFonte + 1 : tamanhoFonte - 1;
    novoElemento.style.fontSize = tamanhoFonte + 'px';
    novoElemento.style.color = gerarCorAleatoria();
  }, 200);
}

// Iniciar a animação
animarTexto();
