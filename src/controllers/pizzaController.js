import { Router as rutita} from 'express';

const router = rutita();

router.get('/getall', (req, res) =>{
    console.log(req.body);
    console.log(`this is a get operation`);

    const valorRetorno = {nombre:"Juli"}
    valorRetorno.apellido = "Schiffer";

    const auth=true;
    const authError="sin acceso";

    res.status(auth ? 200:401).json(auth ? valorRetorno:authError);
})

export default router;