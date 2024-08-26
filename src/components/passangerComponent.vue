<script setup lang="ts">
import {ref} from 'vue';


const adult = ref(1)
const child = ref(0)
const showValue = ref(false)


const increaseAdultValue = () =>{
    adult.value ++

}

const decreaseAdultValue = () =>{
adult.value --
}

const increaseChildValue = () =>{
    child.value ++

}

const decreaseChildValue = () =>{
    child.value --
}

const showMessage = () => {
    showValue.value = !showValue.value
}



</script>

<template>
    <Flights/>
    <section>
        <button @click="showMessage">{{ adult + child }} Passangers</button>
    </section>
    <section v-if="showValue" class="container">
        <div class="head-adult">
            <div class="head-adult-info">

                <h3>Adult</h3>
                <p> 12 yrs & above</p>
            </div>
            <div class="btn">
                <button
                :disabled="adult<2" @click="decreaseAdultValue">-</button>
                <p>{{ adult  }}</p>
                <button 
                :disabled="(adult+child)>8" 
                
                @click="increaseAdultValue">+</button>

            </div>
        </div>

        <div class="head-child">
            <h3>Child</h3>
            <p> Under 12 yrs</p>
            <div class="btn"> 

                <button 
                :disabled="child<1"
                 @click="decreaseChildValue">-</button>
                <p>{{ child }}</p>
                <button
                :disabled="(adult+child)>8"
                 @click="increaseChildValue">+</button>
            </div>
        </div>

        <div>
            <h3>Passanger:
                {{ adult + child }} 
                    
            </h3>
        </div>

    </section>
</template>

<style scoped>

.container{
    width: fit-content;
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;

}
.btn{
    border: 1px solid #B1B1B1;
    padding: 5px 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 8px;
    height: 32px;
}

.head-adult{
display: flex;
align-items: center;
gap: 10px;


}

.head-child{
display: flex;
align-items: center;
gap: 10px;
}

.head-adult-info{
    display: flex;
    align-items: center;
    gap: 10px;
}
</style>