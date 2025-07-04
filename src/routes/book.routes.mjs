import express from 'express';
import {deleteBookById, getBookById, getBooks, postBooks} from "../controllers/book.controller.mjs";

const router = express.Router();

router.post('/', postBooks);

router.get('/', getBooks);

router.get('/:id', getBookById);

router.delete('/:id', deleteBookById);

export default router;