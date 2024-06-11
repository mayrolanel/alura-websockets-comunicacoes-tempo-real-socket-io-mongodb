import { atualizaDocumento, encontrarDocumento } from "./documentosDB.js";
import io from "./servidor.js";

// const documentos = [
//     {
//         nome: "JavaScript",
//         texto: "texto de javascript...",
//     },
//     {
//         nome: "Node",
//         texto: "texto de node...",
//     },
//     {
//         nome: "Socket.io",
//         texto: "texto de socket.io...",
//     },
// ];

io.on("connection", (socket) => {
    console.log("Um cliente se conectou! ID: ", socket.id);

    socket.on("selecionar_documento", async (nomeDocumento, devolverTexto) => {
        socket.join(nomeDocumento)

        const documento = await encontrarDocumento(nomeDocumento);

        console.log(documento)

        if(documento) {
            devolverTexto(documento.texto)
        }

    });

    socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
        const atualizacao = await atualizaDocumento(nomeDocumento, texto);

        if(atualizacao.modifiedCount){
            socket.to(nomeDocumento).emit("texto_editor_clientes", texto);
        }
  
    });

});
