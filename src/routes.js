import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res)=>{
    return res.json({message: 'Fabio Vige Tudo Certo'});
});

export default routes;
