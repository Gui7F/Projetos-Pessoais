const buttonEnviar = document.getElementById('enviar');
const caixaMsg = document.getElementById('texto');
const chat = document.getElementById('mensagens');


const socket = io();

buttonEnviar.addEventListener('click', () =>{
    if(caixaMsg.value !== ""){
        socket.emit("Nova Mensagem", caixaMsg.value);
        caixaMsg.value = "";
        caixaMsg.focus()
    }
})

socket.addEventListener("Nova Mensagem" , (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
} )