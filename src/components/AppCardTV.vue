<script>


    export default{
        props:{
            tv: Object
        }
    }
</script>

<template>
  <section class="text-white text-left bg-dark border p-2">
    <div class="dim">
        <div>Titolo: {{ tv.name }}</div>
        <div>Titolo originale: {{ tv.original_name }}</div>
        <div>
            <div>Lingua: {{ tv.original_language }}</div>
            <div>Paese: {{ tv.origin_country[0] ? tv.origin_country[0] : 'sconosciuto' }}</div>
        </div>
        <div>Voto: {{ tv.vote_average }}</div>
        <div>Overview: {{ tv.overview ? tv.overview : 'nessuna' }}</div>
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
