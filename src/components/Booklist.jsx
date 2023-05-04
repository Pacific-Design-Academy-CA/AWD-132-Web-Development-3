import React from 'react';
import { Link } from 'react-router-dom';
import Back from './Back';

 
function Booklist() {
    
    const books = [
        { id: 1, name: 'The Alchemist', description: 'A novel by Brazilian author Paulo Coelho...' },
        { id: 2, name: 'To Kill a Mockingbird', description: 'A novel by Harper Lee set in the Deep South...' },
        { id: 3, name: 'Pride and Prejudice', description: 'A novel by Jane Austen that follows the lives...' }
      ];
    return (
        <div>
        <h2>My Book List</h2>
        {/* <ul>
            {books.map(book => (
            <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.name}</Link>
            </li>
            ))}
        </ul> */}
        <ul>
            {
                books.map(book => (
                    <li key={book.id}><Link to={`/books/${book.id}`}>{book.name}</Link></li>
                ))
            }
        </ul>
        <Back></Back>

        </div>
    );
}
export default Booklist;
