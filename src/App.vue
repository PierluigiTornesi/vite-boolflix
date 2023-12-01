<script>
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import { store } from './store.js';
import AppMain from "./components/AppMain.vue";

  export default{
    data(){
      return{
        store
      }
    },
    components: { AppHeader, AppMain },
    methods: {
    handleSearch() {
      //richiesta per movie
      console.log("cerco film e serie tv");
        axios.get(`${this.store.baseUrl}/search/movie`, {
            params: {
              query: this.store.searchText,
              api_key: this.store.apiKey,
            },
          })
          .then((resp) => {
            this.store.arrayMovies = resp.data.results;
          });
          //richiesta per serie tv
        axios.get(`${this.store.baseUrl}/search/tv`, {
            params: {
              query: this.store.searchText,
              api_key: this.store.apiKey,
            },
          })
          .then((resp) => {
            this.store.arrayTVs = resp.data.results;
          });
      },
    },
  }
</script>

<template>
  <AppHeader @performSearch="handleSearch" />
  <AppMain />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
