import { useParams } from "react-router-dom";
import Back from "./Back";

export default function Book() {
    const { id } = useParams();
    const books = [
        { id: 1, name: 'The Alchemist', description: 'A novel by Brazilian author Paulo Coelho that tells the story of Santiago, an Andalusian shepherd boy...' },
        { id: 2, name: 'To Kill a Mockingbird', description: 'A novel by Harper Lee set in the Deep South and revolving around the trial of a black man...' },
        { id: 3, name: 'Pride and Prejudice', description: 'A novel by Jane Austen that follows the lives of the Bennet family in rural England...' }
      ];
    const book = books.find(book => book.id === Number(id));
    return (
        <div>
            <h1>Book : {id}</h1>
            <h2>{book.name}</h2>
            <p>{book.description}</p>
            <Back></Back>
        </div>
    );
  }
  