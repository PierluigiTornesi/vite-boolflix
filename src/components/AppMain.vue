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
            <div class="row d-flex">
                <h2 class="text-center">Film trovati: </h2>
                <div class="col-4 p-1" v-for="movie in store.arrayMovies">
                    <AppCard  :movieObj = movie />
                </div>
            </div>  
        </div>
        <div class=" container">
            <div class="row d-flex ">
                <h2 class="text-center">Serie TV trovate:</h2>
                <div class="col-4 p-1" v-for="tv in store.arrayTVs">
                    <AppCard  :movieObj = tv />
                </div>
            </div>  
        </div>
    </main>
</template>

<style scoped>
main{
    height: calc(100vh - 100px);
    overflow-y: scroll;
}
</style>
