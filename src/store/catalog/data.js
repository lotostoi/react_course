const desc = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eos assumenda rem repellendus in incidunt repudiandae dolorem tempore aspernatur, voluptatem sit et earum, quia vitae a, quos maxime illum quisquam architecto ducimus sapiente quibusdam quod. Minima quos incidunt eos! Pariatur sed aliquam ipsa ullam maiores.'

export function products() {
  return [
    {
      id: 1,
      title: 'Sumsung 10',
      price: 2000,
      rest: 20,
      img: [
        require("@/assets/img/product_1.png"),
        require("@/assets/img/product_2.png"),
        require("@/assets/img/product_3.png")

      ],
      description: desc,
    },
    {
      id: 2,
      title: 'Apple 10',
      price: 4000,
      rest: 10,
      description: desc,
      img: require("@/assets/img/product_2.png"),
    },
    {
      id: 3,
      title: 'Nokia 10',
      price: 1000,
      rest: 5,
      img: [
        require("@/assets/img/product_2.png"),
        require("@/assets/img/product_5.png"),
        require("@/assets/img/product_8.png")

      ],
      description: desc,
    },
    {
      id: 4,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_4.png")
    },
    {
      id: 5,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_5.png")
    },
    {
      id: 6,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_6.png")
    },
    {
      id: 7,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_7.png")
    },
    {
      id: 8,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_8.png")
    },
    {
      id: 9,
      title: 'Sony 10',
      price: 7000,
      rest: 4,
      description: desc,
      img: require("@/assets/img/product_9.png")
    },
  ]
}