<script setup>
const props = defineProps({
  message: "",
  airlines: null,
  
});
import airlineCard from "./airlineCard.vue";
</script>

<template>
  <h1>This is an example</h1>
  {{ props.message }}

  <div class="" :key="index" v-for="(airline,index) in props.airlines">
    <airlineCard :airline="airline" />
  </div>
</template>

<style scoped></style>
