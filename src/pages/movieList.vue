<template>
  <div class="container container-fluid">
    <h3 class="text-center">my first crud app</h3>
    <router-link :to="{name: 'add'}"><button type="button" style="margin-bottom: 1rem" class="btn btn-outline-dark">add movie</button></router-link>
    <p class="text-muted">
      list of all movies:
    </p>
    <div class="list-group">
      <div v-for="movie in listMovies" :key="movie.id">
        <router-link :to="{name: 'movie', params: {title: movie.title, id: movie.id}}" class="list-group-item list-group-item-action">{{movie.title}}</router-link>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'movieList',
  data () {
    return {
      listMovies: null
    }
  },
  methods: {
    getMoviesList () {
      var self = this
      axios.get('https://api.voxe.tv/v1/movies')
        .then(res => {
          console.log(res.status)
          self.listMovies = res.data.movies
        })
        .catch(err => console.log(err))
    }
  },
  created () {
    this.getMoviesList()
  }
}
</script>
