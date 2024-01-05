<template>
  <main>
    <header class="header">
      <img src="/logo.svg" alt="logo" class="header-logo" />
      <h2>My favorite movies</h2>
    </header>
    <div class="tabs">
      <button
        :class="['btn', { 'btn-green': movieStore.activeTab === 1 }]"
        @click="movieStore.setActionTab(1)"
      >
        Favorite
      </button>
      <button
        :class="['btn', { 'btn-green': movieStore.activeTab !== 1 }]"
        @click="movieStore.setActionTab(2)"
      >
        Search
      </button>
    </div>
    <div v-if="movieStore.activeTab === 1" class="movies">
      <div>
        <h3>Watched movies (count:{{ movieStore.watchedMovies.length }} )</h3>
        <MovieInfo
          v-for="movie of movieStore.watchedMovies"
          :key="movie.id"
          :movie="movie"
        ></MovieInfo>
      </div>
      <h3>All movies (count:{{ movieStore.movies.length }} )</h3>
      <MovieInfo v-for="movie of movieStore.movies" :key="movie.id" :movie="movie"></MovieInfo>
    </div>
    <div v-else class="search">
      <SearchMovie />
    </div>
  </main>
</template>

<script setup>
import { useMovieStore } from './stores/MovieStore'
import MovieInfo from './components/MovieInfo.vue'
import SearchMovie from './components/SearchMovie.vue'

const movieStore = useMovieStore()
</script>

<style>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}
.header-logo {
  max-width: 50px;
  margin-right: 10px;
}
.btn {
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  margin: 0 10px;
  border-radius: 10px;
  cursor: pointer;
  background: #efefef;
}
.btn:hover {
  opacity: 0.7;
}
.btn-green {
  background: #37df5c;
}

.tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
}
</style>
