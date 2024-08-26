<script setup>
import {citiesOfNepal} from '../cities/cities.json';
import {vehicleData} from '../vehicle/vehicleType.json';
import {rentData} from "../vehicle/rent.json";
import {ref} from 'vue'
import { useRentalStore } from '../stores/rentalStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';


const searchPickUp = ref ("");
const searchDropOff = ref("");

const dropDatePickUp = ref("");
const dropDateDropOff = ref("");

const filterPickUp = ref(null);
const filterDropOff = ref (null);

const searchVehicle = ref ("");
const filterVehicle = ref (null);

const rentalStore = useRentalStore()

const $router = useRouter()


onMounted(()=>{
filterVehicle.value = vehicleData.map(vehicle=>{
    return vehicle.type
})

})
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

const vehicleFiltering = () => {
    if(!searchVehicle){
        filterVehicle.value = [];

    }
    else{
        filterVehicle.value = vehicleData.map((car) =>{
            if(car.type.toLowerCase().includes(searchVehicle.value.toLowerCase()))
            {
                console.log(car.type)
                return car.type
            }
        })

     

    }
}

const hireFilteredVechiles = ref(null)

const hireFiltering = () => {
    rentalStore.hirePayload.pickUpLocation = searchPickUp.value
    rentalStore.hirePayload.dropOffLocation = searchDropOff.value
    rentalStore.hirePayload.pickUpDate = dropDatePickUp.value
    rentalStore.hirePayload.dropOffDate = dropDateDropOff.value
    rentalStore.hirePayload.hireDriver = searchVehicle.value
    
   hireFilteredVechiles.value =  rentData.filter((vehicle)=> {
        if(searchPickUp.value === vehicle.pickUpLocation && searchDropOff.value === vehicle.dropOffLocation && dropDatePickUp.value === vehicle.pickUpDate && dropDateDropOff.value === vehicle.dropOffDate &&
        searchVehicle.value === vehicle.vehicleType ){
            console.log(vehicle)
            return vehicle
        }

    })
    $router.push(
        {
            name: 'Booking',
            params:{
                type:'hire'
            }
        })
}

</script>

<template>
    <article class="main-head">
        <section class="location-container">
            <div class="pick-up-location">
                <p>Pick Up Location</p>
                <input type="text" placeholder="Please enter from location " v-model="searchPickUp"
                @input="locationFilteringPickUp"/>
            </div>

            <div class="drop-down-container">

                <div v-for="city,index in filterPickUp" :key="index" @click="()=>{searchPickUp=city
                    console.log(city)
                    filterPickUp = []
                }">
                    {{ city }}
    
                </div>
            </div>
        </section>

        <section class="location-container">
            <div class="drop-off-location">
                <p>Drop Off Location</p>
                <input type="text" placeholder="Please enter to location " v-model= "searchDropOff" @input="locationFilteringDropOff"/>
            </div>

            <div class="drop-down-list">

                <div v-for="city,index in filterDropOff" :key="index" @click="()=>{searchDropOff=city
                    console.log(city)
                    filterDropOff= []
                }">
                    {{ city }}
    
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
            <div class="vehicle-type">
                <p>Vehicle Type To Drive</p>
                    <input type="text" placeholder="Select a vehicle type" v-model="searchVehicle" @input="vehicleFiltering" >   
            </div>

            <div v-for="car,index in filterVehicle" :key="index" @click="()=>{searchVehicle=car
                console.log(car)
            filterVehicle = []}">

                {{ car}}

            </div>
        </section>
            <button class="button" @click="hireFiltering">Find Driver</button>
        <section>
        
        </section>
    </article>
    <!-- {{ hireFilteredVechiles }} -->
    <!-- {{ rentalStore.hirePayload }} -->
</template>

<style scoped>
 .main-head{
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;

}
.button{
    width: 100%;

}
location-container{
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