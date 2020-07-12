<template>
  <v-container class="fill-width" fluid>
    <v-row v-if="this.loading">
      <v-col class="centered">
        <v-row class="ma-2">
          <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" class="ma-2">
            <v-col class="col-12">
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div id="imgLoadXs" class="v-skeleton-loader__image v-skeleton-loader__bone"></div>
              </div>
            </v-col>
            <v-col class="col-12">
              <v-skeleton-loader ref="skeleton" type="heading" width="100%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="50%" class="mx-0"></v-skeleton-loader>
              <br />
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="30%" class="mx-0"></v-skeleton-loader>
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
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
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
                class="v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div id="imgLoad" class="v-skeleton-loader__image v-skeleton-loader__bone"></div>
              </div>
            </v-col>
            <v-col class="col-6">
              <v-skeleton-loader ref="skeleton" type="heading" width="100%" class="mx-0"></v-skeleton-loader>
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="50%" class="mx-0"></v-skeleton-loader>
              <br />
              <br />
              <v-skeleton-loader ref="skeleton" type="text" width="30%" class="mx-0"></v-skeleton-loader>
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
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"></div>
              </div>
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
        <v-row v-if="this.$vuetify.breakpoint.name == 'xs'" class="ma-2">
          <v-col class="col-12">
            <v-img
              class="centered"
              :src="infoAlbum[0].cover_big"
              alt="Album cover"
              :title="infoAlbum[0].title"
            ></v-img>
          </v-col>
          <v-col class="col-12">
            <h1>{{ infoAlbum[0].title }}</h1>
            <h3>By: {{ infoAlbum[0].artist }}</h3>
            <br />
            <br />
            <p>Download:</p>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download small"
                @click="download(infoAlbum[0].cover_small, '_small')"
              >Small (56x56)</v-btn>
            </v-row>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download medium"
                @click="download(infoAlbum[0].cover_medium, '_medium')"
              >Medium (250x250)</v-btn>
            </v-row>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download large"
                @click="download(infoAlbum[0].cover_big, '_big')"
              >Large (500x500)</v-btn>
            </v-row>
            <v-row>
              <v-btn
                outlined
                color="primary"
                name="Download XL"
                @click="download(infoAlbum[0].cover_xl, '_xl')"
              >XL (1000x1000)</v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col class="col-6">
            <v-img
              class="centered"
              :src="infoAlbum[0].cover_big"
              max-width="45vw"
              alt="Album cover"
              :title="infoAlbum[0].title"
            ></v-img>
          </v-col>
          <v-col class="col-6">
            <h1>{{ infoAlbum[0].title }}</h1>
            <h3>By: {{ infoAlbum[0].artist }}</h3>
            <br />
            <br />
            <p>Download:</p>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download small"
                @click="download(infoAlbum[0].cover_small, '_small')"
              >Small (56x56)</v-btn>
            </v-row>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download medium"
                @click="download(infoAlbum[0].cover_medium, '_medium')"
              >Medium (250x250)</v-btn>
            </v-row>
            <v-row class="mb-2">
              <v-btn
                outlined
                color="primary"
                name="Download large"
                @click="download(infoAlbum[0].cover_big, '_big')"
              >Large (500x500)</v-btn>
            </v-row>
            <v-row>
              <v-btn
                outlined
                color="primary"
                name="Download XL"
                @click="download(infoAlbum[0].cover_xl, '_xl')"
              >XL (1000x1000)</v-btn>
            </v-row>
          </v-col>
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

export default {
  name: "album",
  data() {
    return {
      loading: true,
      infoAlbum: [],
      esiste: { esiste: true }
    };
  },
  created: function() {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    this.scrollToTop();
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
            var albumData = {
              title: response.data.title,
              cover_small: response.data.cover_small,
              cover_medium: response.data.cover_medium,
              cover_big: response.data.cover_big,
              cover_xl: response.data.cover_xl,
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
        .then(() => (this.loading = false));
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    download(link, size) {
      var FileSaver = require("file-saver");
      FileSaver.saveAs(link, this.infoAlbum[0].title + size + ".jpg");
    }
  }
};
</script>

<style scoped>
#imgLoad {
  width: 45vw;
  height: 45vw;
}
#imgLoadXs {
  width: 100%;
  height: 60vh;
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