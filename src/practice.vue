<script setup>
import {ref, onMounted, watchEffect} from 'vue';
const apiKey = "c5991897d88bb42408fd5d87948090aa";
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
const discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
const trendingMovieUrl = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;
const topRatedTvShowsUrl = `https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}`;

async function getTopRatedMovies(){
    const response = await fetch(topRatedUrl)
    const d = await response.json
    console.log(d)
}
async function getPopular(){
    const response = await fetch(popularUrl)
    const r = await response.json()
    console.log(r)
}

async function getDiscover(){
    const response = await fetch(discoverUrl)
    const e = await response.json()
}

async function getTrend(){
    const response = await fetch(trendingMovieUrl )
    const a = await response.json()
}

async function getTV(){
    const response = await fetch(topRatedTvShowsUrl)
    const w = await response.json()
}


getTopRatedMovies()
getPopular()
getDiscover()
getTrend()
getTV()


import (ref, onMounted)
</script>

<template>
    
</template>

<style scoped>

</style>