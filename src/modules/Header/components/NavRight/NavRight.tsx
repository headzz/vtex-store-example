/* eslint-disable react-hooks/exhaustive-deps */
import Button from 'components/Button'
import Flexbox from 'components/Flexbox/Flexbox'
import Input from 'components/Input'
import Link from 'components/Link'

import { useEffect } from 'react'
import useFetch from 'utils/hooks/hook'
import { HeaderRightStyled } from './styled'

const NavRight = () => {
  const toFetch = useFetch()
  const {
    state: { availablePokemon, search, filteredPokemon }
  } = toFetch
  const {
    events: { fetchPokemon, fetchSpecificPokemon, searchedPokemon, setSearch }
  } = toFetch

  useEffect(() => {
    fetchPokemon()
  }, [])

  useEffect(() => {
    searchedPokemon()
  }, [availablePokemon, search])

  return (
    <HeaderRightStyled>
      <Flexbox alignContent="right">
        <Input
          setParentValue={setSearch}
          filtered={filteredPokemon}
          clickHandler={fetchSpecificPokemon}
        />
        <Link
          href="https://www.google.com"
          margin
          background={false}
          border={false}
        >
          Login
        </Link>
        <Button
          icon="cart"
          round={false}
          color=""
          clickHandler={() => console.log('teste')}
        />
      </Flexbox>
    </HeaderRightStyled>
  )
}

export default NavRight
