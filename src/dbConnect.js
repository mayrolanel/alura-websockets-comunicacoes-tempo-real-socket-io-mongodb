import { MongoClient } from "mongodb";

const cliente = new MongoClient("mongodb+srv://mayrolanel:uqxDA1yfjqrVxuRi@aluracluster.8edhiph.mongodb.net/?retryWrites=true&w=majority&appName=AluraCluster");
let documentosColecao;

try {
    await cliente.connect();
    const db = cliente.db("alura-websockets");
    documentosColecao = db.collection("documentos");
    console.log("Conectado ao Banco de dados com sucesso")
} catch(err) {
    console.log(err)
}

export {
    documentosColecao
}