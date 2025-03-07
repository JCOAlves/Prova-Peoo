--CRIAÇÃO DA TABELA  locacao
CREATE TABLE locacao(
    id_locacao INT AUTO_INCREMENT PRIMARY KEY,
    id_equipamento INT NOT NULL,
    FOREIGN KEY(id_equipamento) REFERENCES equipamentos(id_equipamento),
    nome_cliente VARCHAR(100) NOT NULL,
    data_inicio DATE NOT NULL DEFAULT CURRENT_DATE,
    data_fim DATE NOT NULL DEFAULT CURRENT_DATE,
    valor_total DECIMAL(10, 2) NOT NULL,
    situacao ENUM('Ativa', 'Encerrada', 'Desconhecida') DEFAULT 'Desconhecida'
);