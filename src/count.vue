<script setup>
import {ref} from 'vue'
const number = ref([])
let count = 0
function add(){
count++
number.value.push()
}


</script>
<template>
 
    <button type="button" @click="add()">add </button>
    <h2>{{ number }}</h2>
</template>