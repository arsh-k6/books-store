import {createContext} from 'react';
import { ICart, IBook } from '../constants/interfaces';

const CartContext = createContext<ICart>({
    items: [],
    totalAmount: 0,
    addItem: (item: IBook) => {},
    removeItem: (id: number) => {}
})

export default CartContext;