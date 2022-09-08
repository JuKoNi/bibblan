import { createAction, createReducer } from '@reduxjs/toolkit';

import { Borrow } from '../models/data'
import jsonData from '../data/json.json'



// Actions
const doBorrow = createAction<number>('Borrow a book');
const doReturn = createAction<number>('Return a book')

const actions = { doBorrow, doReturn }
// Reducers
const initialState: Borrow[] = jsonData.borrows;

const reducer = createReducer(initialState, {
    [doBorrow.toString()]: (state, action:any) => {
        let borrow: Borrow = { borrowId: 1, bookId: 
            action.payload };

        let newBorrowList = [...state, borrow];

        return newBorrowList;
    },
    
    [doReturn.toString()]: (state, action) => state.filter(b =>
        b.bookId !== action.payload)
})


export { actions, reducer }