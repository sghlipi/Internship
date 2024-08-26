<script setup>
import { ref,onMounted,watchEffect } from "vue";

const apiKey = "c5991897d88bb42408fd5d87948090aa";
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const pageNumber = ref(1)
const getPopular = ref(null)

async function getPopularUrl(page){
    const url = popularUrl + `&page=${page}`
    const response = await fetch(url)
    getPopular.value = await response.json()
  }

  onMounted(() =>{
    getPopularUrl(pageNumber.value)
  })

  watchEffect(() => {
  getPopularUrl(pageNumber.value)
}, pageNumber.value)

  function ShowAlert(n){
    pageNumber.value = n
    console.log(pageNumber.value)
  }

  const searchQuery = ref("");
  async function handleSearch(){
    console.log("Search Query:", searchQuery.value);
    const searchUrl = popularUrl + `&name=${searchQuery.value}`
    const response = await fetch(searchUrl)
    getPopular.value = await response.json()
  }
</script>

<template>
  <section class= "container" v-if= getPopular>
    <div class="" :key="movie.id" v-for="(movie) in getPopular.results">
      <img :src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
      {{
        movie.original_title
      }}
    </div>
  </section>

  <section v-else>
      <p>No movies found.</p>
    </section>
    
<div class="btn">
 
  <button @click= "ShowAlert(1)">1</button>
  <button @click= "ShowAlert(2)">2</button>
  <button @click= "ShowAlert(3)">3</button>
  <button @click= "ShowAlert(4)">4</button>
  <button @click= "ShowAlert(5)">5</button>
</div>

<div class="search-bar">
  <input type="text" v-model="searchQuery" @input="handleSearch" placeholder="Search for a movie..." />


</div>
   
</template>

<style scoped>

</style>