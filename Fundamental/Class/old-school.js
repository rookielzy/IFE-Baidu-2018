var Book = function (id, bookName, price) {

  this.id
  this.bookName = bookName
  this.price = price

  // Private Attribute
  var num = 1

  // Private Methods
  function checkId () {
    console.log('checking id')
  }

  // Privilege Methods
  this.getName = function () {
    return this.bookName
  }

  this.getPrice = function () {
    return this.price
  }

}

Book.prototype.display = function () {
  console.log('Showing this book')
}

var book = new Book(1, 'Time is illmatic', 9.9)

console.log(book)

// Inherit

function SuperClass (id) {
  this.books = ['DAMN', 'illmatic']
  this.id = id
}

SuperClass.prototype.showBooks = function () {
  console.log(this.books)
}

function SubClass (id) {
  SuperClass.call(this, id)
}

SubClass.prototype = new SuperClass()

SubClass.prototype.getFirstBook = function () {
  console.log(this.books[0])
}

var instance1 = new SubClass(1)
var instance2 = new SubClass(2)

instance1.books = ['Eminem', 'Kendrick Lamar']

console.log(instance1, instance2)

instance1.getFirstBook()
