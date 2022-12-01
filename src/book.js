function createTitle(title) {
  return `The ${title}`
}

function buildMainCharacter(name, age, pronouns){
  return {
    name: name,
    age: age,
    pronouns: pronouns 
  }
}

function saveReview(review, array){
  if(array.indexOf(review) === -1){
  array.push(review)
  }
}

function calculatePageCount(title){
  return (title.length * 20)
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}