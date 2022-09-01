import "dotenv/config";

export default {
    SECRET: process.env.SECRET,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: process.env.PORT || '8080',
    TIPO_PERSISTENCIA: process.env.TIPO_PERSISTENCIA || 'mongo',
    URL: process.env.URL,
    NAME: process.env.NAME,
    PASSWORD: process.env.PASSWORD,
    NAME_DATABASE: process.env.NAME_DATABASE,
    EMAIL: process.env.EMAIL,
    PASSEMAIL: process.env.PASSEMAIL
}
