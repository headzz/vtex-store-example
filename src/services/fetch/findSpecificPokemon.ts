import { AxiosRequestConfig } from 'axios'
import { Fetch } from 'services/interceptors'

type Species = {
  name: string
  url: string
}

type ResponseType = {
  error: boolean
  data: Species
}

export const findSpecificPokemon = async (
  name: string
): Promise<ResponseType> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: `https://pokeapi.co/api/v2/pokemon/${name}/`
  }
  try {
    const response = await Fetch(options)
    return { error: false, data: response.data }
  } catch (error) {
    return { error: true, data: { name: '', url: '' } }
  }
}
