<script>

import { useJuegosStore } from '@/stores/juegos';

import { mapStores } from 'pinia';


export default {
    computed: {
        ...mapStores(useJuegosStore)
    },
    created() {
        this.juegosStore.fetchJuegos()
    },
    methods: {
        increment(idx) {
            this.juegosStore.increment(idx)
        },
        decrement(idx) {
            this.juegosStore.decrement(idx)
        }
    }
}
</script>
<template>
    <div class="container">
        <h1>Tienda 32 bits</h1>
        <h4>Lista de juegos</h4>
        <table>
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Stock</th>
                    <th>Precio</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego, idx) in juegosStore.juegos" :key="idx">
                    <td>{{ juego.codigo }}</td>
                    <td>{{ juego.nombre }}</td>
                    <td>{{ juego.stock }}</td>
                    <td>{{ juego.precio }}</td>
                    <td><button @click="increment(idx)">+</button> <button @click="decrement(idx)">-</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style>
.container {
    text-align: center;
    display: flex;
    flex-direction: column;
    width: 800px;

}

th {
    border: 1.5px solid black;
}

td {
    border: 1px solid black;
    min-width: 4rem;
    padding: 2px 2rem 2px 1rem;
    text-align: center;
}
</style>