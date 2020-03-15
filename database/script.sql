CREATE DATABASE IF NOT EXISTS avaliacao;
USE avaliacao;

CREATE TABLE IF NOT EXISTS curriculo (
  id INT(11),
  nome VARCHAR(255),
  endereco VARCHAR(255),
  numero INT(11),
  bairro VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS curriculo_exp (
  id INT(11),
  curriculo INT(11),
  empresa VARCHAR(255),
  funcao VARCHAR(255),
  atribuicoes TEXT,
  PRIMARY KEY (id)
);