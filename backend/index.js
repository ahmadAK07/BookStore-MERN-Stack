import express from "express";
import { PORT, mongoDBURL } from "./config.js"; // Corrected import path
import mongoose from "mongoose";
// import { Book } from "./models/bookModal.js";
import router from "./routes/booksRoute.js";
import cors from 'cors';
const app = express();

app.use(express.json());


app.use(cors());

// app.use(cors({
//     origin: "http://localhost:3000",
//     methods: ["PUT", "DELETE", "GET", "POST"],
//     allowedHeaders: ["content-Type"]
// }))

app.get('/', (req, res) => {
    res.send('hello');
});

app.use('/books', router);

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log('app is listening on port: ' + PORT);
        });
    })
    .catch((err) => {
        console.log(err);
    })