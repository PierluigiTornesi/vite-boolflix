import { reactive } from "vue";

export const store = reactive({
  apiKey: "3b0dfb37c39e475c26c4d6d82946cd29",
  baseUrlMovie:"https://api.themoviedb.org/3/search/movie",
  baseUrlTV:"https://api.themoviedb.org/3/search/tv",
  loading:false,
  arrayMovies:[],
  arrayTVs:[],
  searchText: "",
});