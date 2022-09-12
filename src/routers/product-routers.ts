import express from 'express';
import { ProductHttpService } from "../services/product-http1.service";

const router = express.Router();

const productService = new ProductHttpService();

// Listar -> ok
router.get('/', async (_req, res) => {
    const products = await productService.getAll();
    console.log(products.map(elem => elem.title));
    res.send(products);
})

// Buscar Id -> ok
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await productService.findOne(id);
    res.send(products);
})

// Actualizar id -> ok
router.put('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await productService.update(id, req.body);
    res.send(products);
})

// crear -> error
router.post('/', async (req, res) => {
    const products = await productService.create1(req.body);
    res.send(products);
})

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const products = await productService.delete(id);
    res.send(products);
})


export default router