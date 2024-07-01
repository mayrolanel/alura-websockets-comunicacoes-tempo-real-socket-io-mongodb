import "./socket-front-index.js"
import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumento = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');

form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    console.log('hi', inputDocumento)
    emitirAdicionarDocumento(inputDocumento.value)

    inputDocumento.value = ""
})

function inserirLinkDocumento(nomeDocumento) {
    listaDocumento.innerHTML += `
    <a href="documento.html?nome=${nomeDocumento}" id="documento-${nomeDocumento}" class="list-group-item list-group-item-action">
        ${nomeDocumento}
    </a>
    `
}

function removerLinkDocumento(nomeDocumento) {
    const documento = document.getElementById(`documento-${nomeDocumento}`);
    listaDocumento.removeChild(documento);
}

export {
    inserirLinkDocumento,
    removerLinkDocumento
}