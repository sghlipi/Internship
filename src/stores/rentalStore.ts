import { defineStore } from 'pinia'

export const useRentalStore = defineStore('rental', {
    state: ()=> ({
        payload: {
            pickUpLocation: '',
            dropOffLocation: '',
            pickUpDate: '',
            dropOffDate: ''
        },
        hirePayload: {
            pickUpLocation: '',
            dropOffLocation: '',
            pickUpDate: '',
            dropOffDate: '',
            hireDriver: ''
            
        },

    }),
    getters: {
        getPickUpLocation:(state) => state.payload.pickUpLocation
    },

    actions:{

    }
  })