import { ICart, IBook, IAction } from '../constants/interfaces';

export const defaultCartState: ICart = {
    items: [],
    totalAmount: 0,
    addItem: () => { },
    removeItem: () => { }
};

export const cartReducer = (state: ICart, action: IAction) => {
    if (action.type === 'ADD') {
        const { items = [], totalAmount } = state;
        const books = structuredClone(items);
        let totalCost = 0;
        const itemIndex = books.findIndex((book: IBook) => book.id === action.item.id)
        
        // If item exists then increment quantity and total amount
        // Else add item to cart and increment total amount
        if (itemIndex !== -1) {
            const existingItem = books[itemIndex];
            existingItem.quantity = existingItem.quantity + 1;
            totalCost = totalAmount + existingItem.price;
            books[itemIndex] = existingItem;
        } else {
            const bookToAdd = { ...action.item, quantity: 1 }
            books.push(bookToAdd);
            totalCost = totalAmount + action.item.price;
        }

        return {
            ...state,
            items: books,
            totalAmount: totalCost,
        }
    } if (action.type === 'REMOVE') {
        const { items = [], totalAmount } = state;
        const books = structuredClone(items);
        let totalCost = 0;
        let existingItem;
        const itemIndex = books.findIndex((book: IBook) => book.id === action.id)

        // item doesnt exist return existin state
        if (itemIndex === -1) {
            return state;
        }

        existingItem = books[itemIndex];

        // if quantity is 1 then remove item 
        // else decrement the quantity and total Amount
        if (existingItem.quantity === 1) {
            totalCost = totalAmount - existingItem.price;
            books.splice(itemIndex, 1);
        } else {
            existingItem.quantity = existingItem.quantity - 1;
            totalCost = totalAmount - existingItem.price;
        }

        return {
            ...state,
            items: books,
            totalAmount: totalCost,
        }
    }

    return defaultCartState;
}