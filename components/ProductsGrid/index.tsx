import { products } from '@/data/products'
import { ProductGridItem } from '../ProductGridItem'

export const ProductsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {products.map(product => (
        <ProductGridItem key={product.id} product={product} />
      ))}
    </div>
  )
}
