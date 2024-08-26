<script setup>
import serviceTypeComponent from './serviceTypeComponent.vue';
import RentSearchBoxComponent from './RentSearchBoxComponent.vue';
import HireSearchBoxComponent from './HireSearchBoxComponent.vue';
import SelfSearchBoxComponent from './SelfSearchBoxComponent.vue';



import {ref} from 'vue'
const selectQuery = ref('')
const searchQuery = ref('')


const services = {
    rent : 'RENT',
    hire: 'HIRE',
    self: 'SELF'
    
}

const selectService = (service) =>{
    selectQuery.value = service
}

const searchService = (search) =>{
    searchQuery.value = search
}

</script>

<template>
<div class="contain">
    <section class="main">
       
       <img src="https://scalebranding.com/wp-content/uploads/2020/10/b-car-logo.jpg" class="logo">
     
         <article class="nav-bar">
             <a href="rental">Home</a>
             <a href="rent">Corporate Rent</a>
             <a href="blog">Blog</a>
             <a href="aboutUs">About Us</a>
             <a href="contact">Contact</a>
     
         </article>

         <button class="btn" @click="$router.push({
             name: 'Register'
         })">Sign In</button>
   </section>


<div class="background">

   <section class="search-box">
    <header>
        <h3>Choose a Service :{{ selectQuery }}</h3>
    </header>
<section class="container">  
      <div class="car-type-rent-image">
       <button @click="()=>selectService(services.rent)">
        <svg class="icon" v-if="selectQuery=== services.rent " xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" fill="currentColor"></path></svg>
        <img class="" src="https://sparkcar.org/_next/image?url=https%3A%2F%2Fsparkcar.org%2Fassets%2Fimages%2Ficons%2Fhireadriver.png&w=256&q=75">
        <p class="car-type-rent-text">Rent a Car</p>
       </button> 
       
       <button 
       @click="()=>selectService(services.hire)"
       ><svg class="icon" v-if="selectQuery=== services.hire" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" fill="currentColor"></path></svg>
        <img class="car-type-hire-image" src="https://sparkcar.org/_next/image?url=https%3A%2F%2Fsparkcar.org%2Fassets%2Fimages%2Ficons%2Fdriver.png&w=3840&q=75">
        <p class="car-type-hire-text">Hire a Driver</p>
       </button>

       <button @click="()=>selectService(services.self)"
       ><svg class="icon" v-if="selectQuery=== services.self" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248s248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200c0 110.532-89.451 200-200 200c-110.532 0-200-89.451-200-200c0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z" fill="currentColor"></path></svg>
        <img class="car-type-self-image" src="https://sparkcar.org/_next/image?url=https%3A%2F%2Fsparkcar.org%2Fassets%2Fimages%2Ficons%2Frentacar.png&w=3840&q=75">
        <p class="car-type-self-text">Self Drive</p>
       </button>

    </div>


    <div v-if="selectQuery=== services.rent">
        <RentSearchBoxComponent/>
    </div>


    <div v-if="selectQuery=== services.hire"> 
        <HireSearchBoxComponent/>
    </div>

    <div v-if="selectQuery=== services.self">
        <SelfSearchBoxComponent/>
    </div>
    

</section>

   </section>
</div>
</div>



</template>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
 
  

}
.main{
    display: flex;
    /* background-color: red; */
    justify-content: space-around;
    padding: 10px;

}

.nav-bar{
    padding: 10px;
    display: flex;
    gap: 40px;
    font-size: 18px;
    color: black;
  
}

.logo{
    height: 40px;
    width: 40px;
  
}

.btn{
    width: 70px;
    background-color: greenyellow;
    height: 35px;
    border-radius: 8px;
   
    
}



.search-box{
    width: 60%;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
    border-radius: 10px;
}
.container{
    display: flex;
    justify-content: space-between;
}
.icon{
    height: 20px;
    width: 20px;
}

.contain{
    background-image: url(https://media.istockphoto.com/id/1318075689/photo/road.jpg?s=1024x1024&w=is&k=20&c=VUgtMBAPDNz8b6tSNWZYZvkW6y2krFKVnsvfLqBzJu8=);
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100vh;
    width: 100vw;
}
</style>