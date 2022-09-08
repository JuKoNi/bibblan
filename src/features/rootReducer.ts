/* Visualisera datan som ett stort objekt */
/* {
    books, --> books.ts
    borrowList, --> borrowList.ts
} */

import { combineReducers } from "redux";
import { reducer as booksReducer } from './booksReducer';
//import { reducer as borrowListReducer } from './borrowList'

const rootReducer = combineReducers({
   books: booksReducer,
   // borrowListReducer
})

export { rootReducer }