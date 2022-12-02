function createLibrary(name){
  return {
    name: name,
    shelves: {fantasy: [], fiction: [], nonFiction: []}
  }
}

module.exports = {
  createLibrary,
  // addBook,
  // checkoutBook
};