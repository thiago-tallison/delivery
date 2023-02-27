import { useState } from 'react'
import { BiSearch } from 'react-icons/bi'

type Props = {
  placeholder: string
  mainColor: string
  onSearch(searchTerm: string): void
}

export const SearchInput = ({ placeholder, mainColor, onSearch }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleKeyUp = (key: React.KeyboardEvent<HTMLInputElement>) => {
    if (key.code === 'Enter') {
      onSearch(searchTerm)
    }
  }

  return (
    <div className="bg-white flex justify-between rounded-md">
      <button
        onClick={() => onSearch(searchTerm)}
        className="mt-[6px] mb-[6px] ml-[6px] p-3 rounded-md bg-[#F9F9FB]"
      >
        <BiSearch size={24} fill={mainColor} />
      </button>

      <input
        className=" flex-1
        text-[#979797]
        ml-3 py-3 placeholder:font-normal placeholder:text-base leading-8 outline-none"
        type="text"
        placeholder={placeholder}
        onKeyUp={handleKeyUp}
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
