<script setup>
import ReactComponent from "./ReactComponent.vue";

const props = defineProps({
    profile: null
})
</script>

<template>
    <section>
        <header>
            <img class="image-author" :src="props.profile.author.profile_image">
            <p>{{props.profile.author.name }}</p>

        </header>
    </section>
    <ReactComponent/>
</template>

<style scoped>
.image-author{
    width: 20px;
}
</style>