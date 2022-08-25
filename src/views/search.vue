<template>
  <v-main class="main">
    <v-row justify="center" v-if="loading == true">
      <v-row align="center" no-gutters>
        <v-col class="col-11 centered mb-3 px-5">
          <v-skeleton-loader
            type="list-item"
            style="margin: 0 auto"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col
          v-for="n in 12"
          :key="n"
          lg="2"
          md="3"
          sm="4"
          class="pb-3 px-1 col-6"
        >
          <v-skeleton-loader
            type="image"
            style="margin: 0 auto"
            height="150px"
            width="150px"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-row>
    <v-row justify="center" v-else>
      <searchBar @snack="snackMsg" />
      <v-tabs background-color="transparent" dark centered>
        <v-tab @click="tab = 'deezer'">Deezer</v-tab>
        <v-tab @click="tab = 'itunes'">iTunes</v-tab>
        <v-tab @click="tab = 'lastfm'">LastFM</v-tab>
        <v-tab @click="tab = 'reddit'">Reddit</v-tab>
        <v-tab-item class="padded">
          <imgContainer
            v-if="albumsDeezer.length != 0"
            :albums="albumsDeezer"
            :mode="'deezer'"
          ></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height: 200px; width: 400px"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width: 80%; max-width: 200px; max-height: 200px"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">
                No album found
              </p>
            </v-container>
          </v-col>
        </v-tab-item>
        <v-tab-item class="padded">
          <imgContainer
            v-if="albumsiTunes.length != 0"
            :albums="albumsiTunesSmall"
            :mode="'itunes'"
          ></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height: 200px; width: 400px"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width: 80%; max-width: 200px; max-height: 200px"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">
                No album found
              </p>
            </v-container>
          </v-col>
        </v-tab-item>
        <v-tab-item class="padded">
          <imgContainer
            v-if="albumsLastfm.length != 0"
            :albums="albumsLastfm"
            :mode="'lastfm'"
          ></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height: 200px; width: 400px"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width: 80%; max-width: 200px; max-height: 200px"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">
                No album found
              </p>
            </v-container>
          </v-col>
        </v-tab-item>
        <v-tab-item class="padded">
          <imgContainer
            v-if="albumsReddit.length != 0"
            :albums="albumsReddit"
            :mode="'reddit'"
          ></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height: 200px; width: 400px"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width: 80%; max-width: 200px; max-height: 200px"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">
                No album found
              </p>
            </v-container>
          </v-col>
        </v-tab-item>
      </v-tabs>
    </v-row>
  </v-main>
</template>

