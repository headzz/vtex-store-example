import Image from 'next/image'

/**
 * @component
 * @name Cart
 * @description Defines an image component used when buying things.
 * @namespace components components/Icons/Cart
 *
 */
const Cart: React.FC = () => (
  <Image
    src="/img/icon/cart.svg"
    height={24}
    width={24}
    alt="ícone verificação de itens no carrinho"
  />
)

export default Cart
