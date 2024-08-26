<script setup>
import ProfileComponent from './ProfileComponent.vue'

const props = defineProps({
    data: null
})

</script>



<template>
 
    <div v-for="profile,index in props.data" :key="index">

        <ProfileComponent :profile="profile"/>
    </div>
</template>