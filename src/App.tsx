import { useState } from 'react'
import './App.scss'
import { Book } from './models/data';
import jsonData from './data/json.json'

function App() {
  const [books, setBooks] = useState<Book[]>(jsonData.books)

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
          <button className=''> Låna </button>
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
