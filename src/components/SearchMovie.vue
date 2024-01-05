<template>
  <form @submit.prevent="searchStore.getMovies(searchMovie)">
    <input type="text" class="search-input" placeholder="input-movie" v-model="searchMovie" />
    <LoaderMovie v-if="searchStore.isLoader" />
    <div v-else>
      <MovieInfo
        v-for="movie of searchStore.movies"
        :key="movie.filmId"
        :movie="movie"
        :isSearch="true"
      />
    </div>
  </form>
</template>
<script setup>
import MovieInfo from '../components/MovieInfo.vue'
import LoaderMovie from '../components/LoaderMovie.vue'
import { ref } from 'vue'
import { useSearchStore } from '../stores/SearchStore.js'

const searchMovie = ref('')

const searchStore = useSearchStore()
</script>
<style scoped>
.search-input {
  border: 1px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
}
</style>
