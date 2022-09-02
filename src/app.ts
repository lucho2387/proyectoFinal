import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { config } from './config/config';
import { routerProducts } from './routes/products.route'
import { routerAuth } from './routes/auth.route';
import dbConnect from './database/db';
import { routerCart } from './routes/cart.route';
import { routerOrders } from './routes/orders.route';


dbConnect().then()
const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/products', routerProducts)
app.use('/api/auth', routerAuth)
app.use('/api/carts', routerCart)
app.use('/api/orders', routerOrders)

const server = app.listen(config.PORT, () => 
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`)
)
server.on("error", (error) => 
    console.log("Error en el servidor: ", error)
    );
