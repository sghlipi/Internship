<script setup lang="ts">
import {ref} from 'vue'
import {data} from "./Countries.json"

const searchQuery = ref('')
const filteredCountry = ref(null)
const searchFilteredCountries = ref(null)

const countries = ref(["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", 
        "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", 
        "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", 
        "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo, Democratic Republic of the", 
        "Congo, Republic of the", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", 
        "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", 
        "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", 
        "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", 
        "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, North", "Korea, South", "Kosovo", "Kuwait", 
        "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
        "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", 
        "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", 
        "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", "Oman", "Pakistan", "Palau", 
        "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", 
        "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", 
        "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", 
        "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", 
        "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
        "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", 
        "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
      ]);

const countryFiltering = () => {
    if(!searchQuery.value){

        filteredCountry.value = [];
    }else{
    filteredCountry.value = countries.value.filter((country)=>{
        if (country.toLowerCase().includes(searchQuery.value.toLowerCase())) {
            return country;
        }
    })
}
    console.log(filteredCountry.value);
    }

    const filterCountryNames = () =>{
    searchFilteredCountries.value = countries.value.filter((country)=>{
        if(country.toLowerCase().includes(searchQuery.value.toLowerCase())){
            return country
        }
    })
   console.log(searchFilteredCountries.value)
}
   
const selectCountry = (country)=>{
    searchQuery.value = country
}

    

</script>

<template>
    <section>
    <div>
      <section>
        <input type="text" v-model="searchQuery" @input="filterCountryNames" placeholder="Search Countries...">
        <article>
            <div class="option" :key="index" v-for="country,index in searchFilteredCountries" @click="()=>selectCountry(country)">
                <img :src="`/path/to/Countries${country}.png`" alt="" class="flag-image">
                        
                {{ country}}

            </div>
        </article>
      </section>
     
      <button @click="countryFiltering">Search</button>
     
<div v-if="filteredCountry">
    <div v-if="filteredCountry.length > 0">
      <section class="container">
        <div :key="country" v-for="country in filteredCountry" class="card">

<!-- <header class="head">
    <h3 >Name: {{country }}</h3>

</header> -->

</div>
      </section>

      </div>
      <div v-else>
        No Flights Found.

      </div>
</div>

    </div>
    </section>
</template>

<style scoped>

</style>