import { Book, Borrow } from '../../models/data';
import BookCard from './BookCard'


interface Props {
    books: Book[];
    borrowList: Borrow[];
    handleReturnClick: (bookId: number) => void;
    handleBorrowClick: (bookId: number) => void;

}

const BookGrid = ({ books, borrowList, handleBorrowClick, handleReturnClick}: Props) => (
    <div className="book-grid">
    {books.map(book => (
      <BookCard key={book.bookId} book={book} handleBorrowClick={handleBorrowClick} handleReturnClick={handleReturnClick}
        borrowList={borrowList}/>

    ))}


  </div>
)

export default BookGrid;