<script>
import searchBar from "../components/searchbar";
import axios from "axios";
import jsonpAdapter from "axios-jsonp";
import imgContainer from "../components/imgContainer";
import { debounce } from "debounce";
export default {
  name: "search",
  title() {
    return `${this.pageTitle}`;
  },
  data() {
    return {
      pageTitle: "Search",
      albumsDeezer: [],
      albumsiTunes: [],
      albumsReddit: [],
      albumsiTunesSmall: [],
      albumsLastfm: [],
      offset: 200,
      bottom: false,
      tab: "deezer",
      start: 0,
      itStart: 0,
      page: 1,
      end: 25,
      itEnd: 25,
      stop: false,
      stopIt: false,
      lastCycle: false,
      loading: true,
      after: "",
      q: this.$route.params.q,
    };
  },
  created: function () {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.updateAlbums();
    this.getItunes();
    this.getReddit();
    this.getLastfm();
    let self = this;
    window.onresize = debounce(function () {
      self.checkStep("notFirst");
    }, 200);
  },
  beforeDestroy() {
    window.onresize = null;
  },
  components: {
    imgContainer,
    searchBar,
  },
  methods: {
    snackMsg(msg) {
      this.$emit("snack", msg);
    },
    bottomVisible() {
      const scrollY = window.scrollY;
      const visible = document.documentElement.clientHeight;
      const pageHeight = document.documentElement.scrollHeight - 200;
      const bottomOfPage = visible + scrollY >= pageHeight;
      return bottomOfPage || pageHeight < visible;
    },
    async getItunes() {
      await axios({
        url:
          "https://itunes.apple.com/search?term=" +
          this.q +
          "&country=US&media=music&entity=album&attribute=albumTerm&limit=200&explicit=yes",
        adapter: jsonpAdapter,
      })
        .then((response) => {
          var tmp = false;
          for (var i = 0; i < response.data.resultCount; i++) {
            if (response.data.results[i] != undefined) {
              var risultati = {
                id: i,
                title: response.data.results[i]["collectionName"],
                cover:
                  response.data.results[i].artworkUrl100.substr(
                    0,
                    response.data.results[i]["artworkUrl100"].lastIndexOf(
                      "100x100bb"
                    )
                  ) + "150x150bb.jpg",
                artist: response.data.results[i]["artistName"],
                albumId: response.data.results[i]["collectionId"],
                artistId: response.data.results[i]["artistId"],
              };
              tmp = this.check(risultati.albumId, "itunes");
              if (tmp == false) {
                this.albumsiTunes.push(risultati);
              }
            }
          }
          this.addItunes();
        })
        .catch((error) => console.log(error));
    },
    async updateAlbums() {
      if (this.stop == false) {
        await axios({
          url:
            "https://api.deezer.com/search/album?q=" +
            this.q +
            "&index=" +
            this.start +
            "&output=jsonp",
          adapter: jsonpAdapter,
        })
          .then((response) => {
            var tmp = false;
            let imlink = "";
            for (var i = 0; i < 25; i++) {
              if (response.data.data[i] != undefined) {
                imlink =
                  response.data.data[i]["cover_medium"].substr(
                    0,
                    response.data.data[i]["cover_medium"].lastIndexOf("/") + 1
                  ) +
                  "150x150" +
                  response.data.data[i]["cover_medium"].substr(
                    response.data.data[i]["cover_medium"].lastIndexOf(
                      "250x250"
                    ) + 7
                  );
                var risultati = {
                  id: i,
                  title: response.data.data[i]["title"],
                  cover: imlink,
                  artist: response.data.data[i].artist["name"],
                  albumId: response.data.data[i]["id"],
                };
                tmp = this.check(risultati.albumId, "deezer");
                if (tmp == false) {
                  this.albumsDeezer.push(risultati);
                }
              }
            }
            this.start = this.end;
            if (this.lastCycle == true) {
              this.stop = true;
            } else {
              if (response.data.total > this.end + 25) {
                this.end += 25;
              } else {
                this.end = response.data.total - 1;
                this.lastCycle = true;
              }
            }
          })
          .catch((error) => console.log(error));
      }
    },
    async getReddit() {
      await axios({
        url:
          "https://coverscape-api.onrender.com/redditSearch?q=" +
          this.q +
          "&after=" +
          this.after,
        method: "get",
      })
        .then((res) => {
          var tmp = false;
          this.after = res.data.data.after;
          for (var i = 0; i < res.data.data.dist; i++) {
            var risultati = {
              id: i,
              title: res.data.data.children[i].data.title,
              cover: res.data.data.children[i].data.thumbnail,
              albumId: res.data.data.children[i].data.id,
            };
            tmp = this.check(risultati.albumId, "reddit");
            if (tmp == false) {
              this.albumsReddit.push(risultati);
            }
          }
        })
        .catch((err) => {
          console.error(err);
        });
    },
    async getLastfm() {
      let tmp = false;
      await axios({
        url:
          "https://coverscape-api.onrender.com/lastfmSearch?q=" +
          this.q +
          "&page=" +
          this.page,
        method: "get",
      })
        .then((res) => {
          this.page++;
          var empty = false;
          var stringPos = 0;
          for (var i = 0; i < res.data.results.albummatches.album.length; i++) {
            stringPos =
              res.data.results.albummatches.album[i].image[0]["#text"].indexOf(
                "34s/"
              );
            if (stringPos == -1) {
              empty = true;
            }
            if (!empty) {
              var risultati = {
                id: i,
                title: res.data.results.albummatches.album[i].name,
                cover: res.data.results.albummatches.album[i].image[2]["#text"],
                artist: res.data.results.albummatches.album[i].artist,
                coverUrl: res.data.results.albummatches.album[i].image[0][
                  "#text"
                ].slice(
                  stringPos + 4,
                  res.data.results.albummatches.album[i].image[0]["#text"]
                    .length - 4
                ),
              };
              tmp = this.check(risultati.coverUrl, "lastfm");
              if (tmp == false) {
                this.albumsLastfm.push(risultati);
              }
            }
            empty = false;
          }
        })
        .catch((err) => {
          console.error(err);
        })
        .then(() => (this.loading = false))
        .then(() =>
          setTimeout(() => {
            this.checkStep("first");
          }, 200)
        );
    },
    async addItunes() {
      if (!this.stopIt) {
        for (var i = this.itStart; i < this.itEnd; i++) {
          if (this.albumsiTunes[i] != undefined) {
            this.albumsiTunesSmall.push(this.albumsiTunes[i]);
          }
        }
        this.itStart = this.itEnd;
        this.itEnd += 25;
        if (this.albumsiTunes[this.itStart] != undefined) {
          if (this.albumsiTunes[this.itEnd] == undefined) {
            await axios({
              url:
                "https://itunes.apple.com/search?term=" +
                this.q +
                "&country=US&media=music&entity=album&attribute=albumTerm&limit=200&explicit=yes&offset=" +
                this.offset,
              adapter: jsonpAdapter,
            })
              .then((res) => {
                var tmp = false;
                var cont = 0;
                for (var i = 0; i < res.data.resultCount; i++) {
                  if (res.data.results[i] != undefined) {
                    var risultati = {
                      id: i,
                      title: res.data.results[i]["collectionName"],
                      cover:
                        res.data.results[i].artworkUrl100.substr(
                          0,
                          res.data.results[i]["artworkUrl100"].lastIndexOf(
                            "100x100bb"
                          )
                        ) + "150x150bb.jpg",
                      artist: res.data.results[i]["artistName"],
                      albumId: res.data.results[i]["collectionId"],
                      artistId: res.data.results[i]["artistId"],
                    };
                    tmp = this.check(risultati.albumId, "itunes");
                    if (tmp == false) {
                      this.albumsiTunes.push(risultati);
                    } else {
                      cont += 1;
                    }
                  }
                }
                if (cont == res.data.resultCount - 1) {
                  this.itEnd == this.albumsiTunes.length - 1;
                  this.stopIt = true;
                } else {
                  this.offset += 200;
                  this.addItunes();
                }
              })
              .catch((error) => console.log(error));
          }
        }
      }
    },
    checkStep(mode) {
      let beforePadding = document.querySelector(".v-slide-group__prev");
      let checkMobile = document.querySelector(
        ".v-slide-group--is-overflowing"
      );
      if (checkMobile == null) {
        beforePadding.style.display = "none";
        beforePadding.style["margin-left"] = "auto";
      } else {
        beforePadding.style.display = "initial";
        document.querySelector(".v-tabs-slider-wrapper").style.left = "52px";
      }
      if (mode == "first") {
        document.querySelector(".v-slide-group__prev").remove();
        document
          .querySelector(".v-slide-group__content")
          .insertBefore(
            beforePadding,
            document.querySelector(".v-slide-group__content").firstChild
          );
      }
    },
    check(albumId, mode) {
      var found = false;
      var j = 0;
      if (mode == "deezer") {
        for (j = 0; j < this.albumsDeezer.length; j++) {
          if (this.albumsDeezer != null) {
            if (this.albumsDeezer[j] != undefined) {
              if (this.albumsDeezer[j].albumId == albumId) {
                found = true;
              }
            }
          }
        }
      } else if (mode == "itunes") {
        for (j = 0; j < this.albumsiTunes.length; j++) {
          if (this.albumsiTunes != null) {
            if (this.albumsiTunes[j] != undefined) {
              if (this.albumsiTunes[j].albumId == albumId) {
                found = true;
              }
            }
          }
        }
      } else if (mode == "reddit") {
        for (j = 0; j < this.albumsReddit.length; j++) {
          if (this.albumsReddit != null) {
            if (this.albumsReddit[j] != undefined) {
              if (this.albumsReddit[j].albumId == albumId) {
                found = true;
              }
            }
          }
        }
      } else {
        for (j = 0; j < this.albumsLastfm.length; j++) {
          if (this.albumsLastfm != null) {
            if (this.albumsLastfm[j] != undefined) {
              if (this.albumsLastfm[j].coverUrl == albumId) {
                found = true;
              }
            }
          }
        }
      }
      return found;
    },
  },
  watch: {
    bottom(bottom) {
      if (bottom && !this.loading && this.tab == "deezer") {
        this.updateAlbums();
      } else if (bottom && !this.loading && this.tab == "itunes") {
        this.addItunes();
      } else if (
        bottom &&
        !this.loading &&
        this.tab == "reddit" &&
        this.after != null
      ) {
        this.getReddit();
      } else if (bottom && !this.loading && this.tab == "lastfm") {
        this.getLastfm();
      }
    },
  },
};
</script>

<style scoped>
.padded {
  margin-top: 1.5rem;
}
</style>
