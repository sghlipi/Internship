<script setup>
import SilderComponent from '../components/SilderComponent.vue'
import {profile} from '../instagram/profile.json'
</script>

<template>
<SilderComponent :data="profile"/>

</template>