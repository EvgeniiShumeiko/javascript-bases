'use strict';

/**
 * Задача 1.1
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
 * наследования -> типы на es5 и es6), конструктор Product, который принимает параметры name и price, сохраните
 * их как свойства объекта. Также объекты типа Product должны иметь метод make25PercentDiscount, который будет
 * уменьшать цену в объекте на 25%. Имейте в виду, что метод make25PercentDiscount не должен быть внутри
 * функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).
 */

// es5
let firstTaskHandlerEs5 = () => {
  function Product(name, price) {
    this.name = name
    this.price = price
  }

  Product.prototype.make25PercentDiscount = function () {
    this.price *= (1 - 0.25);
  }

  let product = new Product('Газета', 100);
  product.make25PercentDiscount()
}

//es6
let firstTaskHandlerEs6 = () => {
  class Product {
    constructor (name, price) {
      this.name = name;
      this.price = price;
    }

    make25PercentDiscount() {
      this.price *= (1 - 0.25);
    }
  }

  let product = new Product('Газета', 100);
  product.make25PercentDiscount()

}

/**
 * Задача 1.2
 * Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
 * наследования -> механика наследования),
 * а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
 * типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
 * б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
 * помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
 * свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
 * Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
 * highlighted значение true.
 */

//es5
let secondTaskHandlerEs5 = () => {
  function Post(author, text, date) {
    this.author = author
    this.text = text
    this.date = date
  }

  Post.prototype.edit = function(text) {
    this.text = text
  }

  let post = new Post("js", "Hello World!", new Date())
  post.edit("this is post")


  function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false
  }

  AttachedPost.prototype = Object.create(Post.prototype)
  AttachedPost.prototype.constructor = AttachedPost

  AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
  }


  let attachedPost = new AttachedPost("js", "Hello World!", new Date())
  attachedPost.edit("this is attached post")
  attachedPost.makeTextHighlighted()
}

//es6
let secondTaskHandlerEs6 = () => {
  class Post  {
    constructor (author, text, date) {
      this.author = author
      this.text = text
      this.date = date
    }

    edit(text) {
      this.text = text
    }
  }

  let post = new Post("js", "Hello World!", new Date())
  post.edit("this is post")

  class AttachedPost extends Post {
    constructor (author, text, date) {
      super(author, text, date);
      this.highlighted = false;
    }

    makeTextHighlighted() {
      this.highlighted = true;
    }
  }
  let attachedPost = new AttachedPost("js", "Hello World!", new Date())
  attachedPost.edit("this is attached post")
  attachedPost.makeTextHighlighted()
}



