import express from 'express';
import { connectDB } from "./config/database.mjs";
import router from "./routes/book.routes.mjs";

const app = express();

await connectDB();

app.use(express.json());

app.use('/api/books/', router);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

