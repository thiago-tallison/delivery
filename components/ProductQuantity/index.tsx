import { useState } from 'react'

export default function ProductQuantity() {
  const [quantity, setQuantity] = useState(1)

  const handleChangeQuantity = (step: 1 | -1) => {
    if (quantity === 1 && step === -1) return

    setQuantity(old => old + step)
  }

  return (
    <div className="flex mb-2 w-36">
      <button
        onClick={() => handleChangeQuantity(-1)}
        className="select-none flex flex-1 justify-center items-center w-12 h-12 bg-[#f2f4f5] rounded-l text-[#96A3AB] font-bold text-xl"
      >
        -
      </button>

      <span className="select-none flex items-center justify-center flex-1 font-bold leading-[22px] text-[18px] text-[#FB9400] border-y border-[#F2F4F5]">
        {quantity > 0 ? quantity.toString().padStart(2, '0') : quantity}
      </span>

      <button
        onClick={() => handleChangeQuantity(1)}
        className="select-none flex flex-1 justify-center items-center w-12 h-12 bg-[#FB9400] rounded-r text-white font-bold text-xl"
      >
        +
      </button>
    </div>
  )
}
