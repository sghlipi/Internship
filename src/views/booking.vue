<script setup>
import hireBookingComponent from "../components/hireBookingComponent.vue";
import bookingComponent from "../components/bookingComponent.vue"
import { useRoute } from "vue-router";

const $route = useRoute()
</script>

<template>
    
    <bookingComponent v-if="$route.params.type === 'rent'"/>
    <hireBookingComponent v-if="$route.params.type === 'hire'"/>
</template>

<style scoped>

</style>