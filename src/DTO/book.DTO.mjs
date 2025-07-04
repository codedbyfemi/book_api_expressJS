export const BookDTO = function BookDTO(book) {
    return {
        id: book.id,
        title: book.title,
        author: book.author,
        publishedYear: book.publishedYear,
        genre: book.genre,
    }

}