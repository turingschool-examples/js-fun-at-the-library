//------------------------- Variables -------------------------//
var title = "Becoming";
var pages = 340;

pages = 340 / 4;

var movie =;
var sequel = `${title} Again`;
var isFavorite = false;
var isShortStory = pages < 25;

//------------------------- Functions -------------------------//
function quickRead() {
  if (title.length < 1000) {
    console.log("I could read that in a day!");
  } else {
    console.log("Ok, maybe I could read that in a day and a half.");
  }
}

function faveBook() {
  if (isFavorite === true) {
    console.log("My favorite book is ${title}!");
  } else {
    console.log("I recently read the ${title} book.");
  }
}

//------------------------- Arrays -------------------------//

var books = ["Romeo & Juliet", "Origin of the Species", "Siddartha", "Wizard of Oz", "Harry Potter"];
books[2];


var belowTwoHundred = [2, 4, 6, 8, 100, 150, 165, 170, 178, 189, 190, 199];
belowTwoHundred[11];

//------------------------- Objects -------------------------//

var dictionary = {name: "Webster's", hasThesaurus: false};
dictionary.pageCount = 720;
