export type Category = {
  id: number
  name: string
}

export type Product = {
  id: number
  name: string
  price: string
  category: Category
  img: string
}

export type ChartProduct = {
  quantity: number
} & Product
