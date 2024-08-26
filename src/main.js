import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("./views/HomePage.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("./views/AboutPage.vue"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/event",
      name: "Event",
      component: () => import("./views/event.vue"),
    }

    ,{
      path:"/insta",
      name: "Insta",
      component: () => import("./views/insta.vue"),
    },
    {
      path:"/social",
      name:"Socials",
      component: () => import("./views/social.vue"),
    },
    {
      path:"/rental",
      name:"Rent",
      component: () => import("./views/rental.vue"),
    },
    {
      path:"/register",
      name:"Register",
      component: () => import("./views/register.vue"),
    },
    {
      path:"/booking/:type",
      name:"Booking",
      component: () =>import("./views/booking.vue")
    }

  ],
});



const app = createApp(App) 
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.mount('#app')


