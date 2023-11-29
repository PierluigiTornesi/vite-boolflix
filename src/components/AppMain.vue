<script>
import { store } from '../store';
import AppCard from './AppCard.vue';
import AppCardTV from './AppCardTV.vue';



    export default{
        data(){
            return{
                store
            }
        },
    components: { AppCard, AppCardTV }
}
</script>

<template>
    <main class=" bg-secondary">
        <div class=" container">
            <div class="row d-flex ">
                <h2>Movie</h2>
                <div class="col-4" v-for="movie in store.arrayMovies">
                    <AppCard  :movie = movie />
                </div>
            </div>  
        </div>
        <div class=" container">
            <div class="row d-flex ">
                <h2>TVs</h2>
                <div class="col-4" v-for="tv in store.arrayTVs">
                    <AppCardTV  :tv = tv />
                </div>
            </div>  
        </div>
    </main>
</template>

<style scoped>
</style>
