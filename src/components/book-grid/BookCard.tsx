import React from 'react';
import { Book } from '../../models/data';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { actions } from '../../features/borrowListReducer'

interface Props {
    book: Book;
    // borrowList: Borrow[];
    // handleReturnClick: (bookId: number) => void;
    // handleBorrowClick: (bookId: number) => void;
}



const BookCard = ({ book }: Props) => {
    const dispatch = useDispatch()

    const borrowList = useSelector((state: RootState) => state.borrowList);

    const isBorrowed: boolean = borrowList.find(borrow => borrow.bookId === book.bookId) !== undefined;

    type BookIdFunc = (bookId: number) => void
    const handleReturnClick: BookIdFunc = bookId => {
        dispatch(actions.doReturn(bookId))
    };
    const handleBorrowClick: BookIdFunc = bookId => {
        
    };
    return (
        <section className="card" key={book.bookId}>
          <h3> {book.title} </h3>
          <img src={book.imageUrl} alt="bild" />
          <p> {book.author} </p>
          <div className='separator'></div>
          {isBorrowed
          ? <button className='return' onClick={() => handleReturnClick(book.bookId)}> Återlämna </button> 
          : <button onClick={() => handleBorrowClick(book.bookId)}> Låna </button>}
        </section>
    )

}

export default BookCard;