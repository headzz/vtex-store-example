import Image from 'next/image'

/**
 * @component
 * @name Search
 * @description Defines an image component used in search bar.
 * @namespace components components/Icons/Search
 *
 */
const Search = () => (
  <Image
    src="/img/icon/search.svg"
    height={24}
    width={24}
    alt="ícone busca status"
  />
)

export default Search
