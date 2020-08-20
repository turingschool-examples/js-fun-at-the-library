function createTitle(title) {
  return `The ${title}`;
};

function buildMainCharacter() {
  var ghoulCharacter = {
    name: "Vassya",
    age: 16,
    pronouns: "she/her"
  };
  return ghoulCharacter;
};

module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  // saveReview: saveReview,
  // calculatePageCount: calculatePageCount,
  // writeBook: writeBook,
  // editBook: editBook
}
