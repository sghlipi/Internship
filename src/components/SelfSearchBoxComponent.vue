<script setup>
import {citiesOfNepal} from '../cities/cities.json';
import {rentData} from "../vehicle/rent.json";
import {ref} from 'vue'

const searchPickUp = ref ("");
const searchDropOff = ref("");

const dropDatePickUp = ref("");
const dropDateDropOff = ref("");

const filterPickUp = ref(null);
const filterDropOff = ref (null);

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
   rentFilteredVechiles.value =  rentData.filter((vehicle)=> {
        if(searchPickUp.value === vehicle.pickUpLocation && searchDropOff.value === vehicle.dropOffLocation && dropDatePickUp.value === vehicle.pickUpDate && dropDateDropOff.value === vehicle.dropOffDate  ){
            console.log(vehicle)
            return vehicle
        }

    })
}
</script>

<template>
    <article class="main-head">
        <section>
            <div class="pick-up-location">
                <p>From</p>
                <input type="text" placeholder="Please enter from location " v-model="searchPickUp"
                @input="locationFilteringPickUp"/>
            </div>

            <div v-for="city,index in filterPickUp" :key="index" @click="()=>{searchPickUp=city
                console.log(city)
                filterPickUp = []
            }">
                {{ city }}

            </div>
        </section>

        <section>
            <div class="drop-off-location">
                <p>To</p>
                <input type="text" placeholder="Please enter to location " v-model= "searchDropOff" @input="locationFilteringDropOff"/>
            </div>

            <div v-for="city,index in filterDropOff" :key="index" @click="()=>{searchDropOff=city
                console.log(city)
                filterDropOff= []
            }">
                {{ city }}

            </div>
        </section>

        <section>
            <div class="pick-up-date">
                <p>From Date</p>
                <input v-model="dropDatePickUp" type="date" placeholder="">
                
            </div>
        </section>

        <section>
            <div class="drop-off-date"> 
                <p>To Date</p>
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
</style>
