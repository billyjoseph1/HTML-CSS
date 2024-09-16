var library = [
    { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
    { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
  ];
  
  library.forEach(function(book) {
    console.log(book.title, "by", book.author, "-", book.readingStatus ? "Reading" : "Not reading");
  });
  