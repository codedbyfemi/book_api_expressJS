export const BookDTO = function BookDTO(book) {
    return {
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
    }

}