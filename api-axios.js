//importando bibliotecas
const http = require('http');
const axios = require('axios');
const express = require('express');

//função para lidar com as requisições
const requestMain = (req, res) => {
    //URL da API que iremos acessar
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'

    //fazendo uma requisição HTTP GET com API
    axios.get(apiUrl)
        .then((apiResponse) => {
            //configurando o cabeçalho da resposta
            res.writeHead(200, {'Content-Type': 'text/plain'});

            //exibindo os dados retornados na resposta
            res.end(`Dados da API: ${JSON.stringify(apiResponse.data)}`)
        })
        .catch((error) => {
            console.error('Erro ao acessar a API: ', error)
        })
}

//criando servidor
const server = http.createServer(requestMain)

//definindo a porta - variável de ambiente 
const PORT = 3333;

//iniciando o servidor e ouvindo a porta definida
server.listen(PORT, () => [
    console.log(`Servidor rodando em http://localhost:${PORT}`)
])
