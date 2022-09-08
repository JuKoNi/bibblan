import { createAction, createReducer } from '@reduxjs/toolkit';

import { Book } from '../models/data'
import jsonData from '../data/json.json'
// Actions
// finns inga actions

// Reducers
const initialState: Book[] = jsonData.books;

const reducer = createReducer(initialState, {
    // Inga actions = inga reducer-funktioner här

})

export { reducer }