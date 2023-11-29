<script>
import { store } from '../store';
import AppCard from './AppCard.vue';



    export default{
        data(){
            return{
                store
            }
        },
    components: { AppCard }
}
</script>

<template>
    <main class=" bg-secondary">
        <div class=" container">
            <div class="row d-flex ">
                <div class="col-4" v-for="movie in store.arrayMovies">
                    <AppCard  :movie = movie />
                </div>
            </div>  
        </div>
    </main>
</template>

<style scoped>
</style>
