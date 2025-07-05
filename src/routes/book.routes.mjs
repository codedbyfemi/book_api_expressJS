import express from 'express';
import {
    deleteBookById, getBookByGenre,
    getBookById,
    getBookByTitle,
    getBooks,
    getBooksByAuthor,
    postBooks
} from "../controllers/book.controller.mjs";

const router = express.Router();

router.post('/', postBooks);

router.get('/', getBooks);

router.get('/:id', getBookById);

router.get('/author/:author', getBooksByAuthor);

router.get('/title/:title', getBookByTitle);

router.get('/genre/:genre', getBookByGenre);

router.delete('/:id', deleteBookById);

export default router;