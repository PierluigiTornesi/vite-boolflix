<script>
import { store } from '../store';
import AppCard from './AppCard.vue';



    export default{
        data(){
            return{
                store
            }
        },
    components: { AppCard,}
}
</script>

<template>
    <main class=" bg-secondary">
        <div class=" container">
            <div class="row d-flex ">
                <h2>Movie</h2>
                <div class="col-4 p-1" v-for="movie in store.arrayMovies">
                    <AppCard  :movieObj = movie />
                </div>
            </div>  
        </div>
        <div class=" container">
            <div class="row d-flex ">
                <h2>TVs</h2>
                <div class="col-4 p-1" v-for="tv in store.arrayTVs">
                    <AppCard  :movieObj = tv />
                </div>
            </div>  
        </div>
    </main>
</template>

<style scoped>
</style>
