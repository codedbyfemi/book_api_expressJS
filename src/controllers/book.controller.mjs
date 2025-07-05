import { Book } from "../models/book.mjs";
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

    if (!book) {
        res.status(404).json({msg: "Book not found"});
    }
    const formattedBooks = BookDTO(book)
    res.status(200).json(formattedBooks);
}

export const getBooksByAuthor = async (req, res) => {
    const author = req.params.author;
    const book = await Book.find({ author: author });
    if (!book) {
        res.status(404).json({msg: `Book not found with author: ${author}`});
    }
    const formattedBooks = book.map(book => BookDTO(book))
    res.status(200).json(formattedBooks);
}

export const getBookByTitle = async (req, res) => {
    const title = req.params.title;
    const book = await Book.find({ title: title});
    if (!book) {
        res.status(404).json({msg: `Book not found with title: ${title}`});
    }
    const formattedBooks = book.map(book => BookDTO(book))
    res.status(200).json(formattedBooks);
}

export const getBookByGenre = async (req, res) => {
    const genre = req.params.genre;
    const book = await Book.find({ genre: genre});
    if (!book) {
        res.status(404).json({msg: `Book not found with genre: ${genre}`});
    }
    const formattedBooks = book.map(book => BookDTO(book))
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