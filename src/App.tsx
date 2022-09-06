import { useState } from 'react'
import './App.scss'
import { Book, Borrow} from './models/data';
import jsonData from './data/json.json'

function App() {
  const [books, setBooks] = useState<Book[]>(jsonData.books);
  const [borrowList, setBorrowList] = useState<Borrow[]>([]);

  const handleBorrowClick = (bookId: number) => {
    let borrow: Borrow = {
      borrowId: 1, // TODO fixa detta sen
      bookId: bookId
    }
    let newBorrowList = [...borrowList, borrow];
    setBorrowList(newBorrowList);
    // tips: immer.js
  }

  const handleReturn = (bookId: number) => {
    let newBorrowList = borrowList.filter(borrow => borrow.bookId !== bookId);
    setBorrowList(newBorrowList);
  }

  return (
    <div className="App">
      <div id="app">
	<header>
		Bibblan
	</header>
    <main>
      <h1> Våra böcker </h1>
      <div className="book-grid">
        {books.map(book => (
            <div className="card" key={book.bookId}>
              <h3> {book.title} </h3>
              <img src={book.imageUrl} alt="bild" />
              <p> {book.author} </p>
              {borrowList.find(borrow => borrow.bookId === book.bookId)
              ? <button className='return' onClick={() => handleReturn(book.bookId)}> Återlämna </button> 
              : <button onClick={() => handleBorrowClick(book.bookId)}> Låna </button>}
            </div>

        ))}


      </div>
    </main>
    <footer>
      Kontakta oss
    </footer>
</div>
    </div>
  )
}

export default App
