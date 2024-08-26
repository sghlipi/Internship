<script setup>
import PostComponent from './PostComponent.vue'

const props= defineProps({
    data: null,
})
</script>

<template>
    <section class="scroller">

        <div  class="post" v-for="post,index in props.data" :key="index">
    
            <PostComponent  :post="post"/> 
        </div>
    </section>
</template>

<style scoped>
.scroller{
}
.post{
    margin: 0 auto;
    width: 500px;
}
</style>