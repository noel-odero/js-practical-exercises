function sortProducts(arr){
    return arr.sort((a, b) => a.price - b.price)
}

const products = [
    {
      name: 'Laptop',
      price: 1000,
    },
    {
      name: 'Mobile',
      price: 500,
    },
    {
      name: 'Headphone',
      price: 100,
    },
  ];

  console.log(sortProducts(products))