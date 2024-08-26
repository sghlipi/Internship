<script setup>
import ReactionComponent from './ReactionComponent.vue';

const props = defineProps({
    post: null
})
</script>

<template>
    <article class="post">
        <header class="head">
                <img :src="props.post.author.profile_image" class="author-image"/>

                <p>{{ props.post.author.name }}</p>
                <p>{{ props.post.date }}</p>
        </header>
            <div>
                <img :src="props.post.image" class="image"/>
                
            </div>
            <footer>

                <ReactionComponent  :reactions="props.post.reactions"/>
                <div class="caption">

                    <p>{{ props.post.author.name }}</p>
                    <p>{{ props.post.caption }}</p>
                </div>
            </footer>
    </article>

</template>

<style scoped>
.image{
    width: 500px;


}

.author-image{
    width: 60px;
    border-radius: 50%;
    height: 60px;
    object-fit: cover;
}

.head{
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
}

.caption{
    display: flex;
    align-items: center;
    gap: 10px;
}

</style>