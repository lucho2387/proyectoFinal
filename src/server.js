// import express from 'express'
// import morgan from 'morgan'
// // import pkg from '../package.json'
// import productsRoute from './routes/products.routes'
// import authRoute from './routes/auth.routes'
// import usersRoute from './routes/users.routes'
// import cartsRoute from './routes/cart.routes'
// import  { createRoles } from './libs/initialSetup'

// const app = express()
// createRoles()

// // app.set('pkg', pkg)


// // Middlewares
// app.use(morgan('dev'))
// app.use(express.json())

// // app.get('/', (req, res) => {
// //     res.json({
// //         name: app.get('pkg').name,
// //         author: app.get('pkg').author,
// //         description: app.get('pkg').description,
// //         version: app.get('pkg').version
// //     })
// // })

// app.use('/api/products', productsRoute)
// app.use('/', authRoute)
// app.use('/api/users', usersRoute)
// app.use('/api/cart', cartsRoute)

// export default app

import config from './config/config'
import './database/database'
import express from 'express'
import morgan from 'morgan'
import productsRouter from './routes/products.routes'
import authRoute from './routes/auth.routes'
import usersRouter from './routes/users.routes'
import cartsRoute from './routes/cart.routes'
import ordersRouter from './routes/orders.route'
import infoRouter from './routes/info.routes'
import  { createRoles } from './libs/initialSetup'
require('dotenv').config()

const app = express()
createRoles()


// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use((err, req, res, next) => {
    console.error(err.message);
    return res.status(500).send('Algo se rompio!');
});

// app.use('/api/users', usersRoute)
// app.use('/api/cart', cartsRoute)
// CAPAS
// const productsRouter = new ProductsRouter()
// const usersRouter = new UsersRouter()

app.use('/api/products', productsRouter)
app.use('/api/users', usersRouter)
app.use('/api/cart', cartsRoute)
app.use('/api/orders', ordersRouter)
app.use('/info', infoRouter)
app.use('/', authRoute)

const PORT = config.PORT || 8080;

const server = app.listen(PORT, () => {
    console.log(
        `Servidor express escuchando en el puerto ${PORT} (${config.NODE_ENV} - ${config.TIPO_PERSISTENCIA})`
)})


server.on('error', error => {
    console.log('error en el servidor:', error);
});