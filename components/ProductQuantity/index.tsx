import { useCart } from '@/contexts/CartContext'
import { products } from '@/data/products'
import { Product } from '@/types/product'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function ProductQuantity() {
  const { increaseQuantity, decreaseQuantity, getItemQuantity } = useCart()

  const router = useRouter()

  const productId = +(router.query.id as string)

  const [product] = useState<Product | undefined>(() => {
    return products.find(({ id }) => productId === id)
  })

  const quantity = getItemQuantity(product?.id)

  return (
    <div className="flex mb-2 w-36">
      <button
        onClick={() => {
          if (!!productId || productId === 0) {
            if (quantity === 1) {
              decreaseQuantity(productId)
              router.back()
            } else {
              decreaseQuantity(productId)
            }
          }
        }}
        className="select-none flex flex-1 justify-center items-center w-12 h-12 bg-[#f2f4f5] rounded-l text-[#96A3AB] font-bold text-xl"
      >
        -
      </button>

      <span className="select-none flex items-center justify-center flex-1 font-bold leading-[22px] text-[18px] text-[#FB9400] border-y border-[#F2F4F5]">
        {quantity}
      </span>

      <button
        onClick={() => {
          if (product) increaseQuantity(product)
        }}
        className="select-none flex flex-1 justify-center items-center w-12 h-12 bg-[#FB9400] rounded-r text-white font-bold text-xl"
      >
        +
      </button>
    </div>
  )
}
