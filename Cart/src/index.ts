import express from 'express';
import cors from 'cors';
import {config} from 'dotenv'
import morgan from 'morgan';
import CartRouter from './routes/cartRoutes'
import { connectDB } from './config/db';

config();
connectDB();
const app = express();

const port = process.env.PORT || 3003;


app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use("/cart", CartRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
