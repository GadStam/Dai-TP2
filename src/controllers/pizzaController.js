import { Router as rutita} from 'express';

const router = rutita();

router.get('/getall', (req, res) =>{
    console.log(req.body);
    console.log(`this is a get operation`);

    res.status(309).json(req.body)
})