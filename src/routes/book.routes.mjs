import express from 'express';
import {getBooks, postBooks} from "../controllers/book.controller.mjs";

const router = express.Router();

router.post('/', postBooks);

router.get('/', getBooks);

export default router;