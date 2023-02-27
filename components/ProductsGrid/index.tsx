import { ProductGridItem } from '../ProductGridItem'

export const ProductsGrid = () => {
  const products = [...Array(5)].map((_, i) => ({
    id: i,
    name: 'Golden Burger',
    category: {
      id: i * 2,
      name: 'Tradicional'
    },
    img: '/images/burger.png',
    price: 'R$ 25,00'
  }))

  return (
    <div className="grid grid-cols-1 gap-6">
      {products.map(product => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  )
}
