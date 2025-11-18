
type valueType = string | number | boolean;

const formatValue = (value: valueType) => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    if (typeof value === "boolean") {
        return !value;
    }
}

type lengthType = string | any[];

const getLength = (value: lengthType) => {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length
    }
}

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails(): string {
        return `"Name: ${this.name}, Age: ${this.age}"`
    }
};
const p = new Person("Rafsun", 22);


interface Item {
    title: string;
    rating: number;
}

const filterByRating = (items: Item[]): Item[] => {
    return items.filter(item => item.rating >= 4);
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.2 },
    { title: 'Book C', rating: 5.0 },
];

interface User {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const bookDetails = (book: Book) => {
    const need = book.isAvailable ? "Yes" : "No";
    console.log(`Title: ${book.publishedYear}, Author: ${book.author}, Published: ${book.publishedYear}, Avaiable: ${need}`);
}

type Value = string | number;

const uniqueValue = (arr1: Value[], arr2: Value[]) => {

    const result: Value[] = [];

    const notExist = (value: Value) => {
        if (!result.includes(value)) {
            result.push(value)
        }
    }
    [...arr1, ...arr2].forEach(notExist);

    return result;
}

interface Product {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const findTotalPrice = (products: Product[]) => {
    if (products.length === 0) {
        return p;
    }
    return products.reduce((total, product) => {
        let totalItem = product.price * product.quantity;
        if (product.discount) {
            totalItem -= totalItem * (product.discount / 100)
        }
        return total + totalItem;
    }, 0)
}