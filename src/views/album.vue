<template>
  <v-container class="fill-width" fluid>
    <v-row v-if="this.loading">
      <v-col class="centered">
        <v-row class="centered">
          <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" class="ma-2">
            <v-col class="col-12">
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="imgContainer v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"></div>
              </div>
            </v-col>
            <v-col class="col-12">
              <v-skeleton-loader ref="skeleton" type="heading" width="100%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="50%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader type="list-item" style="margin: 0 auto"></v-skeleton-loader>
              <br />
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
              <br />
              <v-skeleton-loader ref="skeleton" type="paragraph"></v-skeleton-loader>
            </v-col>
          </v-row>
          <v-row v-else class="ma-2">
            <v-col class="col-6">
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="imgContainer v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"></div>
              </div>
            </v-col>
            <v-col class="col-6">
              <v-skeleton-loader ref="skeleton" type="heading" width="100%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="50%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader type="list-item" style="margin: 0 auto"></v-skeleton-loader>
              <br />
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
              <br />
              <v-skeleton-loader ref="skeleton" type="paragraph"></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else-if="esiste.esiste == false" class="d-flex justify-center">
      <v-container
        class="d-inline-flex justify-center flex-column align-center"
        style="border-radius: 50%; height:400px;width:400px; margin:10px"
      >
        <svg style="width:80%;max-width:200px;max-height:200px" viewBox="0 0 24 24">
          <path
            fill="#D81B60"
            d="M2,5.27L3.28,4L20,20.72L18.73,22L9,12.27V17.5A3.5,3.5 0 0,1 5.5,21A3.5,3.5 0 0,1 2,17.5A3.5,3.5 0 0,1 5.5,14C6.04,14 6.55,14.12 7,14.34V10.27L2,5.27M21,3V15.5C21,16.5 20.57,17.42 19.88,18.06L14.94,13.12C15.58,12.43 16.5,12 17.5,12C18.04,12 18.55,12.12 19,12.34V6.47L10.17,8.35L7.66,5.84L21,3Z"
          />
        </svg>
        <p style="width: 60%; text-align: center">This album doesn't exist</p>
      </v-container>
    </v-row>
    <v-row v-else>
      <v-col class="centered">
        <v-row class="centered">
          <v-row class="centered">
            <v-col :class="this.$vuetify.breakpoint.name == 'xs' ? 'col-12':'col-6'">
              <div
                v-if="imageLoad.loaded"
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="imgContainer v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"></div>
              </div>
              <div v-else>
                <v-img
                  class="centered"
                  :src="mode == 'deezer' ? infoAlbum[0].cover_small : infoAlbum[0].cover_large"
                  :max-width="this.$vuetify.breakpoint.name == 'xs' ? '':'45vw'"
                  alt="Album cover"
                  :title="infoAlbum[0].title"
                ></v-img>
                <p style="text-align:center">
                  <i v-if="mode == 'deezer'">The preview is 500x500</i>
                  <i v-else>The preview is 600x600</i>
                </p>
              </div>
            </v-col>
            <v-col :class="this.$vuetify.breakpoint.name == 'xs' ? 'col-12':'col-6'">
              <h1>{{ infoAlbum[0].title }}</h1>
              <h3>By: {{ infoAlbum[0].artist }}</h3>
              <br />
              <v-row>
                <v-select :items="sizes" outlined label="Choose size*"></v-select>
              </v-row>
              <v-row>
                <v-btn outlined color="primary" name="Download" @click="download()">Download</v-btn>
              </v-row>
              <v-row class="mt-6">
                <p
                  v-if="mode == 'deezer'"
                >*Note: 1400x1400 images aren't officially supported by Deezer. A 1200x1200 image might be downloaded instead (check the size after the download)</p>
                <p
                  v-else
                >*Note: maximum quality can have a resolution that ranges between 600x600 and 5000x5000. This depends on what Apple has on their server.</p>
              </v-row>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import { saveAs } from "file-saver";
import imgLoaderMixin from "../mixins/imgLoaderMixin";

