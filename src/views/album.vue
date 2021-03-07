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
                <div
                  class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"
                ></div>
              </div>
            </v-col>
            <v-col class="col-12">
              <v-skeleton-loader
                ref="skeleton"
                type="heading"
                width="100%"
                class="mx-0"
              ></v-skeleton-loader>
              <br />
              <v-skeleton-loader
                ref="skeleton"
                type="text"
                width="50%"
                class="mx-0"
              ></v-skeleton-loader>
              <br />
              <v-skeleton-loader
                type="list-item"
                style="margin: 0 auto"
              ></v-skeleton-loader>
              <br />
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div
                  class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"
                ></div>
              </div>
              <br />
              <v-skeleton-loader
                ref="skeleton"
                type="paragraph"
              ></v-skeleton-loader>
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
                <div
                  class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"
                ></div>
              </div>
            </v-col>
            <v-col class="col-6">
              <v-skeleton-loader
                ref="skeleton"
                type="heading"
                width="100%"
                class="mx-0"
              ></v-skeleton-loader>
              <br />
              <v-skeleton-loader
                ref="skeleton"
                type="text"
                width="50%"
                class="mx-0"
              ></v-skeleton-loader>
              <br />
              <v-skeleton-loader
                type="list-item"
                style="margin: 0 auto"
              ></v-skeleton-loader>
              <br />
              <div
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="v-skeleton-loader mt-1 mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div
                  class="btnLoad v-skeleton-loader__button v-skeleton-loader__bone"
                ></div>
              </div>
              <br />
              <v-skeleton-loader
                ref="skeleton"
                type="paragraph"
              ></v-skeleton-loader>
            </v-col>
          </v-row>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else-if="esiste.esiste == false" class="d-flex justify-center">
      <v-container
        class="d-inline-flex justify-center flex-column align-center"
        style="border-radius: 50%; height: 400px; width: 400px; margin: 10px"
      >
        <svg
          style="width: 80%; max-width: 200px; max-height: 200px"
          viewBox="0 0 24 24"
        >
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
            <v-col
              :class="
                this.$vuetify.breakpoint.name == 'xs' ? 'col-12' : 'col-6'
              "
            >
              <div
                v-if="imageLoad.loaded"
                data-v-2a3b5576
                aria-busy="true"
                aria-live="polite"
                role="alert"
                class="imgContainer v-skeleton-loader mx-0 v-skeleton-loader--is-loading theme--dark"
              >
                <div
                  class="imgLoad v-skeleton-loader__image v-skeleton-loader__bone"
                ></div>
              </div>
              <div v-else>
                <v-img
                  v-if="infoAlbum[0].media_embed == undefined"
                  class="centered"
                  :src="
                    mode == 'deezer'
                      ? infoAlbum[0].cover_small
                      : mode == 'lastfm'
                      ? infoAlbum[0].cover_load
                      : infoAlbum[0].cover_large
                  "
                  :max-width="
                    this.$vuetify.breakpoint.name == 'xs' ? '' : '45vw'
                  "
                  alt="Album cover"
                  :title="infoAlbum[0].title"
                ></v-img>
                <div
                  v-else
                  v-html="infoAlbum[0].media_embed"
                  class="centered"
                  :max-width="
                    this.$vuetify.breakpoint.name == 'xs' ? '' : '45vw'
                  "
                ></div>
                <p style="text-align: center">
                  <i v-if="mode == 'deezer' || mode == 'lastfm'"
                    >The preview is 500x500</i
                  >
                  <i v-else-if="mode == 'itunes'">The preview is 600x600</i>
                </p>
              </div>
            </v-col>
            <v-col
              :class="
                this.$vuetify.breakpoint.name == 'xs' ? 'col-12' : 'col-6'
              "
            >
              <h1>{{ infoAlbum[0].title }}</h1>
              <h3 v-if="mode != 'reddit'">By: {{ infoAlbum[0].artist }}</h3>
              <h3 v-else>Uploaded by: {{ infoAlbum[0].user }}</h3>
              <a
                target="_blank"
                :href="infoAlbum[0].share"
                v-if="mode == 'deezer'"
              >
                <v-img
                  src="../assets/listen_deezer_dark.png"
                  height="49px"
                  width="168px"
                  alt="Listen on Deezer"
                  title="Listen on Deezer"
                  style="
                    display: inline-block;
                    overflow: hidden;
                    margin-top: 5px;
                  "
                ></v-img>
              </a>
              <a
                :href="
                  'https://geo.music.apple.com/us/album/' +
                    this.$route.params.collectionId +
                    '?app=music'
                "
                target="_blank"
                style="
                  display: inline-block;
                  overflow: hidden;
                  background: url(https://linkmaker.itunes.apple.com/en-us/badge-lrg.svg?&kind=album&bubble=apple_music)
                    no-repeat;
                  width: 158px;
                  height: 45px;
                  margin-top: 5px;
                "
                v-else-if="mode == 'itunes'"
              ></a>
              <v-row class="mt-2">
                <v-select
                  :items="sizes"
                  outlined
                  label="Choose size*"
                  v-if="mode != 'reddit'"
                ></v-select>
              </v-row>
              <v-row>
                <v-btn
                  v-if="mode != 'reddit'"
                  outlined
                  color="primary"
                  name="Download"
                  @click="download()"
                  >Download</v-btn
                >
                <v-btn v-else outlined color="primary" name="Download"
                  ><a :href="infoAlbum[0].cover_large" target="_blank"
                    >Open image</a
                  ></v-btn
                >
              </v-row>
              <v-row class="mt-6">
                <!--
                <p v-if="mode == 'deezer'">
                  *Note: 1400x1400 images aren't officially supported by Deezer.
                  A 1200x1200 image might be downloaded instead (check the size
                  after the download)
                </p>
                -->
                <p v-if="mode == 'itunes'">
                  *Note: highest quality can have a resolution that ranges
                  between 600x600 and 5000x5000. This depends on what Apple has
                  on their server.
                </p>
                <p v-else-if="mode == 'lastfm'">
                  *Note: LARGE+ quality can have a resolution that goes from
                  300x300 and up. It depends on what LastFM has on their server.
                </p>
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
import { unescape } from "html-escaper";
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
      sizes: [],
    };
  },
  created: function() {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    if (this.$route.name == "deezer") {
      this.getAlbum("deezer");
    } else if (this.$route.name == "itunes") {
      this.getAlbum("itunes");
    } else if (this.$route.name == "reddit") {
      this.getAlbum("reddit");
    } else {
      this.getAlbum("lastfm");
    }
  },
  methods: {
    getAlbum(mode) {
      if (mode == "deezer") {
        var id = this.$route.params.id;
        axios({
          url: "https://api.deezer.com/album/" + id + "&output=jsonp",
          adapter: jsonpAdapter,
        })
          .then((response) => {
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
                //cover_xl: response.data.cover_xl.substr(0, i) + "1400x1400-000000-80-0-0.jpg",
                artist: response.data.artist["name"],
                share: response.data.share,
              };
              this.infoAlbum.push(albumData);
              this.sizes = [
                "56x56",
                "250x250",
                "500x500",
                "1000x1000",
                "1200x1200",
                //"1400x1400",
              ];
            } else {
              this.esiste.esiste = false;
            }
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.esiste.esiste = false;
          })
          .then(() =>
            this.waitImg(this.infoAlbum[0].cover_medium, this.imageLoad)
          );
      } else if (mode == "itunes") {
        var idArtist = this.$route.params.idArtist;
        var collectionId = this.$route.params.collectionId;
        axios({
          url:
            "https://itunes.apple.com/lookup?id=" + idArtist + "&entity=album",
          adapter: jsonpAdapter,
        })
          .then((response) => {
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
                share: response.data.results[i].collectionViewUrl,
              };
              this.infoAlbum.push(albumData);
              this.sizes = [
                "60x60",
                "100x100",
                "300x300",
                "450x450",
                "600x600",
                "HIGHEST",
              ];
            } else {
              this.loading = false;
              this.esiste.esiste = false;
            }
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.esiste.esiste = false;
          })
          .then(() => this.waitImg(this.infoAlbum[0].cover_xl, this.imageLoad));
      } else if (mode == "reddit") {
        var id = this.$route.params.id;
        axios({
          url:
            "https://coverscape.herokuapp.com/api.php?mode=redditPost&id=" + id,
        })
          .then((res) => {
            var tmp = res.data[0].data.children[0].data.url.substring(18);
            var x = tmp.lastIndexOf(".");
            if (
              res.data[0].data.children[0].data.media_embed.content != undefined
            ) {
              var albumData = {
                title: res.data[0].data.children[0].data.title,
                cover_large: res.data[0].data.children[0].data.url,
                user: res.data[0].data.children[0].data.author,
                media_embed: unescape(
                  res.data[0].data.children[0].data.media_embed.content
                ),
              };
            } else {
              var albumData = {
                title: res.data[0].data.children[0].data.title,
                cover_large: res.data[0].data.children[0].data.url,
                user: res.data[0].data.children[0].data.author,
              };
            }

            this.infoAlbum.push(albumData);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            this.esiste.esiste = false;
          })
          .then(() => {
            if (this.infoAlbum[0].media_embed == undefined) {
              this.waitImg(this.infoAlbum[0].cover_large, this.imageLoad);
            } else {
              this.loading = false;
              this.imageLoad.loaded = false;
            }
          });
      } else {
        //TODO: check errors in the parameters
        var id = this.$route.params.coverUrl;
        if (
          this.$route.params.title != undefined &&
          this.$route.params.artist != undefined &&
          this.$route.params.coverUrl != undefined
        ) {
          var albumData = {
            title: this.$route.params.title,
            cover_xxs:
              "https://lastfm.freetls.fastly.net/i/u/34s/" +
              this.$route.params.coverUrl +
              ".png",
            cover_xs:
              "https://lastfm.freetls.fastly.net/i/u/64s/" +
              this.$route.params.coverUrl +
              ".png",
            cover_small:
              "https://lastfm.freetls.fastly.net/i/u/174s/" +
              this.$route.params.coverUrl +
              ".png",
            cover_medium:
              "https://lastfm.freetls.fastly.net/i/u/300x300/" +
              this.$route.params.coverUrl +
              ".png",
            cover_large:
              "https://lastfm.freetls.fastly.net/i/u/" +
              this.$route.params.coverUrl +
              ".png",
            cover_load:
              "https://lastfm.freetls.fastly.net/i/u/500x500/" +
              this.$route.params.coverUrl +
              ".png",
            artist: this.$route.params.artist,
          };
          this.infoAlbum.push(albumData);
          this.sizes = ["XXS", "XS", "SMALL", "MEDIUM", "LARGE+"];
          this.loading = false;
          this.waitImg(this.infoAlbum[0].cover_load, this.imageLoad);
        } else {
          this.esiste.esiste = false;
          this.loading = false;
        }
      }
    },
    download() {
      var FileSaver = require("file-saver");
      if (this.mode != "reddit") {
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
              /*
              case "1400x1400":
                link = this.infoAlbum[0].cover_xl;
                break;
                */
            }
          } else if (this.mode == "itunes") {
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
              case "HIGHEST":
                link = this.infoAlbum[0].cover_xl;
                break;
            }
          } else {
            switch (size) {
              case "XXS":
                link = this.infoAlbum[0].cover_xxs;
                break;
              case "XS":
                link = this.infoAlbum[0].cover_xs;
                break;
              case "SMALL":
                link = this.infoAlbum[0].cover_small;
                break;
              case "MEDIUM":
                link = this.infoAlbum[0].cover_medium;
                break;
              case "LARGE+":
                link = this.infoAlbum[0].cover_large;
                break;
            }
          }
          if (this.mode != "lastfm") {
            FileSaver.saveAs(link, "cover" + "_" + size + ".jpg");
          } else {
            FileSaver.saveAs(
              link,
              //this.infoAlbum[0].title + "_" + this.mode + "_" + size + ".jpg"
              "cover" + "_" + size + ".png"
            );
          }
        }
      }
    },
  },
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
