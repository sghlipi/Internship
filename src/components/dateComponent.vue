<script setup lang="ts">
import {ref} from 'vue';

const searchQuery = ref('')
const searchDate = ref(null)
const searchFilteredAirlines =ref(null)

const domesticAirlinesNepal = ref([
    {
        "name": "Yeti Airlines",
        "founded": 1998,
        "fleetSize": 10,
        "date":"2024-07-15",
        "hub": "Tribhuvan International Airport",
        "from":"kathmandu",
        "to":"pokhara",
        "website": "https://www.yetiairlines.com",
        "description": "Yeti Airlines is one of the largest domestic airlines in Nepal, offering flights to many destinations across the country."
    },
    {
        "name": "Tara Air",
        "founded": 2009,
        "fleetSize": 7,
        "date":"2024-07-20",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.taraair.com",
        "description": "Tara Air, a subsidiary of Yeti Airlines, specializes in short takeoff and landing flights, serving remote and mountainous regions of Nepal."
    },
    {
        "name": "Buddha Air",
        "founded": 1997,
        "fleetSize": 14,
        "date":"2024-07-15",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.buddhaair.com",
        "description": "Buddha Air is a leading domestic airline in Nepal, known for its extensive network and reliable service."
    },
    {
        "name": "Buddha Air",
        "founded": 1997,
        "fleetSize": 14,
        "date":"2024-07-15",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.buddhaair.com",
        "description": "Buddha Air is a leading domestic airline in Nepal, known for its extensive network and reliable service."
    },
    {
        "name": "Shree Airlines",
        "founded": 1999,
        "fleetSize": 5,
        "date":"2024-07-18",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.shreeairlines.com",
        "description": "Shree Airlines offers both scheduled and charter flights, with a focus on connecting major cities and tourist destinations in Nepal."
    },
    {
        "name": "Simrik Airlines",
        "founded": 2009,
        "fleetSize": 4,
        "date":"2024-07-19",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.simrikairlines.com",
        "description": "Simrik Airlines provides domestic flights across Nepal, aiming to offer safe and efficient travel to its passengers."
    },
    {
        "name": "Summit Air",
        "founded": 2011,
        "fleetSize": 3,
        "date":"2024-07-16",
        "hub": "Tribhuvan International Airport",
        "website": "https://www.summitair.com",
        "description": "Summit Air focuses on flights to remote and challenging airstrips, primarily serving trekking and mountaineering destinations."
    }])

    const filteredAirlines=ref(null)

const airlineFiltering =() =>{
if(!searchQuery.value){
    filteredAirlines.value = [];
}
else{
    filteredAirlines.value = domesticAirlinesNepal.value.filter((airline)=>{
        if(airline.name.toLowerCase().includes(searchQuery.value.toLowerCase()) && airline.date === searchDate.value){
            return airline

        }
    })
}
console.log(filteredAirlines.value,searchQuery.value,searchDate.value)
}

const filterAirlinesNames = () =>{
    searchFilteredAirlines.value = domesticAirlinesNepal.value.filter((airline)=>{
        if(airline.name.toLowerCase().includes(searchQuery.value.toLowerCase())){
            return airline
        }
    })
}

const selectAirline = (airline)=>{
    searchQuery.value = airline.name
}


</script>

<template>
    <section>
    <div>
      <section>
        <!-- <input type="text" v-model="searchQuery" @input="filterAirlinesNames" placeholder="Depature Date"> -->
        <article>
            <div class="option" :key="index" v-for="airline,index in searchFilteredAirlines" @click="()=>selectAirline(airline)">
                {{ airline.name }}

            </div>
        </article>
      </section>
      <input type="date" v-model="searchDate" />
      <button @click="airlineFiltering">Search</button>
     
<div v-if="filteredAirlines">
    <div v-if="filteredAirlines.length > 0">
      <section class="container">
        <div :key="airline.name" v-for="airline in filteredAirlines" class="card">

<header class="head">
    <h3 >Name: {{ airline.name }}</h3>
    <h3>Flight Date: {{ airline.date }}</h3>

</header>
<p class="para"> {{ airline.description }}</p>

</div>
      </section>

      </div>
      <div v-else>
        No Flights Found.

      </div>
</div>

    </div>
    </section>
</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top:18px ;
}
.card{
    max-width: 75vw;
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px 30px;
}
.head{
    display: flex;
    justify-content: space-between;
}
.option{
    padding: 6px 12px;
    border: 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    max-width: 200px;
}
</style>