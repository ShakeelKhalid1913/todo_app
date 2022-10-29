import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import todosRoutes from "./routes/todos-routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

//use
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json())
app.use('/todos', todosRoutes);

mongoose.connect(process.env.DB)
    .then(() =>
        app.listen(PORT, () => console.log("Server is running on PORT", PORT))
    ).catch(error =>console.log(error)
    , {useNewUrlParser: true})

mongoose.connection.once('open', () => {
   console.log("MongoDB database connection established successfully")
});

app.get('/', (req, res) => {
   res.send("Hello World");
})