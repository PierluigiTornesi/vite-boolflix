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
            //metodo per prendere l'url della bandiera della lingua
            getFlagPath(language){
                return new URL(`../assets/images/${language}.png`, import.meta.url).href;
            },
            //metodo per vedee se l'oggetto ha bandiera disponibile
            hasFlag(){
                return this.flags.includes(this.movieObj.original_language)
            },
            //metodo per prendere la copertina del film e della serie tv
            getImagePath(path){
                 return `https://image.tmdb.org/t/p/w342${path}`;
            },
            //metodo per controllare se il film o la serie tv ha una copertina
            hasImagePath(path){
                return (path !== null ? true : false)
            },
            //metodo per arrotondare il voto del film e della serie tv
            getVoteRounded(){
                return Math.ceil(this.movieObj.vote_average /2);
            }
        }
    }
</script>

<template>
  <section  class="text-white text-left bg-dark border p-2 d-flex flex-column align-items-center justify-content-center">
    <div class="copertina">
        <img v-if="hasImagePath(movieObj.poster_path)" :src="(getImagePath(movieObj.poster_path) )" alt="">
        <img v-else src="../assets/images/noImage.jpg" alt="no-image">
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
        min-height: 400px;
        width: 300px;
        font-weight: bold;
        margin: 0 auto;  
        display: none;
}

section:hover .dim{
    display: block;
}

section:hover .copertina{
    display: none;
}

.fa-star{
    color: yellow;
}

</style>
