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

function saveReview(newReview, array){
    var reviews = array
    if(!reviews.includes(newReview)){
      reviews.push(newReview)
    }
  // console.log(reviews)
  // console.log(reviews.length)
}

function calculatePageCount(){

}

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  // writeBook,
  // editBook
}