export default {
  name: "album",
  mixins: [imgLoaderMixin],
  data() {
    return {
      mode: this.$route.name,
      loading: true,
      infoAlbum: [],
      esiste: { esiste: true },
      imageLoad: { loaded: true },
      sizes: []
    };
  },
  created: function() {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    if (this.$route.params.id != undefined) {
      this.getAlbum("deezer");
    } else {
      this.getAlbum("itunes");
    }
  },
  methods: {
    getAlbum(mode) {
      if (mode == "deezer") {
        var id = this.$route.params.id;
        axios({
          url: "https://api.deezer.com/album/" + id + "&output=jsonp",
          adapter: jsonpAdapter
        })
          .then(response => {
            if (response.data.error == undefined) {
              var i = response.data.cover_xl.lastIndexOf("1000x1000");
              var albumData = {
                title: response.data.title,
                cover_xxs: response.data.cover_small,
                cover_xs: response.data.cover_medium,
                cover_small: response.data.cover_big,
                cover_medium: response.data.cover_xl,
                cover_large:
                  response.data.cover_xl.substr(0, i) +
                  "1200x1200-000000-80-0-0.jpg",
                cover_xl:
                  response.data.cover_xl.substr(0, i) +
                  "1400x1400-000000-80-0-0.jpg",
                artist: response.data.artist["name"],
                share: response.data.share
              };
              this.infoAlbum.push(albumData);
              this.sizes = [
                "56x56",
                "250x250",
                "500x500",
                "1000x1000",
                "1200x1200",
                "1400x1400"
              ];
            } else {
              this.esiste.esiste = false;
            }
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .then(() =>
            this.waitImg(this.infoAlbum[0].cover_medium, this.imageLoad)
          );
      } else {
        var idArtist = this.$route.params.idArtist;
        var collectionId = this.$route.params.collectionId;
        axios({
          url:
            "https://itunes.apple.com/lookup?id=" + idArtist + "&entity=album",
          adapter: jsonpAdapter
        })
          .then(response => {
            if (response.data.resultCount != 0) {
              var found = false;
              var link_img = "";
              var i = 0;
              while (!found) {
                if (response.data.results[i].collectionId == collectionId) {
                  link_img = response.data.results[i].artworkUrl100;
                  found = true;
                }
                i++;
              }
              i--;
              var x = response.data.results[i].artworkUrl100.lastIndexOf(
                "100x100bb"
              );
              var albumData = {
                title: response.data.results[i].collectionName,
                cover_xxs: response.data.results[i].artworkUrl60,
                cover_xs: response.data.results[i].artworkUrl100,
                cover_small:
                  response.data.results[i].artworkUrl100.substr(0, x) +
                  "300x300bb.jpg",
                cover_medium:
                  response.data.results[i].artworkUrl100.substr(0, x) +
                  "450x450bb.jpg",
                cover_large:
                  response.data.results[i].artworkUrl100.substr(0, x) +
                  "600x600bb.jpg",
                cover_xl:
                  response.data.results[i].artworkUrl100.substr(0, x) +
                  "5000x5000bb.jpg",
                artist: response.data.results[i].artistName,
                share: response.data.results[i].collectionViewUrl
              };
              this.infoAlbum.push(albumData);
              this.sizes = [
                "60x60",
                "100x100",
                "300x300",
                "450x450",
                "600x600",
                "MAX QUALITY"
              ];
            } else {
              this.esiste.esiste = false;
            }
          })
          .catch(error => {
            console.log(error);
            this.errored = true;
          })
          .then(() => this.waitImg(this.infoAlbum[0].cover_xl, this.imageLoad));
      }
    },
    download() {
      var FileSaver = require("file-saver");
      if (
        document.getElementsByClassName("v-select__selection")[0] == undefined
      ) {
        this.$emit("snack", "Please select a size");
      } else {
        var size = document.getElementsByClassName("v-select__selection")[0]
          .innerHTML;
        var link = "";
        if (this.mode == "deezer") {
          switch (size) {
            case "56x56":
              link = this.infoAlbum[0].cover_xxs;
              break;
            case "250x250":
              link = this.infoAlbum[0].cover_xs;
              break;
            case "500x500":
              link = this.infoAlbum[0].cover_small;
              break;
            case "1000x1000":
              link = this.infoAlbum[0].cover_medium;
              break;
            case "1200x1200":
              link = this.infoAlbum[0].cover_large;
              break;
            case "1400x1400":
              link = this.infoAlbum[0].cover_xl;
              break;
          }
        } else {
          switch (size) {
            case "60x60":
              link = this.infoAlbum[0].cover_xxs;
              break;
            case "100x100":
              link = this.infoAlbum[0].cover_xs;
              break;
            case "300x300":
              link = this.infoAlbum[0].cover_small;
              break;
            case "450x450":
              link = this.infoAlbum[0].cover_medium;
              break;
            case "600x600":
              link = this.infoAlbum[0].cover_large;
              break;
            case "MAX QUALITY":
              link = this.infoAlbum[0].cover_xl;
              break;
          }
        }
        FileSaver.saveAs(
          link,
          this.infoAlbum[0].title + "_" + this.mode + "_" + size + ".jpg"
        );
      }
    }
  }
};
</script>

<style scoped>
.imgContainer {
  position: relative;
  width: 100%;
}
.imgContainer:before {
  content: "";
  display: block;
  padding-top: 100%; /* initial ratio of 1:1*/
}
.imgLoad {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
h1 {
  color: #feab2e;
}
h3 {
  color: #d81b60;
}
.btnLoad {
  width: 120px;
}
</style>