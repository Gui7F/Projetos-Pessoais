const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const tituloProduto = document.getElementById('titulo-produto');
const nomeCor = document.getElementById('nome-cor-selecionada');
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

const verdeCipreste = {
    nome: 'Verde-Cipreste', 
    pasta: 'imagens-verde-cipreste'
}

const rosaClaro = {
    nome: 'Rosa-Claro', 
    pasta: 'imagens-rosa-claro'
}

const meiaNoite = {
    nome: 'Meia-Noite', 
    pasta: 'imagens-meia-noite'
}

const estelar = {
    nome: 'Estelar', 
    pasta: 'imagens-estelar'
}

const azulInverno = {
    nome: 'Azul-Inverno', 
    pasta: 'imagens-azul-inverno'
}

const opcoesDeCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro]
const opcoesTamanho = ['41mm', '45mm']

let imagemSelecionada = 1;

let tamanhoSelecionado = 1;

let corSelecionada = 1;

function trocaImagem(){
    const idImagemSeleciona = document.querySelector('[name="opcao-imagem"]:checked').id;
    imagemSelecionada = idImagemSeleciona.charAt(0);  // charAt selicona caracter apartir de sua posição
    imagemVisualizacao.src ='./imagens/opcoes-cores/'+ opcoesDeCores[corSelecionada].pasta +'/imagem-'+ imagemSelecionada + '.jpeg';
}

function trocaTamanho(){
    const idTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id;
    tamanhoSelecionado = idTamanhoSelecionado.charAt(0);

    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesDeCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    if(opcoesTamanho[tamanhoSelecionado] === '41mm'){
        imagemVisualizacao.classList.add('caixa-pequena')
    }else{
        imagemVisualizacao.classList.remove('caixa-pequena')
    }
   
}

function trocarCor(){
    //Atulizar corSelecionada
    const idCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
    corSelecionada = idCorSelecionada.charAt(0)
    // Trocar título da pagina
    tituloProduto.innerText = 'Pulseira loop esportiva ' + opcoesDeCores[corSelecionada].nome + ' para caixa de ' + opcoesTamanho[tamanhoSelecionado];
    //Trocar nome da cor
    nomeCor.innerText = 'Cor - '+ opcoesDeCores[corSelecionada].nome
    //Trocar cor das minaturas da pagina
    miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-0.jpeg'
    miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-1.jpeg'
    miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesDeCores[corSelecionada].pasta + '/imagem-2.jpeg'
    //Trocar cor da visualização 
    imagemVisualizacao.src ='./imagens/opcoes-cores/'+ opcoesDeCores[corSelecionada].pasta +'/imagem-'+ imagemSelecionada + '.jpeg';
}