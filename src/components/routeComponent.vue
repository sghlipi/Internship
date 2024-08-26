<script setup lang="ts">
import { ref } from "vue";
import data  from "../airline.json";

const searchFrom = ref("");
const searchTo = ref("");

const airlinesData = ref(null);
const Location = ref([
  "Kathmandu",
  "Pokhara",
  "Bharatpur",
  "Bhadrapur",
  "Biratnagar",
  "Lukla",
  "Nepalgunj",
  "Simara",
  "Bhairahawa",
  "Tumlingtar",
  "Janakpur",
  "Jomsom",
]);

const filteredRoutesFrom = ref(null);
const filteredRoutesTo = ref(null);

const RouteFilteringFrom = () => {
  if (!searchFrom.value) {
    filteredRoutesFrom.value = [];
  } else {
    filteredRoutesFrom.value = Location.value.filter((route) => {
      if (route.toLowerCase().includes(searchFrom.value.toLowerCase())) {
        return route;
      }
    });
  }
  console.log(filteredRoutesFrom.value, searchFrom.value);
};

const RouteFilteringTo = () => {
  if (!searchTo.value) {
    filteredRoutesTo.value = [];
  } else {
    filteredRoutesTo.value = Location.value.filter((route) => {
      if (route.toLowerCase().includes(searchTo.value.toLowerCase())) {
        return route;
      }
    });
  }
  console.log(filteredRoutesTo.value, searchTo.value);
};

const Search = () => {
  airlinesData.value = data.filter((airline) => {
    if (searchFrom.value || searchTo.value) {
      if (
        airline.from.toLowerCase().includes(searchFrom.value.toLowerCase()) &&
        airline.to.toLowerCase().includes(searchTo.value.toLowerCase())
      ) {
        return airline;
      }
    }
  });
  console.log(airlinesData.value);
};

const selectRouteFrom = (route) => {
  searchFrom.value = route;
};

const selectRouteTo = (route) => {
  searchTo.value = route;
};
</script>

<template>
  <!-- main section starts here -->
  <article class="main">
    <section>
      <div class="container-from">
        <section>
          <input
            type="text"
            v-model="searchFrom"
            placeholder="From"
            @input="RouteFilteringFrom"
          />
        </section>

        <div v-if="filteredRoutesFrom">
          <div v-if="filteredRoutesFrom.length > 0">
            <section class="container-from">
              <div
                :key="index"
                v-for="(route, index) in filteredRoutesFrom"
                class="card"
                @click="
                  () => {
                    selectRouteFrom(route);
                  }
                "
              >
                {{ route }}
              </div>
            </section>
          </div>
          <div v-else>Location not Found.</div>
        </div>
      </div>
    </section>

    <section>
      <div class="container-To">
        <section>
          <input
            type="text"
            v-model="searchTo"
            placeholder="To"
            @input="RouteFilteringTo"
          />
        </section>

        <div v-if="filteredRoutesTo">
          <div v-if="filteredRoutesTo.length > 0">
            <section class="container-to">
              <div
                :key="index"
                v-for="(route, index) in filteredRoutesTo"
                class="card"
                @click="
                  () => {
                    selectRouteTo(route);
                  }
                "
              >
                {{ route }}
              </div>
            </section>
          </div>
          <div v-else>Location not Found.</div>
        </div>
      </div>
    </section>

    <button @click="Search">Search</button>
    <div v-if="airlinesData">
      <section class="list-container" v-if="airlinesData.length > 0">
        <article
          class="airline-card"
          v-for="(airline, index) in airlinesData"
          :key="index"
        >
          <h3> {{ airline.name }}</h3>

          <section class="info">
            <section class="time">
              <article class="col">
                <h4>{{ airline.flightDepartureTime }}</h4>
                <h4>{{ airline.from }}</h4>
              </article>

              <article class="col">
                <h4>{{ airline.flightLandingTime }}</h4>
                <h4>{{ airline.to }}</h4>
              </article>
            </section>

            

            <article class="info-duration">
              <div class="col">
                <p>Duration:</p>
                <p>{{ airline.flightDuration }}</p>
              </div>

              <div class="col">
                <p>Luggage:</p>
                <p>{{ airline.freeBaggage }}</p>
              </div>

              <div class="col">
                <p>Class:</p>
                <p>{{ airline.classCode }}</p>
              </div>
            </article>

            <article class="line">

</article>
            <div class="price col">
                <h4 class="actual-price">{{ airline.ticketPrice }}</h4>

                <h4>
                    {{ 
                      airline.ticketPrice- parseInt( (airline.discount/100)*airline.ticketPrice) }}
                </h4>
            </div>

          </section>
        </article>
      </section>

      <section v-else>Data not Found.</section>
    </div>
  </article>
</template>

<style scoped>
* {
  box-sizing: border-box;
}
.main {
  width: 70vw;
  margin: 0 auto;

}
.container {
  display: flex;
  align-items: flex-start;
}

.list-container{
    
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.col{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.airline-card {
  border: 1px solid black;
  border-radius: 8px;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
}

.time {
  display: flex;
  gap: 40px;
  width: 40%;
  padding: 0px 20px;
}

.info {
  display: flex;
  gap:10px;
}

.info-duration {
  display: flex;
  gap: 20px;
  align-items: center;
}

.actual-price{
    color:#EA2127;
    text-decoration: line-through;

}

.line{
    background-color:  #B1B1B1;
    width: 1px;
}

.price{
    flex: 1;
    display: flex;
    flex-direction:column ;
    justify-content: center;
    align-items: center;
}
.price p{
    height: fit-content;
} 
</style>
