import { sign, verify } from "jsonwebtoken";
import { config } from "../config/config";
const SECRET = config.SECRET;

const generateToken = (id: string) => {
  const jwt = sign({ id }, SECRET, {
    expiresIn: "2h",
  });
  return jwt;
};

const verifyToken = (jwt: string) => {
  const isOk = verify(jwt, SECRET);
  return isOk;
};

export { generateToken, verifyToken };
