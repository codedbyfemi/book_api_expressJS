import {Book} from "../models/book.mjs";
import { BookDTO } from "../DTO/book.DTO.mjs";



export const postBooks =  async (req, res) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        res.status(500).json({
            error: err.message
        });
    }
}

export const getBooks = async (req, res) => {
    const books = await Book.find();
    const formattedBooks = books.map(book => BookDTO(book))
    res.status(200).json(formattedBooks);
}

export const getBookById = async (req, res) => {
    const id = req.params.id;
    const book = await Book.findById(id)
    const formattedBooks = BookDTO(book)

    if (!book) {
        res.status(404).json({msg: "Book not found"});
    }
    res.status(200).json(formattedBooks);
}

export const deleteBookById = async (req, res) => {
  const id = req.params.id;
  const book = await Book.findByIdAndDelete(id);
  const formattedBooks = BookDTO(book)

    if (!book) {
      res.status(404).json({
          error: 'Book not found'
      })
  }
  res.status(200).json({msg: "Book deleted successfully", book: formattedBooks});
}