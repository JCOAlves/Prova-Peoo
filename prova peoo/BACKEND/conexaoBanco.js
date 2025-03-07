import mysql from 'mysql';
import util from 'util';

//Objeto com as configurações de conexão com o banco MySQL
const banco_configuracoes = {
    host : "localhost",
    user : process.env.USUARIO_BANCO || "root",
    password : process.env.SENHA_BANCO || "",
    database : "locacao_equipamentos"
}

//Criação do objeto de conexão
const conexao = mysql.criaConexao(banco_configuracoes);

//Tenta abrir a conexão com o banco
conexao.conecta((erro) => {
    if (erro){
        console.log("Erro na conexão com o banco: ", erro.message);
        process.exit(1);
    }
    console.log("Conexão realizada com sucesso");
})

//Transforma o método query do objeto conexao em promise
conexao.query = util.promisify(conexao.query).bind(conexao);

export default connection;