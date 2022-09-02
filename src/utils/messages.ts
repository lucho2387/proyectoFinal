import { config } from "../config/config";
import { createTransport } from "nodemailer";
import { OrderDto } from "../dtos/orders.dto";
import { UserDto } from "../dtos/users.dto"

const adminEmail = config.EMAIL;
const adminPass = config.PASSEMAIL;

const transporter = createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
        user: adminEmail,
        pass: adminPass,
    },
});

const sendRegisterMail = async (user: UserDto) => {
    const mailOptions = {
        from: "Ecommerce",
        to: adminEmail,
        subject: "Nuevo registro!",
        html: `<h1>Nuevo rsgistro: ${user.email}</h1>
                <p>Nombre: ${user.nombre}</p>
                <p>Apellido: ${user.apellido}</p>
                <p>Direccion: ${user.direccion}</p>
                <p>Telefono: ${user.telefono}</p>
                <p>Email: ${user.email}</p>`,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log(error);
    }
};

const sendOrderMail = async (order: OrderDto) => {
    const mailOptions = {
        from: "Coderhouse Ecommerce",
        to: adminEmail,
        subject: "Nuevo pedido! ID: " + order.ordenId,
        html: `<h1>Nuevo pedido: ${order.email}</h1>
                <p>Estado: ${order.estado}</p>
                <p>Fecha y hora: ${order.fyh}</p>
                `,
    };
    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        console.log(error);
    }
};

export { sendOrderMail, sendRegisterMail };
