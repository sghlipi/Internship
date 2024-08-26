<script setup lang="ts">
import {ref} from 'vue';
let fruits = ref([{
    name:'Apple',
    quantity: 12
},
{
    name:'Mango',
    quantity: 22
},
{
    name:'Peach',
    quantity: 10
},
{
    name:'Grape',
    quantity: 22
}])

const showMessage = ref(false)


const increaseQuantity=(name) =>{
    const data = fruits.value.map((fruit) =>{
  if(fruit.name=== name){
    fruit.quantity ++
    console.log(fruit)
  }
  return fruit
    })
    fruits.value = data

}
const decreaseQuantity=(name) =>{
    const data = fruits.value.map((fruit) =>{
  if(fruit.name=== name){
    fruit.quantity --
    console.log(fruit)
  }
  return fruit
    })
    fruits.value = data

   
}

</script>

<template>
    <section v-if="showMessage">
            <div :key="index" v-for="fruit,index in fruits">
                {{ fruit.name }}
                {{ fruit.quantity }}
                <div>
            <button @click="()=>{increaseQuantity(fruit.name)}" class="">+</button>
            <button @click="() => (decreaseQuantity(fruit.name))" class="">-</button>
            
        </div>

            </div>

      
    </section>
        <div>
            <button @click="()=>{showMessage = true}" class="">Show</button>
            <button @click="()=>(showMessage = false)" class="">Hide</button>
        </div>
</template>