<template>
    <div class="container container-fluid">
        <h3 class="text-center">edit <span style="color: #7c7c7c;">{{this.$route.params.title}}</span></h3>
        <router-link :to="{name: 'movieList'}"><button type="button" style="margin-bottom: 1rem" class="btn btn-outline-dark">back to movie list</button></router-link>
        <p class="text-muted">
            edit this movie
        </p>
        <div v-if="movie===null">
            failed to get date..
        </div>
        <div v-else>

        <div class="form-group">
            <label for="title">enter title</label>
            <input type="input" class="form-control" id="title" placeholder="for ex: titanic" v-model="movie.title">
        </div>

        <div class="form-group">
            <label for="directors">enter directors</label>
            <input type="input" class="form-control" id="directors" placeholder="for ex: james kameron, stiven stilsberg" v-model="movie.directors">
        </div>

        <div class="form-group">
            <label for="duration">enter duration</label>
            <input type="number" class="form-control" id="duration" placeholder="for ex: 120" v-model="movie.duration">
        </div>

        <div style="border: 1px solid black; border-radius: 5px; padding: 1rem; border-color: #c6c6c6; margin-top: 1rem;">
            <h4>file info</h4>
            <div class="form-group">
                <label for="file_name">enter a file name</label>
                <input type="input" class="form-control" id="file_name" placeholder="for ex: titanik" v-model="movie.file_info[0].file_name">
            </div>

            <div class="form-group">
                <h5>choose quality</h5>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality" value="hd" v-model="movie.file_info[0].quality">
                <label class="form-check-label" for="quality">
                    HD
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality2" value="sd" v-model="movie.file_info[0].quality">
                <label class="form-check-label" for="quality2">
                    SD
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality3" value="fullhd" v-model="movie.file_info[0].quality">
                <label class="form-check-label" for="quality3">
                    FULL HD
                </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <h5>is it free?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_free" id="is_free" value="true" v-model="movie.is_free">
            <label class="form-check-label" for="is_free">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_free" id="is_free2" value="false" v-model="movie.is_free">
            <label class="form-check-label" for="is_free2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <h5>is it new?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_new" id="is_new" value="true" v-model="movie.is_new">
            <label class="form-check-label" for="is_new">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_new" id="is_new" value="false" v-model="movie.is_new">
            <label class="form-check-label" for="is_new2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <h5>is it serial?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_serial" id="is_serial" value="true" v-model="movie.is_serial">
            <label class="form-check-label" for="is_serial">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_serial" id="is_serial" value="false" v-model="movie.is_serial">
            <label class="form-check-label" for="is_serial2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <label for="logo_image">enter a logo image url</label>
            <input type="input" class="form-control" id="logo_image" placeholder="enter url for an image" v-model="movie.logo_image">
        </div>

        <div class="form-group">
            <label for="plot">enter plot</label>
            <textarea class="form-control" id="plot" rows="5" v-model="movie.plot"></textarea>
        </div>

        <div class="form-group">
            <label for="producers">enter producers</label>
            <input type="input" class="form-control" id="producers" placeholder="for ex: james kameron" v-model="movie.producers">
        </div>

        <div class="form-group">
            <label for="rating">enter rating</label>
            <input type="number" class="form-control" id="rating" placeholder="for ex: 5" v-model="movie.rating">
        </div>

        <div class="form-group">
            <label for="release_year">enter a release year</label>
            <input type="number" class="form-control" id="release_year" placeholder="for ex: 2018" v-model="movie.release_year">
        </div>
        <div class="form-group">
            <label for="scene_image">enter a scene image url</label>
            <input type="input" class="form-control" id="scene_image" placeholder="enter url for a scene image" v-model="movie.scene_image">
        </div>

        <div class="form-group">
            <label for="size">enter size of movie in gb</label>
            <input type="number" class="form-control" id="size" placeholder="for ex: 2" v-model="movie.size">
        </div>

        <div class="form-group">
            <label for="slogan">enter slogan</label>
            <input type="input" class="form-control" id="slogan" placeholder="for ex: goodness always wins!" v-model="movie.slogan">
        </div>

        <div class="form-group">
            <label for="views">enter a number of views</label>
            <input type="number" class="form-control" id="views" placeholder="for ex: 25000000" v-model="movie.views">
        </div>
        <button type="button" class="btn btn-outline-primary" style="margin-top: 1rem; margin-bottom: 1rem;" @click="updateAction">update</button>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'editMovie',
  data () {
    return {
      movie: null
    }
  },
  methods: {
    updateAction () {
      this.movie.category = '5f5c875e640164bf87169301'
      this.movie.directors = [this.movie.directors.toString()]
      this.movie.producers = [this.movie.producers.toString()]
      this.movie.duration = JSON.parse(this.movie.duration)
      this.movie.rating = JSON.parse(this.movie.rating)
      this.movie.release_year = JSON.parse(this.movie.release_year)
      this.movie.size = JSON.parse(this.movie.size)
      this.movie.views = JSON.parse(this.movie.views)
      this.movie.is_free = JSON.parse(this.movie.is_free)
      this.movie.is_new = JSON.parse(this.movie.is_new)
      this.movie.is_serial = JSON.parse(this.movie.is_serial)
      this.movie.logo_image = this.movie.logo_image.url
      this.movie.scene_image = this.movie.scene_image.url
      this.movie.genres = []
      this.movie.actors = []

      axios.put(`https://api.voxe.tv/v1/movies/${this.$route.params.id}`, this.movie)
        .then(res => console.log(res.status))
        .catch(err => console.log(err))
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
  }
}
</script>
