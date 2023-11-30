<script>
    export default{
        props:{
            movieObj: Object
        },
        data(){
            return{
                flags:["de","en","es","fr","it"]
            }
        },
        methods:{
            getFlagPath(language){
                return new URL(`../assets/images/${language}.png`, import.meta.url).href;
            },
            hasFlag(){
                return this.flags.includes(this.movieObj.original_language)
            },
            getImagePath(path){
                 return `https://image.tmdb.org/t/p/w342${path}`;
            },
            hasImagePath(path){
                return (path !== null ? true : false)
            },
            imageNot(){
                return "https://image.tmdb.org/t/p/"
            },
            getVoteRounded(){
                return Math.round(this.movieObj.vote_average /2);
            }
        }
    }
</script>

<template>
  <section  class="text-white text-left bg-dark border p-2 d-flex flex-column align-items-center">
    <div>
        <img v-if="hasImagePath(movieObj.poster_path)" :src="(getImagePath(movieObj.poster_path) )" alt="">
        <img v-else src="../assets/images/noImage.jpg" alt="">
    </div>
    <div class="dim">
        <div>Titolo: {{ movieObj.title ? movieObj.title : movieObj.name }}</div>
        <div>Titolo originale: {{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</div>
        <div>
            <p v-if="hasFlag()">Lingua
                <span>
                    <img :src="getFlagPath(movieObj.original_language)" alt="">
                </span>
            </p>
            <p v-else>Lingua: {{ movieObj.original_language }}</p>
        </div>
        <div>
            Voto:
            <i v-for="star in 5" class="fa-star " :class="star <= getVoteRounded() ? 'fa-solid' : 'fa-regular'"></i>
        </div>
        <div>Overview: {{ movieObj.overview ? movieObj.overview : 'nessuna' }}</div>
    </div>
  </section>
</template>

<style scoped>
section{
    height: 100%;
}
.dim{
        min-height: 300px;
        width: 300px;
        margin: 0 auto;   
}
</style>
