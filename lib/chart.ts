import { ChartProduct } from '../types/product'

const CHART_KEY = '@delivery-chart'

export default class Chart {
  private products: ChartProduct[]

  add(product: ChartProduct) {
    const indexInChart = this.products.findIndex(({ id }) => id === product.id)
    const alreadyInChart = indexInChart > -1

    if (alreadyInChart) return

    this.products.push(product)
    localStorage.setItem(CHART_KEY, JSON.stringify(this.products))
  }

  remove(product: ChartProduct) {
    this.products = this.products.filter(({ id }) => {
      product.id !== id
    })

    localStorage.setItem(CHART_KEY, JSON.stringify(this.products))
  }

  clear() {
    this.products = []
    localStorage.setItem(CHART_KEY, JSON.stringify(this.products))
  }

  constructor() {
    this.products = JSON.parse(localStorage.getItem(CHART_KEY) || '[]')
  }
}
