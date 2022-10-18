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

//const DB = "mongodb+srv://shakeel:shakeel1913@cluster0.o1kyzlh.mongodb.net/todos-database?retryWrites=true&w=majority";

mongoose.connect(process.env.DB)
    .then(() =>
        console.log("Server is running on PORT", PORT)
    ).catch(error =>
        console.log(error)
    , {useNewUrlParser: true})

mongoose.connection.once('open', () => {
   console.log("MongoDB database connection established successfully")
});
app.listen(PORT);