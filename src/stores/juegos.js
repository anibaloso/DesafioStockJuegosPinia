import axios from "axios";
import { defineStore } from "pinia";

export const useJuegosStore = defineStore({
    id: 'juegos',
    state: () => ({
        juegos: []
    }),
    actions: {
        async fetchJuegos() {
            try {
                const url = '/api/juegos.json'
                const { data } = await axios.get(url)
                this.juegos = data
            } catch (error) {
                console.error('Problema al buscar los juegos', error)
            }
        },
        increment(idx) {
            this.juegos[idx].stock++
        },
        decrement(idx) {
            if (this.juegos[idx].stock > 0) {
                this.juegos[idx].stock--
            }
        }


    },
})