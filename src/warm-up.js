var name, program, project;

name = 'SUE WOLF';
project = "JS Fun At The Library";
program = "FE 2005";

// Read the instructions for each of the warm up exercises carefully. This may
// seem repititious or pedandtic at first, however it's very important that you
// become comfortable with these fundamental concepts. Do not move on to
// iteration 1 until you are confident that you've completed all of iteration 0.


//------------------------- Variables -------------------------//


// Initialize two new variables, "title", and "pages", and assign values to them with
// a book's title and page count.

// var title = "Harry Potter";
// var ...

var title = 'Book';
var pages = 100;

// Reassign (not initialize) your "page" variable from above. An editor came around and
// condensed the book, use a built in math operator to make the page count a quarter
// of what it currently is 

pages = pages/4;


// Initialize a new variable "movie", but leave it undefined

var movie;

// Create a variable named "sequel", and assign it to a be a sequel of your
// book (made up or not!). Your sequel must make use of your "title" variable from above

function makeSequel(title) { 
  var sequel = `Another ${title}`;
  //or...
  sequel = 'Another ' + title;

      console.log(
        "sequel title=", sequel, 
        "typeof:", typeof(sequel)
      );
}
makeSequel(title);


// Initialize a new variable "isFavorite", and assign it to a boolean value indicating
// if the book you chose is your favorite book or not

var isFavorite = false;


// Create a new variable named "isShortStory", and use a comparison operator to
// assign a boolean value to this variable. If "pageCount" is less than 25, the
// variable should be true, otherwise it should be false. You MUST use a
// comparison operator.

var isShortStory;
isShortStory = true === pages < 25 ? true:false; 


//------------------------- Conditionals -------------------------//


// Express the following in code: If the variable [pages] is less than 1000 log
// the statement 'I could read that in a day!', otherwise, log the statement 
// 'Ok, maybe I could read that in a day and a half'

pages < 1000 ? "I could read that in a day!" : "Ok, maybe I could read that in a day and a half";

pages = 1000;
console.log(pages < 1000 ? "I could read that in a day!" : "Ok, maybe I could read that in a day and a half");

// Express the following in code: If the variable "isFavorite" is true,
// log the statement 'My favorite book is [title]!'. Otherwise, log the
// statement 'I recently read the [title] book'. In either case, the value stored in
// the "title" variable should be included in the logged statement.

isFavorite ? title + " is the best book ever!" : "I recently read the book, " + title + "!";

isFavorite = true;

console.log(isFavorite ? title + " is the best book ever!" : "I recently read the book, " + title + "!");

//------------------------- Arrays -------------------------//


// Create a new variable "books" and assign it to an Array of 5 different
// book titles, represented by their names as Strings.

var books = [
  "Book1",
  "Book2",  
  "Book3",  
  "Book4",  
  "Book5",]


// Write the code to access the 3rd element of the Array, using bracket
// notation.

books[2];

// Create a new variable "belowTwoHundred" and assign it to an Array of 12
// different numbers below two hundred.

var belowTwoHundred = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];

// Write the code to access the number cllosest to two hundred, using bracket notation.

belowTwoHundred[belowTwoHundred['length'] -1];

  console.log("A",  belowTwoHundred['length']);
  console.log("B", belowTwoHundred['length'] -1);
  console.log("C", belowTwoHundred[belowTwoHundred['length'] -1]);

belowTwoHundred[11];


//belowTwoHundredB.length;
//------------------------- Objects -------------------------//

// Create a new variable "dictionary" and assign to it an object literal with two
// keys: name, and hasThesaurus. The value for name should the string 'Webster's', and
// the value for hasThesaurus should be false

var dictionary = {
  name: "Webster's",
  hasThesaurus: false,
}
dictionary;

// Write the code to add the key of pageCount, with the value of 720. Use dot
// notation to do this. DO NOT modify your code from above.

dictionary.pageCount = 720;

dictionary;