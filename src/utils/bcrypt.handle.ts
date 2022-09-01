import { hash, compare } from "bcryptjs"

const encrypt = async (password: string) => {
    const passwordHash = await hash(password, 10)
    return passwordHash
}

const verified = async (password: string, passwordHash: string) => {
    const verifyPassword = await compare(password, passwordHash)
    return verifyPassword
}

export { encrypt, verified }
