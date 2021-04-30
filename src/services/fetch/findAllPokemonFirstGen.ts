import { AxiosRequestConfig } from 'axios'
import { Fetch } from 'services/interceptors'

type Species = {
  name: string
  url: string
}

type Pokemon = Species[]

type ResponseType = {
  error: boolean
  data: Pokemon
}

export const findAllPokemonFirstGen = async (): Promise<ResponseType> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://pokeapi.co/api/v2/generation/1/'
  }
  try {
    const response = await Fetch(options)
    return { error: false, data: response.data }
  } catch (error) {
    return { error: true, data: [] }
  }
}
