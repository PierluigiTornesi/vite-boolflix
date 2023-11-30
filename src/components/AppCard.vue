<script>
    export default{
        props:{
            movieObj: Object
        }
    }
</script>

<template>
  <section class="text-white text-left bg-dark border p-2">
    <div class="dim">
        <div>Titolo: {{ movieObj.title ? movieObj.title : movieObj.name }}</div>
        <div>Titolo originale: {{ movieObj.original_title ? movieObj.original_title : movieObj.original_name }}</div>
        <div>
            <div>Lingua: {{ movieObj.original_language }}</div>
        </div>
        <div>Voto: {{ Math.round(movieObj.vote_average /2) }}</div>
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
