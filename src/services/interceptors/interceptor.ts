import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create()

instance.interceptors.response.use(
  (response) => {
    let data = {}
    if (response.data.pokemon_species !== undefined) {
      data = response.data.pokemon_species
      response.data = data
    } else {
      const img = response.data.sprites.front_default
      const name = response.data.species.name

      data = { name: name, img: img }
      response.data = data
    }

    return response
  },
  (error) => Promise.reject(error.message)
)

export default instance
