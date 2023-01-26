import { useContext } from "react";
import classes from './books.module.css';
import Book from "../../shared/book/book";
import { IBook } from "../../../constants/interfaces";
import { books } from "../../../constants/constants";
import CartContext from "../../../store/cartContext";

const Books = () => {
    const { addItem } = useContext(CartContext);

    return (
        <div className={classes.booksContainer}>
            <div className={classes.innerContainer}>
                {(books || []).map((book: IBook) =>
                    <Book key={book.id}
                        onAddItem={addItem}
                        book={book} />)}
            </div>
        </div>
    )
}
export default Books;