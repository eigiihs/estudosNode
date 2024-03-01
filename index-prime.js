//importando a biblioteca axios
const axios = require('axios');

//URL da API que iremos acessar
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

//requisição HTTP GET API usando o axios
axios.get(apiUrl)
    .then((response) => {
        //exibindo os dados retornados no console
        console.log("Dados da API: ", response.data)
    })
    .catch((error) => {
        //em caso de erro, exiba o erro no console
        console.error('Erro ao acessar a API: ', error)
    })