const Book = require('./Book');
const EBook = require('./EBook');

// Створення екземплярів класів
const book1 = new Book("Майстер і Маргарита", "Михайло Булгаков", 1966);
const book2 = new Book("1984", "Джордж Орвелл", 1949);
const eBook1 = new EBook("Мистецтво війни", "Сунь-цзи", 2000, "PDF");

// Виклик методів
book1.printInfo();
book2.printInfo();
eBook1.printInfo();
