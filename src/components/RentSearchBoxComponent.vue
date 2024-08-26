<script setup lang="ts">
import {citiesOfNepal} from '../cities/cities.json';
import {rentData} from "../vehicle/rent.json";
import {ref} from 'vue'
import { useRentalStore } from '../stores/rentalStore';
import {useRouter} from 'vue-router'

const searchPickUp = ref ("");
const searchDropOff = ref("");

const dropDatePickUp = ref("");
const dropDateDropOff = ref("");


const filterPickUp = ref(citiesOfNepal);
const filterDropOff = ref (null);

const rentalStore = useRentalStore()

const $router = useRouter()

const locationFilteringPickUp = () => {
    if(!searchPickUp.value){
        filterPickUp.value = [];
    }
    else{
        filterPickUp.value = citiesOfNepal.filter((city)=>{
            if(city.toLowerCase().includes(searchPickUp.value.toLowerCase()))
            {
                console.log(city)
                return city
            }
        })

    }
}

const locationFilteringDropOff = () => {
    if(!searchDropOff){
        filterDropOff.value = [];
    }
    else{
        filterDropOff.value = citiesOfNepal.filter((city)=>{
            if(city.toLowerCase().includes(searchDropOff.value.toLowerCase()))
            {
                console.log(city)
                return city
            }
        })

    }
}
const rentFilteredVechiles = ref(null)

const rentFiltering = () => {
    rentalStore.payload.pickUpLocation = searchPickUp.value
    rentalStore.payload.dropOffLocation = searchDropOff.value
    rentalStore.payload.pickUpDate = dropDatePickUp.value
    rentalStore.payload.dropOffDate = dropDateDropOff.value
   rentFilteredVechiles.value =  rentData.filter((vehicle)=> {
        if(searchPickUp.value === vehicle.pickUpLocation && searchDropOff.value === vehicle.dropOffLocation && dropDatePickUp.value === vehicle.pickUpDate && dropDateDropOff.value === vehicle.dropOffDate  ){
            console.log(vehicle)
            return vehicle
        }

    })
    $router.push(
        {
            name: 'Booking',
            params: {
                type :'rent'
            }
        }
    )
}

const handleKeyPressPickUp = (event)=>{
    console.log(event)
if(event.key ==="ArrowDown"){
    if(searchPickUp.value){
        const index = filterPickUp.value.indexOf(searchPickUp.value)
        searchPickUp.value = filterPickUp.value[index + 1]
    }
    else{
        searchPickUp.value = filterPickUp.value[0]
    }
}
if(event.key ==="ArrowUp"){
    if(searchPickUp.value){
        const index = filterPickUp.value.indexOf(searchPickUp.value)
        searchPickUp.value = filterPickUp.value[index - 1]
    }
    else{
        searchPickUp.value = filterPickUp.value[filterPickUp.value.length -1]
    }
}
if(event.key === "Enter"){
filterPickUp.value = []

}
}

const handleKeyPressDropOff = (event)=>{
    console.log(event)
if(event.key ==="ArrowDown"){
    if(searchDropOff.value){
        const index = filterDropOff.value.indexOf(searchDropOff.value)
        searchDropOff.value = filterDropOff.value[index + 1]
    }
    else{
        searchDropOff.value = filterDropOff.value[0]
    }
}
if(event.key ==="ArrowUp"){
    if(searchDropOff.value){
        const index = filterDropOff.value.indexOf(searchDropOff.value)
        searchDropOff.value = filterDropOff.value[index - 1]
    }
    else{
        searchDropOff.value = filterDropOff.value[filterDropOff.value.length -1]
    }
}
if(event.key === "Enter"){
filterDropOff.value = []

}
}
</script>

<template>

    <article class="main-head">
        <section class="location-container">
            <div class="pick-up-location">
                <p>Pick Up Location</p>
                <input type="text" placeholder="Please enter from location" 
                @keydown="handleKeyPressPickUp"
                v-model="searchPickUp"
                @input="locationFilteringPickUp"/>
            </div>

            <div class="drop-down-container">

                <div 
                class="drop-down-list"
                v-for="city,index in filterPickUp" :key="index" 
                
                @keydown="handleKeyPressPickUp"
                @click="()=>{searchPickUp=city
                    console.log(city)
                    filterPickUp = []
    
                }">
                    <p class="option">{{ city }}</p>
    
                </div>
            </div>
        </section>

        <section class="location-container">

            <div class="drop-off-location">
                <p>Drop Off Location</p>
                <input type="text" placeholder="Please enter to location " v-model= "searchDropOff"
                @keydown="handleKeyPressDropOff" @input="locationFilteringDropOff"/>
            </div>

                <div class="drop-down-container">

                    <div class="drop-down-list"
                    v-for="city,index in filterDropOff" :key="index" 
                    @keydown="handleKeyPressDropOff"
                    @click="()=>{searchDropOff=city
                        console.log(city)
                        filterDropOff= []
                    }">
                       <p class="option">{{ city }}</p> 
        
                    </div>
                </div>
            </section>

        <section>
            <div class="pick-up-date">
                <p>Pick Up Date</p>
                <input v-model="dropDatePickUp" type="date" placeholder="">
               
            </div>
        </section>

        <section>
            <div class="drop-off-date"> 
                <p>Drop Date</p>
                <input v-model="dropDateDropOff" type="date" placeholder="">
                
            </div>
        </section>

        <section>
            <button class="button" @click="rentFiltering">Find Vehicle</button>
            
        </section>
    </article>
    {{ rentFilteredVechiles }}
   


    
</template>

<style scoped>
.main-head{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

}

.button{
    width: 100%;
    height: 40px;
}

.location-container{
    position: relative;
}
.drop-down-container{
    position: absolute;
    height: 150px;
    overflow-y:scroll;
    background: white;
    
}

.option{
    border: 1px solid black;
    padding: 3px 6px;
}
</style>