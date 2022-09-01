import User from "../models/Users";
import jwt from 'jsonwebtoken'
import config from "../config/config";
import Role from "../models/Role";

export const registro = async (req, res) => {
    const { nombre, email, password, roles } = req.body

    // const userFound = User.find({email})
    
    const newUser = new User({
        nombre,
        email,
        password: await User.encriptarPassword(password),
        roles
    })

    if(roles) {
        const foundRoles = await Role.find({nombre: {$in: roles}})
        newUser.roles = foundRoles.map(role => role._id)
    }else {
        const role = await Role.findOne({nombre: "user"})
        newUser.roles = [role._id]
    }

    const savedUser = await newUser.save()
    // console.log(savedUser);

    const token = jwt.sign({id: savedUser._id}, config.SECRET,{
        expiresIn: 86400 //24 Horas
    })

    res.status(200).json({token})
}
export const login = async (req, res) => {

    const userFound = await User.findOne({email: req.body.email}).populate('roles')

    if(!userFound) return res.status(401).json({mensaje: "El usuario no se encontro"})

    const userPassword = await User.compararPassword(req.body.password, userFound.password)

    if(!userPassword) return res.status(401).json({token: null, mensaje: "La contraseña ingresada es incorrecta"})

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 86400 //24 Horas
    })

    // console.log(userFound); 
    res.json({token})
}