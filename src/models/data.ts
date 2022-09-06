export interface Book {
    title: string;
    author: string;
    imageUrl: string;
    bookId: number
}

// Jämfört med mongoDB/NeDB: Book motsvarar ett dokument i en collection 

// TODO - interface för utlåning och interface för användare

export interface User {
    name: string;
    borrowId: number;
    email: string;

}

export interface Borrow {
    borrowId: number;
    bookId: number
}