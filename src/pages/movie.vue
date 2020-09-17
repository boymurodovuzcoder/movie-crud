<template>
    <div class="container container-fluid">
        <h3 class="text-center">movie</h3>
        <router-link :to="{name: 'movieList'}"><button type="button" style="margin-bottom: 1rem" class="btn btn-outline-dark">back to movie list</button></router-link>
        <button type="button" class="btn btn-outline-danger" style="margin-bottom: 1rem; margin-left: 1rem;" @click="deleteMovie">delete this movie  </button>
        <router-link :to="{name: 'editMovie', params: {id: this.$route.params.id, title: this.$route.params.title}}"><button type="button" class="btn btn-outline-warning" style="margin-bottom: 1rem; margin-left: 1rem;">edit</button></router-link>
        <p class="text-muted">
            {{this.$route.params.title}}
        </p>
        <div v-if="movie===null">
            failed to get date..
        </div>
        <table v-else class="table responsive">
            <thead class="thead-dark">
                <tr style="text-align:center;">
                    <th>
                        directors
                    </th>
                    <th>
                        duration
                    </th>
                    <th>
                        file info
                    </th>
                    <th>
                        is free
                    </th>
                    <th>
                        is new
                    </th>
                    <th>
                        is serial
                    </th>
                    <th>
                        logo image
                    </th>
                    <th>
                        plot
                    </th>
                    <th>
                        producers
                    </th>
                    <th>
                        rating
                    </th>
                    <th>
                        release year
                    </th>
                    <th>
                        scene image
                    </th>
                    <th>
                        size
                    </th>
                    <th>
                        slogan
                    </th>
                    <th>
                        title
                    </th>
                    <th>
                        views
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{movie.directors[0]}}
                    </td>
                    <td>
                        {{movie.duration}}
                    </td>
                    <td>
                        <div>
                            file name: {{movie.file_info[0].file_name}}
                        </div>
                        <div>
                            quality: {{movie.file_info[0].quality}}
                        </div>
                    </td>
                    <td>
                        {{movie.is_free}}
                    </td>
                    <td>
                        {{movie.is_new}}
                    </td>
                    <td>
                        {{movie.is_serial}}
                    </td>
                    <td>
                        <img :src="movie.logo_image.url" alt="logo image">
                    </td>
                    <td>
                        {{movie.plot}}
                    </td>
                    <td>
                        {{movie.producers[0]}}
                    </td>
                    <td>
                        {{movie.rating}}
                    </td>
                    <td>
                        {{movie.release_year}}
                    </td>
                    <td>
                        <img :src="movie.scene_image.url" alt="scene image">
                    </td>
                    <td>
                        {{movie.size}}
                    </td>
                    <td>
                        {{movie.slogan}}
                    </td>
                    <td>
                        {{movie.title}}
                    </td>
                    <td>
                        {{movie.views}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'movie',
  data () {
    return {
      movie: null
    }
  },
  created () {
    var self = this
    axios.get(`https://api.voxe.tv/v1/movies/${this.$route.params.id}`)
      .then(res => {
        console.log(res.status)
        self.movie = res.data.movie
      })
      .catch(err => console.log(err))
  },
  methods: {
    deleteMovie () {
      axios.delete(`https://api.voxe.tv/v1/movies/${this.$route.params.id}`)
        .then(res => {
          console.log(res.status)
          this.movie = null
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
    table {
        display: block;
        overflow: auto;
    }
    img {
        width: 6rem;
    }
</style>
