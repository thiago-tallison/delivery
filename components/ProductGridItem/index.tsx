import { Product } from '@/types/product'
import Link, { LinkProps } from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

type Props = {
  product: Product
}

type ProductLinkProps = {
  children: JSX.Element
  product: Product
}

const ProductLink = ({ product, children }: ProductLinkProps) => {
  const Router = useRouter()

  return (
    <div
      onClick={() =>
        Router.push(
          {
            pathname: `/b7delivery/products/${product.id}`,
            query: { product: JSON.stringify(product) }
          },
          `/b7delivery/products/${product.id}`
        )
      }
    >
      {children}
    </div>
    // <Link
    //   href={{
    //     pathname: `/b7delivery/products/${product.id}`,
    //     query: {
    //       product: JSON.stringify(product)
    //     }
    //   }}
    // >
    //   {children}
    // </Link>
  )
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row rounded-md shadow-md min-h-[300px] sm:min-h-full">
      <div className="flex flex-1 basis-1/2 sm:basis-1/4">
        <div className="flex w-full relative sm:w-3/4 sm:h-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2">
          <Image
            fill={true}
            src={product.img}
            alt="Foto ilustrativa do produto"
            style={{
              objectFit: 'contain'
            }}
          />
        </div>
      </div>

      <div className="flex flex-1 !basis-1/2 flex-col py-4 px-2 sm:py-6 sm:pl-0 sm:pr-2">
        <p className="uppercase leading-[10px text-[8px] font-medium text-[#1B1B1B]">
          {product.category.name}
        </p>

        <ProductLink product={product}>
          <h3 className="text-lg font-bold leading-[22px] text-[#1b1b1b]">
            {product.name}
          </h3>
        </ProductLink>

        <p
          className="mt-3 text-xs leading-4 text-gray-500 overflow-hidden text-ellipsis"
          style={{
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
          }}
        >
          Pão de batata, hamburguer artesanal de 200g, salada. Acompanha babata
          frita e refrigerante.
        </p>

        <p className="mt-4 font-semibold leading-[18px] text-[#FB9400]">
          {product.price}
        </p>
      </div>
    </div>
  )
}
