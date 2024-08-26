<script setup>
import {ref, onMounted, watchEffect} from 'vue'

 const apiKey = "c5991897d88bb42408fd5d87948090aa";
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
const topRatedTvShowsUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

const getTop = ref(null)
  async function getTopRatedMovies(){
    const response = await fetch (topRatedUrl)
    getTop.value =  await response.json()
  }

const getPopular = ref(null)
  async function getPopularUrl(){
    const response = await fetch (popularUrl)
    getPopular.value =  await response.json()
  }


  const getDiscover = ref(null)
  async function getDiscoverUrl(){
    const response = await fetch (discoverUrl)
    getDiscover.value =  await response.json()
  }


const getTrend = ref(null)
async function getTrendingMovieUrl(page){
  const url = trendingMovieUrl + `&page=${page}`
  const response = await fetch (url)
  getTrend.value =  await response.json()


}

const getTV = ref(null)
async function getTopRatedTvShowsUrl() {
  const response = await fetch (topRatedTvShowsUrl)
  getTV.value =  await response.json()


}
onMounted(()=>{
  getTopRatedMovies()
  getPopularUrl()
  getDiscoverUrl()
  getTrendingMovieUrl(page.value)
  getTopRatedTvShowsUrl()

})

function ShowAlert(number) {
    page.value=number;
    console.log(page.value)
  }
const page = ref(1)

watchEffect(()=>{
  getTrendingMovieUrl(page.value)
},
page.value)

</script>

<template>
  
  <h2 class="trend">Trending Movies:</h2>
  <section class="container" v-if="getTrend">
 
 <div class="card" :key="movie.id" v-for="(movie) in getTrend.results">
  <img :src= "`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
  <h2 class="title">
    {{
      movie.original_title
    }}
  </h2>
 </div>
  </section>

  <h2>Top Rated Movies</h2>
  <section class="container" v-if="getTop">
   
 <div class="card" :key="movie.id" v-for="(movie) in getTop.results">
  <img :src= "`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
  <h2 class="title">Title:
    {{
      movie.title
    }}
  </h2>
 </div>
  </section> 

  <h2>Popular Movies</h2>
  <section class="container" v-if="getPopular">
   
 <div class="card" :key="movie.id" v-for="(movie) in getPopular.results">
  <img :src= "`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
  <h2 class="title">Title:
    {{
      movie.title
    }}
  </h2>
 </div>
  </section>



  
  <h2>Discover Movies</h2>
  <section class="container" v-if="getDiscover">
   
 <div class="card" :key="movie.id" v-for="(movie) in getDiscover.results">
  <img :src= "`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
  <h2 class="title">Title:
    {{
      movie.title
    }}
  </h2>
 </div>
  </section>

  <h2>Top Rated TV Shows</h2>
  <section class="container" v-if="getTV">
   
 <div class="card" :key="movie.id" v-for="(movie) in getTV.results">
  <img :src= "`https://image.tmdb.org/t/p/w500${movie.poster_path}`">
  <h2 class="title">Title:
    {{
      movie.title
    }}
  </h2>
 </div>
 
  </section> 

  <section class="btn">
    <button @click="ShowAlert(1)" class="button">1</button>
    <button @click="ShowAlert(2)" class="button">2</button>
    <button @click="ShowAlert(3)" class="button">3</button>
    <button @click="ShowAlert(4)" class="button">4</button>
    <button @click="ShowAlert(5)" class="button">5</button>
    
    
  </section>
</template>
<style scoped>
.container{
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: 10px;
}
.card{
  position: relative;
  width: 100%;

}
.card img{
  width: 100%;
}
.title{
  position: absolute;
  bottom: 5%;
  color: white;
  left:50%;
  transform: translateX(-50%);
  
}
.btn{
  
}
@media only screen and (max-width: 800px) {
  .container{
  grid-template-columns: repeat(2, minmax(0,1fr));
}
.title{
  font-size: 14px;
}

}

@media only screen and (max-width: 475px) {
  .container{
  grid-template-columns: repeat(1, minmax(0,1fr));
}}





</style>