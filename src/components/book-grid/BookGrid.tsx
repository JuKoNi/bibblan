import { Book } from '../../models/data';
import BookCard from './BookCard';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'


// interface Props {
//     // books: Book[];
//     borrowList: Borrow[];
//     handleReturnClick: (bookId: number) => void;
//     handleBorrowClick: (bookId: number) => void;
// }


const BookGrid = ({ borrowList, handleBorrowClick, handleReturnClick}: Props) =>
 {  const books = useSelector((state: RootState) => state.books)

    return (
      <div className="book-grid">
      {books.map(book => (
        <BookCard key={book.bookId} book={book}/>
  
      ))}
    



  </div>
 )}

export default BookGrid;