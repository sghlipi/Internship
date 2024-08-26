<script setup lang="ts">
import {ref} from 'vue';
let airlines = ref([{
    name:'Yeti',
    seats: 40
},
{
    name:'Buddha',
    seats: 50
},
{
    name:'Tara',
    setas:45
}])
const newairlines = airlines.value.map(airlines => {
    if(airlines.name === "Yeti")
    {
        airlines = {
        name: 'asdf',
        seats: 70
    }
    }
  
    return airlines
})

console.log(airlines.value)
</script>

<template>
    <!-- <section>
        <div :key="index" v-for="airline,index in airlines">
        {{airline}}</div>
    </section> -->
    <section>
        <div :key="index" v-for="airline,index in newairlines">
        {{airline}}</div>
    </section>
</template>