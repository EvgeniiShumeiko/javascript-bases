'use strict';

/**
 * Задача 1
 * С помощью цикла for написать алгоритм для вывода чисел от 0 до 10 включительно, чтобы результат выглядел так:
 * 0 – это ноль
 * 1 – нечетное число
 * 2 – четное число
 * 3 – нечетное число
 * 10 – четное число
 */
let firstTaskHandler = () => {
  for (let i = 0; i < 11; i++) {
      let explanation = "нечетное число";
      if (i === 0) {
        explanation = "это ноль"
      } else if (i % 2 === 0) {
        explanation = "четное число"
      }
      console.log(`${i} - ${explanation}`)
  }
}


/**
 * Задача 2
 *
 */
let secondTaskHandler = () => {
  const post = {
    author: "John", //вывести этот текст
    postId: 23,
    comments: [
      {
        userId: 10,
        userName: "Alex",
        text: "lorem ipsum",
        rating: {
        }
      },
      {
        userId: 5, //вывести это число
        userName: "Jane",
        text: "lorem ipsum 2", //вывести этот текст
        rating: {
        }
      },
    ]
  };

  let comment = post.comments[1]
  console.info("Автор поста", post.author)
  console.info("Комментарий: ", "userId:", comment.userId, 'text:', comment.text )
}

/**
 * Задача 3
 *
 */
let thirdTaskHandler = () => {
  const products = [
    {
      id: 3,
      price: 200,
    },
    {
      id: 4,
      price: 900,
    },
    {
      id: 1,
      price: 1000,
    },
  ];

  let setSale = (price, sale) => price * (100 - sale) / 100;
  let productsWithSale = products.map((product) => {
    let salePrice = setSale(product.price, 15)
    return {...product, price: salePrice}
  })
  console.log(productsWithSale)
}

/**
 * Задача 4
 * Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
 * 1 Получить все товары, у которых есть фотографии, можете использовать метод filter https://mzl.la/2qROQkT
 * 2 Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort
 * https://mzl.la/2Y79hbZ , как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
 */
let fourthTaskHandler = () => {
  const products = [
    {
      id: 3,
      price: 127,
      photos: [
        "1.jpg",
        "2.jpg",
      ]
    },
    {
      id: 5,
      price: 499,
      photos: []
    },
    {
      id: 10,
      price: 26,
      photos: [
        "3.jpg"
      ]
    },
    {
      id: 8,
      price: 78,
    },
  ];

  console.info('Original products', products)


  let productsWithPhoto =
    products.filter((product) => {
       return product.hasOwnProperty('photos') && Array.isArray(product.photos) && product.photos.length > 0
    })

  console.log('Only products with photo', productsWithPhoto)

  let lowCompare = (a,b) => a.price - b.price
  let lowPriceProductsWithPhotoSort = productsWithPhoto.sort(lowCompare)
  let lowPriceProductsSort = products.sort(lowCompare)
  console.log('Products with photo and sort from low to high price', lowPriceProductsWithPhotoSort)
  console.log('Products sort from low to high price', lowPriceProductsSort)


}

/**
 * Задача 5
 * Вывести с помощью цикла for числа от 0 до 9, НЕ используя тело цикла.
 */
let fifthTaskHandler = () => {
  for(let i = 0; i < 10; console.log(i++)) {}
}

/**
 * Задание 6
 *
 */

let sixthTaskHandler = () => {
  /**
   * Рекурсивная функция для вывода символов подряд
   * @param {string} symbol
   * @param {number} count
   * @returns {*}
   */
  function copySymbol(symbol, count) {
    if (symbol.length < count) {
      symbol += copySymbol(symbol, count - 1)
    }
    return symbol;
  }

  /**
   * Функция вывода пирамиды
   * @param {number} maxSize
   */
  function printPyramid(maxSize) {
    for (let i = 1; i <= maxSize; i++) {
      console.log(copySymbol('X', i))
    }
  }

  printPyramid(20)
}


