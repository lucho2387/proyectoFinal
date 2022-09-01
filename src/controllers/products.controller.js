import Product from "../models/Products"

export const createProduct = async (req, res) => {
    const { nombre, descripcion, categoria, codigo, imagen, precio, stock } =  req.body
    const newProduct = new Product({ nombre, descripcion, categoria, codigo, imagen, precio, stock })
    const productSaved = await newProduct.save()
    res.status(201).json(productSaved)
}

export const getProducts = async (req, res) => {
    const products = await Product.find()
    res.json(products)
}

export const getProductById = async (req, res) => {
    const { productId } = req.params
    const product = await Product.findById(productId)
    res.status(201).json(product)
}

export const updateProductById = async (req, res) => {
    const { productId } = req.params
    const updateProduct = await Product.findByIdAndUpdate(productId, req.body, { new: true })
    res.status(200).json(updateProduct)
}

export const deleteProductById = async (req, res) => {
    const { productId } = req.params
    const deleteProduct = await Product.findByIdAndDelete(productId)
    res.status(200).json({mensaje: "El producto fue eliminado correctamente"})
}

export const getProductsCategory = async (req, res) => {
    const { categoria } = req.params
    const products = await Product.find({categoria})
    res.status(200).json({products})
}

// const  ProductosService  = require("../services/products.services")


// class ProductosController {
//     constructor() {
//         this.servicesProduct= new ProductosService()
//     }

//     async guardarProducto(req, res) {
//         try {
//             const producto  = req.body;
//             await this.servicesProduct.guardarProducto(producto)
//             res.json({mensaje: "El producto fue guardado correctamente"});
//         } catch (error) {
//             return res.status(500).send({ error: error.message });
//         }
//     }
// }

// module.exports = ProductosController