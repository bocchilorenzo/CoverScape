<template>
  <v-main class="main">
    <v-row justify="center" v-if="loading == true">
      <v-row align="center" no-gutters>
        <v-col class="col-11 centered mb-3 px-5">
          <v-skeleton-loader type="list-item" style="margin: 0 auto"></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row align="center" no-gutters>
        <v-col v-for="n in 12" :key="n" lg="2" md="3" sm="4" class="pb-3 px-1 col-6">
          <v-skeleton-loader type="image" style="margin: 0 auto" height="150px" width="150px"></v-skeleton-loader>
        </v-col>
      </v-row>
    </v-row>
    <v-row justify="center" v-else>
      <searchBar @snack="snackMsg" />
      <v-tabs background-color="transparent" dark centered>
        <v-tab>Deezer</v-tab>
        <v-tab>iTunes</v-tab>
        <v-tab-item class="padded">
          <imgContainer v-if="albumsDeezer.length != 0" :albums="albumsDeezer" :mode="'deezer'"></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height:200px;width:400px;"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width:80%;max-width:200px;max-height:200px;"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">No album found</p>
            </v-container>
          </v-col>
        </v-tab-item>
        <v-tab-item class="padded">
          <imgContainer v-if="albumsiTunes.length != 0" :albums="albumsiTunes" :mode="'itunes'"></imgContainer>
          <v-col v-else class="d-flex justify-center col-12">
            <v-container
              style="border-radius: 50%; height:200px;width:400px;"
              class="d-inline-flex justify-center flex-column align-center"
            >
              <svg
                style="width:80%;max-width:200px;max-height:200px;"
                class="centered"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#D81B60"
                  d="M14 7H18V3H12V7.61L14 9.61M12 10.44L4.41 2.86L3 4.27L12 13.27V13.55A3.94 3.94 0 0 0 8.67 13.23A4 4 0 0 0 10.65 20.95A4.1 4.1 0 0 0 14 16.85V15.27L19.73 21L21.14 19.59M10 19A2 2 0 1 1 12 17A2 2 0 0 1 10 19Z"
                />
              </svg>
              <p style="width: 60%; text-align: center" class="centered">No album found</p>
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
      bottom: false,
      start: 0,
      end: 25,
      stop: false,
      lastCycle: false,
      loading: true,
      q: this.$route.params.q
    };
  },
  created: function() {
    this.$emit("toggleBurger", "back");
    this.$emit("brand", "");
    window.addEventListener("scroll", () => {
      this.bottom = this.bottomVisible();
    });
    this.updateAlbums();
    this.getItunes();
  },
  components: {
    imgContainer,
    searchBar
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
    getItunes() {
      axios({
        url:
          "https://itunes.apple.com/search?term=" +
          this.q +
          "&country=US&media=music&entity=album&attribute=albumTerm&limit=200&explicit=yes",
        adapter: jsonpAdapter
      })
        .then(response => {
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
                  ) + "250x250bb.jpg",
                artist: response.data.results[i]["artistName"],
                albumId: response.data.results[i]["collectionId"],
                artistId: response.data.results[i]["artistId"]
              };
              tmp = this.check(risultati.albumId, "itunes");
              if (tmp == false) {
                this.albumsiTunes.push(risultati);
              }
            }
          }
        })
        .catch(error => console.log(error));
    },
    updateAlbums() {
      if (this.stop == false) {
        axios({
          url:
            "https://api.deezer.com/search/album?q=" +
            this.q +
            "&index=" +
            this.start +
            "&output=jsonp",
          adapter: jsonpAdapter
        })
          .then(response => {
            var tmp = false;
            for (var i = 0; i < 25; i++) {
              if (response.data.data[i] != undefined) {
                var risultati = {
                  id: i,
                  title: response.data.data[i]["title"],
                  cover: response.data.data[i]["cover_medium"],
                  artist: response.data.data[i].artist["name"],
                  albumId: response.data.data[i]["id"]
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
          .catch(error => console.log(error))
          .then(() => (this.loading = false));
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
      } else {
        for (j = 0; j < this.albumsiTunes.length; j++) {
          if (this.albumsiTunes != null) {
            if (this.albumsiTunes[j] != undefined) {
              if (this.albumsiTunes[j].albumId == albumId) {
                found = true;
              }
            }
          }
        }
      }
      return found;
    }
  },
  watch: {
    bottom(bottom) {
      if (bottom && !this.loading) {
        this.updateAlbums();
      }
    }
  }
};
</script>

<style scoped>
.padded {
  margin-top: 1.5rem;
}
</style>