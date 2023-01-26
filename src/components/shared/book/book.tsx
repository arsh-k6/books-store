import classes from './book.module.css';
import { IBookCard } from "../../../constants/interfaces";
import { BsFillCartPlusFill } from "react-icons/bs";

const Book: React.FC<IBookCard> = ({ onAddItem, book }) => {

    return (
        <section key={book.id} className={classes.card}>
            <article className={classes.article}>
                <img src={book.image} />
                <div className={classes.listItems}>
                    <p className={classes.title}>{book.title}</p>
                    <p><span className={classes.bold}>AUTHOR:</span> {book.author}</p>
                    <p><span className={classes.bold}>PRICE:</span> ${book.price}</p>
                    <p><span className={classes.bold}>DESCRIPTION:</span><abbr className={classes.description} title={book.description}>{book.description}</abbr></p>
                </div>
            </article>
            <div className={classes.buttonDiv}>
                <button className={classes.button} onClick={() => onAddItem(book)}>Add to Cart <BsFillCartPlusFill size={15} /></button>
            </div>
        </section>
    )
}
export default Book;