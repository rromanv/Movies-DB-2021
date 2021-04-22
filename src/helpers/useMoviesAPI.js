import { ref } from 'vue'
import axios from 'axios'

export const page = ref(1)
export const pages = ref(1)
export const movies = ref([])

const discover = axios.create({
  baseURL: 'https://api.themoviedb.org/4/discover/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YmM1ZDkyOTMzNzgyMzYzYzZjZTJiMTlmMWFlMDA0YyIsInN1YiI6IjYwN2ZiNGQ1NzEzZWQ0MDAyOTM1OGNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.syzKGwAZ_Ld67x-8yPOnndzlHb4P-eIqVrLxzOOia_o',
  },
  params: {
    sort_by: 'popularity.desc',
  },
})

export const getMovies = async () => {
  const response = await discover('movie', { params: { page: page.value } })
  movies.value = response.data.results
  pages.value = response.data.total_pages
}

export const imageBaseURL = 'https://image.tmdb.org/t/p/w200/'
export const bgBaseURL = 'https://image.tmdb.org/t/p/original/'
