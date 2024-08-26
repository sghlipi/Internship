<script setup>
import { ref } from 'vue';

const username = ref('')
const password = ref('')
// const showValue = ref('')

const showData = () => {
    console.log(username.value)
    console.log(password.value)
    username.value = ''
    password.value = ''
}
</script>

<template>
   
    <section class="contain">
        
        <article class="main">
    
            <h3> Car Rental</h3>
            <section class="container-body">
                <p>Username</p>
                <input class="box" type="text" v-model="username">
    
                <p>Password</p>
                <input class="box" type="text" v-model="password">
            </section>
    
            <button class="register" @click="showData">SIGN IN</button>
    
            <a href="Forgot password" class="forgot-pwd">Forgot password?</a>
    
            <p>Don't have an account? <a href="Create One"></a>
            </p>
            <a href="or sign in with" class="create">Create One</a>
    
            <div class="btn">
                <button class="btn-desc">
                    <img class="image-icon" src="../google.png" alt="">Sign in with Google</button>
                <button class="btn-desc">
                    <img class="image-icon" src="../facebook.png" alt="">Sign in with Facebook</button>
            </div>
    
        </article>
    </section>
   
</template>

<style scoped>
*{
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

.main{
display: flex;
flex-direction: column;
align-items: center;
width: 60%;
padding: 80px;
    margin: 0 auto;
    background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLxzJE9PrhRtDF8tJNljGl4zt478lRLcEsxQ&s);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    color: white;
    font-size: 20px;
    gap: 20px;
    
 
}
.container-body{
padding: 10px;

}

.btn{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    
}

.btn-desc{
    background-color: rgb(242,242,242,242);
    border-radius: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;

}

.register{
    width: 50%;
    height: 40px;
    background-color: greenyellow;
    border-radius: 10px;

}

.box{
    width: 100%;
    height: 25px;
    border-radius: 10px;
}

.contain{
    background-image: url(https://media.istockphoto.com/id/1318075689/photo/road.jpg?s=1024x1024&w=is&k=20&c=VUgtMBAPDNz8b6tSNWZYZvkW6y2krFKVnsvfLqBzJu8=);
    background-repeat: no-repeat; 
    background-size: cover;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-icon{
    height: 20px;
    width: 20px;
   
}
</style>