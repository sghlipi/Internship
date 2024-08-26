<script setup>
const numbers = [1,2,3,4,5]
const animals = {
  name: "Lion",
  type: "Wild animal",
  weight: "200kg"

}

for (let number of numbers) {
  console.log(number)
}

for(const key in animals){
  console.log(key, animals[key])
}
</script>

<template>
  <div :key="index" v-for="(value,index) in numbers">
    <h2>Numbers:
      {{
        value

      }}
      {{index}}

    </h2>
  </div>

  <div :key="key" v-for="(value, key) in animals ">
    {{
      value
    }}
    {{
      key
    }}
  </div>
</template>
