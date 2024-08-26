<script setup>
import {ref} from 'vue'
const fruits = ref([
    {   id: 1,
        name: 'Apple',
        quantity: 20,
        category: 'fruits',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg',
        detail: {
            description: 'A sweet, crunchy fruit that is often red or green in color. Apples are a popular snack and used in many recipes.',
            type: 'Fresh',
            pricePerUnit: '0.5$',
            origin: 'USA',
            nutritionalValue: {
                calories: '95',
                carbs: '25g',
                fiber: '4g',
                sugar: '19g',
                protein: '0.5g'
            }
        },
        tags: ['sweet', 'crunchy', 'snack', 'red', 'green', 'popular']
    },
    {
        id:2,
        name: 'Kiwi',
        quantity: 2,
        category: 'fruits',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Kiwi_aka.jpg',
        detail: {
            description: 'A small, brown fruit with a fuzzy skin and bright green flesh. Known for its tangy and sweet flavor.',
            type: 'Fresh',
            pricePerUnit: '0.8$',
            origin: 'New Zealand',
            nutritionalValue: {
                calories: '42',
                carbs: '10g',
                fiber: '2g',
                sugar: '6g',
                protein: '0.8g'
            }
        },
        tags: ['small', 'brown', 'fuzzy', 'tangy', 'sweet', 'green']
    },
    {
        id: 3,
        name: 'Mango',
        quantity: 10,
        category: 'fruits',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg',
        detail: {
            description: 'A tropical stone fruit with juicy, sweet flesh and a large pit. Mangos are enjoyed fresh, in smoothies, and in various dishes.',
            type: 'Fresh',
            pricePerUnit: '1.5$',
            origin: 'India',
            nutritionalValue: {
                calories: '99',
                carbs: '25g',
                fiber: '3g',
                sugar: '23g',
                protein: '1.4g'
            }
        },
        tags: ['tropical', 'juicy', 'sweet', 'large pit', 'fresh', 'smoothies']
    },
    {
        id: 4,
        name: 'Tomato',
        quantity: 10,
        category: 'vegetable',
        imageURL: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg',
        detail: {
            description: 'A red, juicy vegetable (often botanically considered a fruit) commonly used in salads, sauces, and many dishes.',
            type: 'Fresh',
            pricePerUnit: '0.3$',
            origin: 'Italy',
            nutritionalValue: {
                calories: '22',
                carbs: '5g',
                fiber: '1.5g',
                sugar: '3g',
                protein: '1g'
            }
        },
        tags: ['red', 'juicy', 'vegetable', 'salads', 'sauces', 'dishes']
    }
])

const cart= ref([])



function increase(fruit){

    fruit.quantity +=1;
    cart.value.push(fruit)

    console.log(`Qunatity: ${fruit.name} : ${fruit.quantity}`)
    console.log(fruit)
}

function decrease(fruit){
    fruit.quantity -=1;
    console.log(`Qunatity: ${fruit.name} : ${fruit.quantity}`)
}



</script>

<template>
    <div class="container">
        <h2 class="header">Enter the quantity of the fruits</h2>
        
  <section class="sub-container">
   
    <div :key="fruit.id" v-for="fruit in fruits" class="item">
        <h3 class="sub-header">
            {{ 
                fruit.name }}
        </h3>
    
    <img class="img" :src="fruit.imageURL">
    <div class="button">
        <p class="price">
            {{ 
                fruit.detail.pricePerUnit }}
        </p>
        <button type="button" class="minus" @click="decrease(fruit)"> - </button>
        <p > Quantity 
            {{ fruit.quantity }}
        </p>
        <button type="button" class="plus" @click="increase(fruit)"> + </button>
            

    </div>
</div>


  </section>
</div>
</template>

<style scoped>
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

.container{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
 
}

.sub-container{
    border: 1px solid black;
    
}
.button{
  display: flex;
  justify-content: center;
  gap: 10px;
  border: 1px solid black;

  padding: 8px 8px;


}
.plus{
    width: 20px;
    height: 20px;
}

.minus{
    width: 20px;
    height: 20px;
}


.img{
 width: 350px;
 height: 350px;
}

.sub-header{
    display: flex;
   justify-content: center;
}

.price{
   padding-right: 80px;
}

</style>


