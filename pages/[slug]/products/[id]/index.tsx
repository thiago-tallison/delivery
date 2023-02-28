import Button from '@/components/Button'
import ProductQuantity from '@/components/ProductQuantity'
import { withRouter } from 'next/router'
import { useCart } from '@/contexts/CartContext'
import { CartProduct } from '@/types/product'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'

function ProductItem() {
  const router = useRouter()
  const {
    cart,
    clearCart,
    decreaseQuantity,
    increaseQuantity,
    removeFromCart
  } = useCart()

  const handleAddToCart = () => {
    router.back()
  }

  return (
    <main>
      <header className="bg-[#FB9400] h-96 relative">
        <div className="flex items-center justify-between p-6 text-white">
          <button
            onClick={router.back}
            className="w-12 h-12 rounded brightness-95 flex items-center justify-center bg-[#FB9400]"
            type="button"
          >
            <FaArrowLeft size={16} />
          </button>
          <h3 className="font-semibold text-2xl leading-7">Produto</h3>
          <button className="w-12 h-12 rounded brightness-95 flex items-center justify-center bg-[#FB9400]">
            <FiHeart size={16} />
          </button>
        </div>

        <div className="flex w-[60%] max-w-[320px] mx-auto absolute -bottom-8 left-1/2 -translate-x-1/2">
          <Image
            className="h-auto w-full"
            src="/images/burger.png"
            width={320}
            height={280}
            alt="Product image"
          />
        </div>
      </header>

      <main>
        <section className="mx-6 mb-12">
          <p className="mt-20 font-medium leading-[19px] text-[#1b1b1b] mb-1.5">
            Tradicional
          </p>

          <h1 className="font-semibold text-[#1b1b1b] text-4xl leading-[48px]">
            Golden Burger
          </h1>

          <div className="w-[366px] flex mx-auto my-6">
            <div className="flex-[75%] h-[1.5px] bg-[#FB9400]"></div>
            <div className="flex-[25%] h-[1.5px] bg-[#e2e2e2]"></div>
          </div>

          <p className="font-normal text-[#1B1B1B80] leading-6 mb-8">
            2 Blends de carne de 150g, Queijo Cheddar, Bacon Caramelizado,
            Salada, Molho da casa, Pão brioche artesanal,
          </p>

          <p className="font-medium leading-[19px] text-[#1b1b1b] mb-6">
            Quantidade
          </p>

          <div className="flex justify-between mb-12">
            <ProductQuantity />

            <p className="font-semibold leading-[48px] text-4xl text-[#FB9400]">
              R$ 25,00
            </p>
          </div>

          <Button onClick={handleAddToCart}>Adicionar ao carrinho</Button>
        </section>
      </main>
    </main>
  )
}

export default withRouter(ProductItem)
