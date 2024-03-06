//importando bibliotecas
const axios = require('axios');
const express = require('express');

const app = express();

//rota principal exibe os posts
app.get('/', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Posts: ${JSON.stringify(response.data)}`)
        })
})

//rota de post único baseado no id
app.get('/posts/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Post ${id}: ${JSON.stringify(response.data)}`)
        })
})

//rota de comments
app.get('/comments', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/comments"

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Comments: ${JSON.stringify(response.data)}`)
        })
})

//rota de comments em um post expecífico baseado no id
app.get('/comments/postId/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Comment ${id}: ${JSON.stringify(response.data)}`)
        })
})

//rota de albums
app.get('/albums', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/albums";

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Albums: ${JSON.stringify(response.data)}`)
        })
})

//rota de album único baseado no id
app.get('/albums/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl =  `https://jsonplaceholder.typicode.com/albums/${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Album ${id}: ${JSON.stringify(response.data)}`)
        })
})

//rota de photos
app.get('/photos', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/photos";

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Photos: ${JSON.stringify(response.data)}`)
        })
})

//rota de photo única baseado no id
app.get('/photos/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl = `https://jsonplaceholder.typicode.com/photos/${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Photo ${id}: ${JSON.stringify(response.data)}`)
        })
})

//rota de todos
app.get('/todos', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/todos";

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Todos: ${JSON.stringify(response.data)}`)
        })
})

//rota de todo único baseado no id
app.get('/todos/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Todo ${id}: ${JSON.stringify(response.data)}`)
        })
})

//rota de users
app.get('/users', (req, res) => {

    const apiUrl = "https://jsonplaceholder.typicode.com/users"

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> Users: ${JSON.stringify(response.data)}`)
        })
})

//rota de user único baseado no id
app.get('/users/:id', (req, res) => {

    const {id} = req.params;

    const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;

    axios.get(apiUrl)
        .then((response) => {
            res.writeHead(200, {'Content-Type': 'text/plain'})

            res.end(`API Datas -> User ${id}: ${JSON.stringify(response.data)}`)
        })
})


const PORT = 3004

app.listen(PORT, () => {

    console.log(`Servidor rodando: http://localhost:${PORT}`)
})