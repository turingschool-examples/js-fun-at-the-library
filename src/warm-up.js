


//------------------------- Variables -------------------------//



var title = "Fire From Heaven";
var pages = 400;

pages = pages / 4;

var movie = ;

var sequel = "The Persian Boy";

var isFavorite = true;

var isShortStory = pageCount < 25;


//------------------------- Conditionals -------------------------//

if (title.length < 1000) {
    console.log('I could read that in a day!');
  } else {
    console.log("Ok, maybe I could read thant in a day and a half");
};

if (isFavorite === true) {
    console.log(`My favorite book is ${title}`);
  } else {
    console.log(`I recently read the ${title} book`);
};



//------------------------- Arrays -------------------------//



var books = ["The Lion the Witch and the Wardrobe",
    "Prince Caspian",
    "Voyage of the Dawn Treader",
    "The Horse and His Boy",
    "The Silver Chair",
    ];


console.log(books[2]);


var belowTwoHundred = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120];


console.log(belowTwoHundred[11]);

//------------------------- Objects -------------------------//


var dictionary = {
  name: "Webster's",
  hasThesaurus: false
}

dictionary.pageCount = 720;
