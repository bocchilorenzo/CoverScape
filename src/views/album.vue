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
          <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" class="centered">
            <v-col class="col-12">
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
              <v-img
                v-else
                class="centered"
                :src="infoAlbum[0].cover_small"
                alt="Album cover"
                :title="infoAlbum[0].title"
              ></v-img>
            </v-col>
            <v-col class="col-12">
              <h1>{{ infoAlbum[0].title }}</h1>
              <h3>By: {{ infoAlbum[0].artist }}</h3>
              <br />
              <v-row>
                <v-select :items="sizes" outlined label="Choose size*"></v-select>
              </v-row>
              <v-row>
                <v-btn outlined color="primary" name="Download" @click="download()">Download</v-btn>
              </v-row>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-col class="col-6">
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
              <v-img
                v-else
                class="centered"
                :src="infoAlbum[0].cover_small"
                max-width="45vw"
                alt="Album cover"
                :title="infoAlbum[0].title"
              ></v-img>
            </v-col>
            <v-col class="col-6">
              <h1>{{ infoAlbum[0].title }}</h1>
              <h3>By: {{ infoAlbum[0].artist }}</h3>
              <br />
              <v-row>
                <v-select :items="sizes" outlined label="Choose size*"></v-select>
              </v-row>
              <v-row>
                <v-btn outlined color="primary" name="Download" @click="download()">Download</v-btn>
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
      loading: true,
      infoAlbum: [],
      esiste: { esiste: true },
      imageLoad: { loaded: true },
      sizes: [
        "56x56",
        "250x250",
        "500x500",
        "1000x1000",
        "1200x1200",
        "1400x1400"
      ]
    };
  },
  created: function() {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    this.getAlbum();
  },
  methods: {
    getAlbum() {
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
            this.pageTitle = response.data.title;
            this.infoAlbum.push(albumData);
          } else {
            this.esiste.esiste = false;
          }
        })
        .catch(error => {
          console.log(error);
          this.errored = true;
        })
        .then(() =>
          this.waitImg(this.infoAlbum[0].cover_small, this.imageLoad)
        );
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
        FileSaver.saveAs(link, this.infoAlbum[0].title + "_" + size + ".jpg");
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