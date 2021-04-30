type Species = {
  name: string
  url: string
}

type Pokemon = Species[]
import { useState } from 'react'
import { findAllPokemonFirstGen, findSpecificPokemon } from 'services/fetch'

const useFetch = () => {
  const [availablePokemon, setAvailablePokemon] = useState<Pokemon>([
    { name: '', url: '' }
  ])
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon>(
    availablePokemon
  )

  const [search, setSearch] = useState<string>('')
  const [popup, setPopup] = useState<boolean>(false)
  const [specificPokemon, setSpecificPokemon] = useState<Species>({
    name: '',
    url: ''
  })

  const searchedPokemon = () => {
    const possibleNames = availablePokemon.filter((item) =>
      item.name.includes(search)
    )
    const showNames = []

    for (let i = 0; i < 3; i++) {
      if (possibleNames[i] !== undefined) {
        showNames.push(possibleNames[i])
      }
    }

    setFilteredPokemon(showNames)
  }

  const fetchPokemon = async () => {
    const response = await findAllPokemonFirstGen()
    setAvailablePokemon(response.data)
  }

  const fetchSpecificPokemon = async () => {
    const response = await findSpecificPokemon(search)
    if (!response.error) {
      setSpecificPokemon(response.data)
      console.log(response.data)
    } else {
      console.log('Ops, erro na requisição')
    }
  }

  return {
    state: {
      availablePokemon,
      filteredPokemon,
      search,
      popup,
      specificPokemon
    },
    events: {
      fetchSpecificPokemon,
      fetchPokemon,
      searchedPokemon,
      setAvailablePokemon,
      setFilteredPokemon,
      setPopup,
      setSearch,
      setSpecificPokemon
    }
  }
}

export default useFetch
