import express from 'express'

const server = express();
const puerto = 2548;

server.use(express.json());

server.listen(puerto, () => {
    console.log(`This is a server on the port ${puerto}`);
})

console.log(server);

