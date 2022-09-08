import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { config } from './config/config';
import { routerProducts } from './routes/products.route'
import { routerAuth } from './routes/auth.route';
import dbConnect from './database/db';
import { routerCart } from './routes/cart.route';
import { routerOrders } from './routes/orders.route';
import path from 'path'
import { routerInfo } from './routes/info.route';
import { routerUsers } from './routes/users.route';
import { routerMessages } from './routes/messages.routes';
import session from  'express-session';
import cookieParser from "cookie-parser";
import MongoStore from "connect-mongo";

dbConnect().then()
const app = express()

// Configuracion
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug');

// Middlwares
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.URL
    }),
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 6000000
    }
}))

// Routes
app.use('/api/products', routerProducts)
app.use('/api/auth', routerAuth)
app.use('/api/carts', routerCart)
app.use('/api/orders', routerOrders)
app.use('/api/info', routerInfo)
app.use('/api/users', routerUsers)
app.use('/api/chat', routerMessages)

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

const server = app.listen(config.PORT, () => 
    console.log(`Servidor corriendo en http://localhost:${config.PORT}`)
)
server.on("error", (error) => 
    console.log("Error en el servidor: ", error)
);
