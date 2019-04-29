const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/googlebooks"
);

const bookSeed = [
  {
    title: "Orange Marmalade",
    author: " Lewis Carroll",
    description: "Alice's Adventures in Wonderland",
    image: "https://books.google.com/books?id=Y7sOAAAAIAAJ&printsec=frontcover",
    link: "https://books.google.com/books?id=Y7sOAAAAIAAJ"
  },
  {
    title: "Biophilia",
    author: "Edward o. Willson",
    description: "At bernhardshop the sun passed behind a smell cloudand the woodland darkened.",
    image: "https://books.google.com/books?id=CrDqGKwMFAkC&printsec=frontcover",
    link: "https://books.google.com/books?id=CrDqGKwMFAkC&dq=books&source=gbs_navlinks_s"
  },
  {
    title: "A Theory of Cognitive Dissonance",
    author: "Leon Festinger",
    description: "There is same kind of consistency among one person's",
    image: "https://books.google.com/books?id=voeQ-8CASacC&printsec=frontcover",
    link: "https://books.google.com/books?isbn=0804709114"
    
    
  },
  {
    title: "The Reindeer People: Living with Animals and Spirits in Siberia",
    author: "Piers Vitebsky",
    description: "An anthropologist describes life among the Eveny people of Siberia, detailing their nomadic way ",
    image: "https://books.google.com/books?id=CqevpWQT3RAC&printsec=frontcover",
    link: "https://books.google.com/books?isbn=0618773576"
  },
  {
    title: "Black Reconstruction in America 1860-1880",
    author: "David Levering",
    description: "This book grew from a one-semester course offered for many years to a mixed audience of graduate and undergraduate students",
    image: "https://books.google.com/books?id=Nt5mglDCNHEC&printsec=frontcover",
    link:  "https://books.google.com/books?isbn=0684856573"
    
  },
  {
    title: "The Martian: A Novel",
    author: "Neil Gaiman",
    description: "Nominated as one of America’s best-loved novels by PBS’s The Great American Read Six days ago, astronaut Mark Watney became one of the first people to walk on Mars.",
    image: "Andy Weir",
    link: "https://books.google.com/books?isbn=0804139032",
  },
  {
    title: "Between the World and Me",
    author: "Richard Wright",
    description: "Hailed by Toni Morrison as “required reading,” a bold and personal literary exploration of America’s racial history by “the single best writer on the subject of race in the United ",
    image: "https://books.google.com/books?id=TV05BgAAQBAJ&printsec=frontcover",
    likn: "https://books.google.com/books?isbn=0679645985"
  },
  {
    title: "The Namesake",
    author: "JHUMPA LAHIRI",
    description:"An incisive portrait of the immigrant experience follows the Ganguli family from their traditional life in India through their arrival",
    image: "https://books.google.com/books?id=Nx-vY7ac1OcC&printsec=frontcover",
    link: "https://books.google.com/books?isbn=0618485228"
  },
  {
    title: "Hiroshima",
    author: "John Hersey",
    description: "he classic tale of the day the first atom bomb was dropped offers a haunting evocation of the memories of survivors and an appeal to the conscience of humanity",
    image: "https://books.google.com/books?id=1z89O0uIlLwC&printsec=frontcover",
    link: "https://books.google.com/books?isbn=0679721037"
  },
  {
    title: "Second Treatise of Government",
    author: "Joseph carrig",
    description: "It having been shown in the foregoin discourse",
    image: "https://books.google.com/books?id=oOjoGkmMWUMC&printsec=frontcover",
    link: "https://books.google.com/books?isbn=0760760950"
  },
  
];

db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
