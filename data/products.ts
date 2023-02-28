export const products = [...Array(5)].map((_, i) => ({
  id: i,
  name: 'Golden Burger',
  category: {
    id: i * 2,
    name: 'Tradicional'
  },
  img: '/images/burger.png',
  price: 'R$ 25,00'
}))
