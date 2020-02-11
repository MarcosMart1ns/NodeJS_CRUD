const express = require("express");

const server = express();
server.use(express.json())
const users = ['Marcos', 'Andre', 'Vinicius']

server.get('/', (req, res) => {
  return res.send('Server iniciado')
})

//CREATE

server.post('/users/', (req, res) => {
  const { user } = req.body;

  users.push(user)

  return res.json(users)
});

//READ

server.get("/users", (req, res) => {

  return res.json({ users });
});

//UPDATE

server.put('/users/:index', (req, res) => {
  const { index } = req.params;
  const { user } = req.body;

  users[index] = user;

  return res.json(users);
})

//DELETE

server.delete('/users/:index', (req, res) => {
  const { index } = req.params;

  users.splice(index, 1)

  return res.json(users); s
})

server.listen(3535);

console.log("Server Iniciado");
