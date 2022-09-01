import mongoose from "mongoose";
require('dotenv').config()

const URL = process.env.URL

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("BD conectada"))
    .catch(error => console.log(error))