import Users from "../models/Users"
import Role from "../models/Role"

export const createUser = async (req, res) => {
    const { nombre, email, password, roles } = req.body

    const newUser = new Users({
        nombre,
        email,
        password: await Users.encriptarPassword(password),
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

    res.status(200).json(savedUser)
}

export const getUsers = async (req, res) => {
    const users = await Users.find()
    res.json(users)
}

export const getUserById = async (req, res) => {
    const { userId } = req.params
    const user = await Users.findById(userId)
    res.status(201).json(user)
}

export const updateUserById = async (req, res) => {
    const { userId } = req.params
    const updateUser = await Users.findByIdAndUpdate(userId, req.body, { new: true })
    res.status(200).json(updateUser)
}

export const deleteUserById = async (req, res) => {
    const { userId } = req.params
    const deleteUser = await Users.findByIdAndDelete(userId)
    if(!deleteUser) return res.json({mensaje: "El usuario no se encontro"})
    res.status(200).json({mensaje: "El usuario fue eliminado correctamente"})
}