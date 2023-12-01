<script>
import { store } from '../store.js';

export default{
  data(){
    return{
      store
    }
  },
}
</script>

<template>
  <header class="bg-dark d-flex justify-content-between ">
    <div class="d-flex align-items-center">
        <h1 class="text-danger p-1">BOOLFIX</h1>
    </div>
    <div class="d-flex align-items-center w-25 px-4">
        <input type="search" class="form-control" placeholder="Inserisci film" v-model.trim="store.searchText"/>
        <button @click="$emit('performSearch')" class="btn btn-light ms-2">Cerca</button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header{
  height: 100px;
}
</style>
