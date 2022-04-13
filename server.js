import Express from 'express'

const server = express();
const puerto = 2548;

server.use(express.json());

server.listen(puerto, () => {
    console.log("hola");
})

console.log(server);

