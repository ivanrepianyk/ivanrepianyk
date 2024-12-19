const Book = require('./Book'); 

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  printInfo() {
    super.printInfo(); 
    console.log(`Формат файлу: ${this.fileFormat}`);
  }
}

const eBook1 = new EBook("Мистецтво війни", "Сунь-цзи", 2000, "PDF");

eBook1.printInfo();
module.exports = EBook;

