<template>
  <v-container>
    <v-sheet color="sheet" class="pa-2 centraRadius">
      <v-row>
        <v-col class="col-9 centrata">
          <span>
            I made this website because sometimes I find myself looking for a high quality album cover and always resort to Google Images. You can find the code on
            <a
              target="_blank"
              href="https://github.com/bocchilorenzo/coverscape"
            >Github</a>
          </span>.
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col class="col-9 centrata">
          <span>
            The results come from:
            <br />
            <a target="_blank" href="https://developers.deezer.com/">
              <v-img
                src="../assets/Deezer_Logo_RVB_White.svg"
                width="100px"
                alt="Deezer logo white"
                title="Deezer"
              ></v-img>
            </a>
            <a
              target="_blank"
              href="https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html"
            >iTunes</a>
          </span>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col class="col-9 centrata">
          <span>
            Made with
            <a target="_blank" href="https://vuejs.org/">Vue JS</a> and
            <a target="_blank" href="https://vuetifyjs.com/en/">Vuetify</a>
          </span>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="col-9 centrata">
          <div>
            Logo made by
            <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from
            <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "about",
  data() {
    return {
      pageTitle: "About"
    };
  },
  title() {
    return `${this.pageTitle}`;
  },
  created: function() {
    this.$emit("toggleBurger");
    this.$emit("brand", "About");
  }
};
</script>

<style scoped>
.centrata {
  margin: 0 auto;
}

.centraRadius {
  margin: 2em auto;
  border-radius: 1em;
}
</style>
