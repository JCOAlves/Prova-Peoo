class Equipamento{
    constructor(id_equipamento,	nome, descricao, categoria, situacao, preco_diaria){
        this._id_equipamento = id_equipamento;
        this._nome = nome;
        this._descricao = descricao;
        this._categoria = categoria;
        this._situacao = situacao;
        this._preco_diaria = preco_diaria;
    }

    setId_equipamento(id_equipamento){
        this._id_equipamento = id_equipamento;
    }

    setNome(nome){
        this._nome = nome;
    }

    setDescricao(descricao){
        this._descricao = descricao;
    }

    setCategoria(categoria){
        this._categoria = categoria;
    }

    setSituacao(situacao){
        this._situacao = situacao;
    }

    setPreco_diaria(preco_diaria){
        this._preco_diaria = preco_diaria;
    }

    getId_equipamento(){
        return this._id_equipamento;
    }

    getNome(){
        return this._nome;
    }

    getDescricao(){
        return this._descricao;
    }

    getCategoria(){
        return this._categoria;
    }

    getSituacao(){
        return this._situacao;
    }

    getPreco_diaria(){
        return this._preco_diaria;
    }
}

export default Equipamento;