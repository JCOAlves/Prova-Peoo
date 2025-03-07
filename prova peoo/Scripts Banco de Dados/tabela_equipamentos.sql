-- CRIAÇÃO DO BANCO DE DADOS locacao_equipamentos
-- CREATE DATABASE locacao_equipamentos;
-- USE locacao_equipamentos;

--CRIAÇÃO DA TABELA equipamentos
CREATE TABLE equipamentos(
    id_equipamento INT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    situacao ENUM('Disponível', 'Alugado', 'Manutenção','Desconhecido') NOT NULL DEFAULT 'Desconhecido',
    preco_diaria DECIMAL(10, 2) NOT NULL
);