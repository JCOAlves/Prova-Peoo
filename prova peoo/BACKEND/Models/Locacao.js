class Locacao{
    constructor(id_locacao,	id_equipamento,	nome_cliente, data_inicio, data_fim, valor_total, situacao){
        this._id_locacao = id_locacao;
        this._id_equipamento = id_equipamento;
        this._nome_cliente = nome_cliente;
        this._data_inicio = data_inicio;
        this._data_fim = data_fim;
        this._valor_total = valor_total;
        this._situacao = situacao;

    }
    
    setId_locacao(id_locacao){
        this._id_locacao = id_locacao;
    }

    setId_equipamento(id_equipamento){
        this._id_equipamento = id_equipamento;
    }

    setSituacao(situacao){
        this._situacao = situacao;
    }

    setNome_cliente(nome_cliente){
        this._nome_cliente = nome_cliente;
    }

    setData_inicio(data_inicio){
        this._data_inicio = data_inicio;
    }

    setData_fim(data_fim){
        this._data_fim = data_fim;
    }

    setValor_total(valor_total){
        this._valor_total = valor_total;
    }

    setSituacao(situacao){
        this._situacao = situacao;
    }


    getId_locacao(){
        return this._id_locacao;
    }

    getId_equipamento(){
        return this.id_equipamento;
    }

    getNome_cliente(){
        return this._nome_cliente;
    }

    getData_inicio(){
        return this._data_inicio;
    }

    getData_fim(){
        return this._data_fim;
    }

    getValor_total(){
        return this._valor_total
    }

    getSituacao(){
        return this._situacao;
    }
}

export default Locacao;