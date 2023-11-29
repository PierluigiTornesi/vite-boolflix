<script>
    export default{
        props:{
            movie: Object
        }
    }
</script>

<template>
  <section class="text-white text-left bg-dark border p-2">
    <div class="dim">
        <div>Titolo: {{ movie.title }}</div>
        <div>Titolo originale: {{ movie.original_title }}</div>
        <div>
            <div>Lingua: {{ movie.original_language }}</div>
        </div>
        <div>Voto: {{ Math.round(movie.vote_average /2) }}</div>
        <div>Overview: {{ movie.overview ? movie.overview : 'nessuna' }}</div>
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
