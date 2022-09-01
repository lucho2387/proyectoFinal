import User from "../models/Users"
import Product from "../models/Products"
import Order from "../models/Orders"
import Cart from "../models/Carts"
const { createTransport } = require('nodemailer')
import config from "../config/config"

export const createOrder = async (req, res) => {
   
    const { nombre, email } = req.body
    // const nombre = req.user.nombre
    // const email = req.user.email
    const carrito = await Cart.find({email}).lean()
    const asunto = "Nuevo Pedido"
    const datosCarrito = JSON.stringify(carrito)
    const mensaje =  `<div>
                        <h3>Productos del Carrito${datosCarrito}</h3> 
                    </div>
                    <div>
                        <h3>Nombre del Usuario: ${nombre}</h3>  
                    </div>
                    <div>
                        <h3>Correo del Usuario: ${email}</h3>
                    </div>
                    `

    const transporter = createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: config.EMAIL,
            pass: config.PASSEMAIL
        }
    });

    const mailOptions = {
        from: 'Servidor Node.js',
        to: config.EMAIL,
        subject: asunto,
        html: mensaje,
    }

    try {
        const info = await transporter.sendMail(mailOptions)
        console.log(info)
        } catch (error) {
        console.log(error)
        }
    res.json("La orden se genero correctamente")
}

export const getOrders = async (req, res) => {
    // const products = await Product.find()
    // res.json(products)
}

export const getOrderById = async (req, res) => {
    // const { productId } = req.params
    // const product = await Product.findById(productId)
    // res.status(201).json(product)
}

export const deleteOrderById = async (req, res) => {
    // const { productId } = req.params
    // const deleteProduct = await Product.findByIdAndDelete(productId)
    // res.status(200).json({mensaje: "El producto fue eliminado correctamente"})
}
