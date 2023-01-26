export interface IBook {
    image: string;
    id: number;
    price: number;
    author: string;
    description: string;
    title: string;
}

export type IAction =
    | { type: 'REMOVE', id: number }
    | { type: 'ADD', item: IBook }

export interface ICart {
    items: Item[];
    totalAmount: number;
    addItem(book: IBook): void;
    removeItem(id: Number): void;
}

export interface ICartItem {
    item: Item;
    totalAmount: number;
    onAddItem(book: IBook): void;
    onRemoveItem(id: Number): void;
}

export interface Item {
    image: string;
    id: number;
    price: number;
    author: string;
    description: string;
    title: string;
    quantity: number;
}

export interface IBookCard {
    book: IBook;
    onAddItem(book: IBook): void;
}
