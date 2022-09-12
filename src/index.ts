import express from 'express'
import productRouter from './routers/product-routers'

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
    console.log('Hola');
    res.send('Sever on');
})

app.use('/api/products', productRouter)

app.listen(PORT, ()=>{
    console.log(`Server ${PORT}`)
})