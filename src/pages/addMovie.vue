<template>
    <div class="container container-fluid">
       <h3 class="text-center">
           add form
       </h3>
       <router-link :to="{name: 'movieList'}"><button type="button" style="margin-bottom: 1rem" class="btn btn-outline-dark">back to movie list</button></router-link>
       <p class="text-muted">
         let's add new movie
        </p>

        <div class="form-group">
            <label for="title">enter title</label>
            <input type="input" class="form-control" id="title" placeholder="for ex: titanic" v-model="newMovie.title">
        </div>

        <div class="form-group">
            <label for="directors">enter directors</label>
            <input type="input" class="form-control" id="directors" placeholder="for ex: james kameron, stiven stilsberg" v-model="newMovie.directors">
        </div>

        <div class="form-group">
            <label for="duration">enter duration</label>
            <input type="number" class="form-control" id="duration" placeholder="for ex: 120" v-model="newMovie.duration">
        </div>

        <div style="border: 1px solid black; border-radius: 5px; padding: 1rem; border-color: #c6c6c6; margin-top: 1rem;">
            <h4>file info</h4>
            <div class="form-group">
                <label for="file_name">enter a file name</label>
                <input type="input" class="form-control" id="file_name" placeholder="for ex: titanik" v-model="newMovie.file_info[0].file_name">
            </div>

            <div class="form-group">
                <h5>choose quality</h5>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality" value="hd" v-model="newMovie.file_info[0].quality">
                <label class="form-check-label" for="quality">
                    HD
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality2" value="sd" v-model="newMovie.file_info[0].quality">
                <label class="form-check-label" for="quality2">
                    SD
                </label>
                </div>
                <div class="form-check">
                <input class="form-check-input" type="radio" name="quality" id="quality3" value="fullhd" v-model="newMovie.file_info[0].quality">
                <label class="form-check-label" for="quality3">
                    FULL HD
                </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <h5>is it free?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_free" id="is_free" value="true" v-model="newMovie.is_free">
            <label class="form-check-label" for="is_free">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_free" id="is_free2" value="false" v-model="newMovie.is_free">
            <label class="form-check-label" for="is_free2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <h5>is it new?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_new" id="is_new" value="true" v-model="newMovie.is_new">
            <label class="form-check-label" for="is_new">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_new" id="is_new" value="false" v-model="newMovie.is_new">
            <label class="form-check-label" for="is_new2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <h5>is it serial?</h5>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_serial" id="is_serial" value="true" v-model="newMovie.is_serial">
            <label class="form-check-label" for="is_serial">
                yes
            </label>
            </div>
            <div class="form-check">
            <input class="form-check-input" type="radio" name="is_serial" id="is_serial" value="false" v-model="newMovie.is_serial">
            <label class="form-check-label" for="is_serial2">
                no
            </label>
            </div>
        </div>

        <div class="form-group">
            <label for="logo_image">enter a logo image url</label>
            <input type="input" class="form-control" id="logo_image" placeholder="enter url for an image" v-model="newMovie.logo_image">
        </div>

        <div class="form-group">
            <label for="plot">enter plot</label>
            <textarea class="form-control" id="plot" rows="5" v-model="newMovie.plot"></textarea>
        </div>

        <div class="form-group">
            <label for="producers">enter producers</label>
            <input type="input" class="form-control" id="producers" placeholder="for ex: james kameron" v-model="newMovie.producers">
        </div>

        <div class="form-group">
            <label for="rating">enter rating</label>
            <input type="number" class="form-control" id="rating" placeholder="for ex: 5" v-model="newMovie.rating">
        </div>

        <div class="form-group">
            <label for="release_year">enter a release year</label>
            <input type="number" class="form-control" id="release_year" placeholder="for ex: 2018" v-model="newMovie.release_year">
        </div>
        <div class="form-group">
            <label for="scene_image">enter a scene image url</label>
            <input type="input" class="form-control" id="scene_image" placeholder="enter url for a scene image" v-model="newMovie.scene_image">
        </div>

        <div class="form-group">
            <label for="size">enter size of movie in gb</label>
            <input type="number" class="form-control" id="size" placeholder="for ex: 2" v-model="newMovie.size">
        </div>

        <div class="form-group">
            <label for="slogan">enter slogan</label>
            <input type="input" class="form-control" id="slogan" placeholder="for ex: goodness always wins!" v-model="newMovie.slogan">
        </div>

        <div class="form-group">
            <label for="views">enter a number of views</label>
            <input type="number" class="form-control" id="views" placeholder="for ex: 25000000" v-model="newMovie.views">
        </div>

        <button type="button" class="btn btn-outline-primary" style="margin-top: 1rem; margin-bottom: 1rem;" @click="addAction">add</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'addMovie',
  data () {
    return {
      newMovie: {
        actors: [],
        directors: 'string',
        duration: 0,
        category: '5f5c875e640164bf87169301',
        file_info: [{
          file_name: 'string',
          quality: 'hd'
        }],
        genres: [],
        is_free: true,
        is_new: true,
        is_serial: true,
        logo_image: 'string',
        plot: 'string',
        producers: 'string',
        rating: 0,
        release_year: 2020,
        scene_image: 'string',
        size: 0,
        slogan: 'string',
        title: 'string',
        views: 0,
        seasons: []
      }
    }
  },
  methods: {
    addAction () {
      this.newMovie.directors = [this.newMovie.directors]
      this.newMovie.producers = [this.newMovie.producers]
      this.newMovie.duration = JSON.parse(this.newMovie.duration)
      this.newMovie.rating = JSON.parse(this.newMovie.rating)
      this.newMovie.release_year = JSON.parse(this.newMovie.release_year)
      this.newMovie.size = JSON.parse(this.newMovie.size)
      this.newMovie.views = JSON.parse(this.newMovie.views)
      this.newMovie.is_free = JSON.parse(this.newMovie.is_free)
      this.newMovie.is_new = JSON.parse(this.newMovie.is_new)
      this.newMovie.is_serial = JSON.parse(this.newMovie.is_serial)

      axios.post('https://api.voxe.tv/v1/movies', this.newMovie)
        .then(res => console.log(res))
        .catch(err => console.log(err))

      this.newMovie = {
        actors: [],
        directors: 'string',
        duration: 0,
        category: '5f5c875e640164bf87169301',
        file_info: [{
          file_name: 'string',
          quality: 'hd'
        }],
        genres: [],
        is_free: true,
        is_new: true,
        is_serial: true,
        logo_image: 'string',
        plot: 'string',
        producers: 'string',
        rating: 0,
        release_year: 2020,
        scene_image: 'string',
        size: 0,
        slogan: 'string',
        title: 'string',
        views: 0,
        seasons: []
      }
    }
  }
}
</script>

<style scoped>
 .form-group {
     margin-top: 1rem;
 }
</style>
