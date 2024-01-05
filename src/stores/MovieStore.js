import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useMovieStore = defineStore('MovieStore', () => {
  const movies = ref([])
  const activeTab = ref(1)

  const moviesInLocalStorage = localStorage.getItem('movies')
  if (moviesInLocalStorage) {
    movies.value = JSON.parse(moviesInLocalStorage)
  }

  const watchedMovies = computed(() => movies.value.filter((el) => el.isWatched))

  function setActionTab(id) {
    activeTab.value = id
  }

  function toggleWatched(id) {
    const index = movies.value.findIndex((el) => el.filmId === id)
    movies.value[index].isWatched = !movies.value[index].isWatched
  }

  function deleteMovie(id) {
    movies.value = movies.value.filter((el) => el.filmId !== id)
  }

  watch(
    () => movies.value,
    (state) => {
      localStorage.setItem('movies', JSON.stringify(state))
    },
    { deep: true }
  )

  return { movies, activeTab, watchedMovies, setActionTab, toggleWatched, deleteMovie }
})
