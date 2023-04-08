// function bookTitleInAlphaOrder(books) {
//     const bookTitles = books.map(book = book.title);
//     bookTitles.sort();

//     function logTitles() {
//         console.log('Books titles in Alphabetical order');
//         console.log(bookTitles.join('\n'));
//     }
//     return logTitles;
// }

// const books = [
//     {title : 'xyz', author : 'abc', year : 1964 },
//     {title : 'asd', author : 'lkj', year : 1938},
//     {title : 'mnb', author : 'dfg', year : 1953}
// ];

// const logTitlesFn = bookTitleInAlphaOrder(books);
// logTitlesFn();


function logBookTitlesInAlphabeticalOrder(books) {
    const bookTitles = books.map(book => book.title);
    bookTitles.sort();
  
    function logTitles() {
      console.log("Book titles in alphabetical order:");
      console.log(bookTitles.join("\n"));
    }
  
    return logTitles;
  }
  
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  const logTitlesFn = logBookTitlesInAlphabeticalOrder(books);
  logTitlesFn(); // Logs the book titles in alphabetical order to the console
  