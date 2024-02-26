import express from 'express'
import ProductRouter from './routes/productRoutes'
import { connectDB } from './config/db';
import {config} from "dotenv";
import cors from 'cors'
import morgan from 'morgan';

config();
connectDB()


const app = express();
const port = process.env.PORT || 3002;

app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use("/products",ProductRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
