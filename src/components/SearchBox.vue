<script setup>
import {ref} from "vue"
import passangerComponent from "./passangerComponent.vue";
import countryComponent from "./countryComponent.vue";
import routeComponent from "./routeComponent.vue"
import dateComponent from "./dateComponent.vue";

const searchQuery = ref("")

function handleSearch(){
  const search = searchQuery
}
</script>

<template>
  <!-- <input type="text" v-model="searchQuery" placeholder="Search ...">
  <h2>
    {{ 
  searchQuery }}</h2> -->

  <section>
    <h2>Domestic Flights</h2>

    <header>
      <div>
        <passangerComponent/>
      </div>

      <div>
        <countryComponent/>
      </div>
    </header>

    <section>
      <div>
        <routeComponent/>
      </div>
    </section>

<section>
  <div>
    <dateComponent/>
  </div>
</section>
  </section>
</template>

<style scoped>


</style>