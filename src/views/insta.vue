<script setup>
import ScrollerComponent from '../components/ScrollerComponent.vue'
import {posts} from '../instagram/posts.json'
</script>

<template>
    <ScrollerComponent :data="posts"/>
</template>