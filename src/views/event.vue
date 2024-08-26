<script setup>
import eventComponents from '../components/eventComponents.vue';
import {data} from '../airline.json'
</script>

<template>
 <eventComponents :airlines="data" :message="'Hello this is an example'"/>
</template>

<style scoped>

</style>