import { Book } from "./book";
import { User } from "./user";

export class Order {
    userId: number = 0;
    bookId: number = 0;
    price: number = 0;
    quantity: number = 0;
    address: String = "";
    cancel: Boolean = false;
}