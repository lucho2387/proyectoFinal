import Cart from "../models/Carts"
import Product from "../models/Products"

export const getCarts = async (req, res) => {
    const carts = await Cart.find()
    res.json(carts)
}

export const getCartById = async (req, res) => {
    const { cartId } = req.params
    const cart = await Cart.findById(cartId)
    if(!cart) {
        res.status(404).json({mensaje: "No se encontro el carrito"})
    }else {
        res.status(201).json(cart)
    }
}

export const createCart = async (req, res) => {
    const { productId } = req.params
    
    const { email } =  req.body
    const product = await Product.findById(productId)

    if(!product) {
        res.status(404).json({mensaje: "No se encontro el producto"})
    }else {
        const newCArt = new Cart({ email, productos: product })
        const cartSaved =  await newCArt.save()
        res.status(201).json(cartSaved)
    }
}

export const updateCartById = async (req, res) => {
    const { cartId, productId } = req.params
    const product = await Product.findById(productId)
    const cart = await Cart.findById(cartId)
  
    if(!product) {
        res.status(404).json({mensaje: "No se encontro el producto"})
    }else {
        if(!cart){
            res.status(404).json({mensaje: "No se encontro el carrito"})
        }else {
            await Cart.findByIdAndUpdate({_id: cartId}, {$push: {productos: product}})
            res.status(200).json({mensaje: "El producto se pudo agregar correctamente"})
        }
    }
}

export const deleteProductCartById = async (req, res) => {
    const { cartId, productId } = req.params
    const product = await Product.findById(productId)
    const cart = await Cart.findById(cartId)
    if(!product) {
        res.status(404).json({mensaje: "No se encontro el producto"})
    }else {
        if(!cart){
            res.status(404).json({mensaje: "No se encontro el carrito"})
        }else {
            await Cart.updateOne({_id: cartId}, {$pull: {productos: product}})
            res.status(200).json({mensaje: "El producto se pudo eliminar del carrito"})
        }
    } 
}

export const deleteCartById = async (req, res) => {
    const { cartId } = req.params
    await Cart.findByIdAndDelete(cartId)
    res.status(200).json({mensaje: "El carrito fue eliminado correctamente"})
}


export const getUserCart = async (req, res) => {
    const { email } = req.params
    const cart = await Cart.find({email})
    if(!cart) {
        res.status(404).json({mensaje: "No se encontro el carrito"})
    }else {
        res.status(201).json(cart)
    }
}
