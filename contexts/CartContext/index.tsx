import { useLocalStorage } from '@/hooks/useLocalStorage'
import { CartProduct, Product } from '@/types/product'
import { createContext, useContext, useState } from 'react'

const CART_KEY = '@delivery/cart'

type CartContextData = {
  cart: CartProduct[]
  openCart(): void
  closeCart(): void
  getItemQuantity(id: number | undefined): number
  getItem(productId: number): CartProduct | undefined
  removeFromCart(productId: number): void
  increaseQuantity(product: Product): void
  decreaseQuantity(productId: number): void
  clearCart(): void
  cartQuantity: number
}

const CartContext = createContext<CartContextData>({} as CartContextData)

type CartProviderProps = {
  children: JSX.Element
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useLocalStorage<CartProduct[]>(CART_KEY, [])
  const [isOpen, setIsOpen] = useState(false)

  const cartQuantity = products.reduce(
    (total, item) => item.quantity + total,
    0
  )

  const openCart = () => setIsOpen(true)

  const closeCart = () => setIsOpen(false)

  const getItemQuantity = (id: number | undefined) => {
    if (id === undefined) return 0
    return products.find(item => item.id === id)?.quantity || 0
  }

  const removeFromCart = (productId: number) => {
    setProducts(currentItems =>
      [...currentItems].filter(({ id }) => id !== productId)
    )
  }

  const increaseQuantity = (product: Product) => {
    const index = products.findIndex(({ id }) => id === product.id)
    console.log('increaseQuantity()', product, index)

    setProducts(currentItems => {
      if (index > -1) {
        const newItems = [...currentItems]
        const itemToChange = { ...newItems[index] }
        itemToChange.quantity = itemToChange.quantity + 1

        newItems[index] = itemToChange
        return newItems
      } else {
        return [...currentItems, { ...product, quantity: 1 }]
      }
    })
  }

  const decreaseQuantity = (productId: number) => {
    const index = products.findIndex(({ id }) => id === productId)
    if (index === -1) return

    if (products[index].quantity === 1) {
      removeFromCart(productId)
    } else {
      setProducts(currentItems => {
        const newItems = [...currentItems]
        const itemToChange = { ...newItems[index] }
        itemToChange.quantity = itemToChange.quantity - 1
        newItems[index] = itemToChange
        return newItems
      })
    }
  }

  const getItem = (productId: number) => {
    return products.find(({ id }) => productId === id)
  }

  const clearCart = () => {}

  const value: CartContextData = {
    cart: products,
    getItemQuantity,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getItem,
    cartQuantity,
    openCart,
    closeCart
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const cartContext = useContext(CartContext)

  if (!cartContext) {
    throw new Error('useCart must be used inside a CartProvider')
  }

  return cartContext
}
