<script setup lang="ts">
import {ref} from 'vue';
let animals = ref([{
    name:'lion',
    weight: '100kg',
    quantity: 1
    
},
{
    name:'tiger',
    weight: '200kg',
    quantity: 4
    
},
{
    name:'elephant',
    weight: '500kg',
    quantity: 3
    
},
{
    name:'deer',
    weight: '50kg',
    quantity: 5
    
}])
const showValue = ref(false)
const showMessage= () => {
    showValue.value= true
}

const hideMessage = () =>{
    showValue.value = false
}


const increaseQuantity = (name)=>{
    animals.value = animals.value.map((animal) => {
        if(animal.name === name){
            if(animal.quantity< 10){
                animal.quantity ++
            }
           
            
            
            console.log(animal)
        }
        return animal
    })
    
}

const decreaseQuantity = (name)=>{
    const data = animals.value.map((animal) => {
        if(animal.name === name){
            if(animal.quantity>0){
                animal.quantity --
            }
         
        }
        return animal

})
}

</script>

<template>
    <section v-if="showValue">

    <div :key="index" v-for="animal,index in animals">
        {{ animal.name }}
       
    {{ animal.quantity }}
    <div>
        <button @click="() => decreaseQuantity(animal.name)">-</button>
        <button @click="()=>increaseQuantity(animal.name)">+</button>
    </div>
    </div>
        
    </section>
    <div>
        <button @click="showMessage">Show</button>
        <button @click="hideMessage">Hide</button>

    </div>
</template>