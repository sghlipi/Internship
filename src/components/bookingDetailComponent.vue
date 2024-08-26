<script setup>
import { useRentalStore } from '../stores/rentalStore';


const rentalStore = useRentalStore()
</script>

<template>
    <h1>Booking Details</h1>
   <p v-if="$route.params.type === 'rent'">
   {{ rentalStore.payload }}</p>
   <p v-if="$route.params.type === 'hire'">
   {{ rentalStore.hirePayload }}</p>
</template>

<style scoped>

</style>