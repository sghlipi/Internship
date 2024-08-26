<script setup>
const props = defineProps({
    airline: null
});
const {airline} = props

</script>

<template>
            <article
          class="airline-card"
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
