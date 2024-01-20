import { ref } from 'vue'
import { useMovieStore } from '../stores/MovieStore.js'
import { defineStore } from 'pinia'

const API_KEY = '8c8e1a50-6322-4135-8875-5d40a5420d86'

const URL = 'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword='

export const useSearchStore = defineStore('SearchStore', () => {
  const movies = ref([])
  const isLoader = ref(false)

  async function getMovies(searchMovie) {
    isLoader.value = true
    const response = await fetch(`${URL}${searchMovie}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY
      }
    })
    const data = await response.json()
    movies.value = data.films
    isLoader.value = false
  }

  function addToUserMovies(movie) {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...movie, isWatched: false })
    movieStore.activeTab = 1
  }

  return { movies, getMovies, addToUserMovies }
})
