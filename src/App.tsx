import { useState } from 'react'
import './App.scss'
import { Book, Borrow} from './models/data';
import jsonData from './data/json.json'
import BookGrid from './components/book-grid/BookGrid';


function App() {
  // har flyttat books till redux
  // const [books, setBooks] = useState<Book[]>(jsonData.books);
 // const [borrowList, setBorrowList] = useState<Borrow[]>([]);

  // const handleBorrowClick = (bookId: number) => {
  //   let borrow: Borrow = {
  //     borrowId: 1, // TODO fixa detta sen
  //     bookId: bookId
  //   }
  //   let newBorrowList = [...borrowList, borrow];
  //   setBorrowList(newBorrowList);
  //   // tips: immer.js
  // }

  // const handleReturnClick = (bookId: number) => {
  //   let newBorrowList = borrowList.filter(borrow => borrow.bookId !== bookId);
  //   setBorrowList(newBorrowList);
  // }

  return (
    <div className="App">
      <div id="app">
	<header>
		Bibblan
	</header>
    <main>
      <h1> Våra böcker </h1>
      <BookGrid />
    </main>
    <footer>
      Kontakta oss
    </footer>
</div>
    </div>
  )
}

export default App
