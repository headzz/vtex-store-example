import { useState } from 'react'
import Burguer from './components/Burguer/Burguer'
import MenuItems from './components/MenuItems/MenuItems'

/**
 * @component
 * @name Menu
 * @description Defines Menu component for mobile.
 * @namespace components components/Menu
 *
 */
const Menu = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <>
      <Burguer open={open} setOpen={setOpen} />
      <MenuItems open={open} />
    </>
  )
}

export default Menu
