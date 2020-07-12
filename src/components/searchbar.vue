<template>
  <v-row>
    <v-col class="col-11 centered mb-3 px-5">
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        v-model="input"
        solo-inverted
        hide-details
        outlined
        label="Search album..."
        @keyup.enter="search()"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import stripHtml from "string-strip-html";
export default {
  name: "searchBar",
  data() {
    return {
      input: ""
    };
  },
  created() {
    if (this.$route.name == "search") {
      this.input = this.$route.params.q;
    }
  },
  methods: {
    search() {
      if (this.input == "") {
        this.$emit("snack", "No input given");
      } else if (this.$route.name == "search") {
        if (this.input != this.$route.params.q) {
          var query = stripHtml(this.input);
          this.$router.push({
            name: "search",
            params: { q: query }
          });
        } else {
          this.$emit("snack", "Nothing new to look for");
        }
      } else {
        query = stripHtml(this.input);
        this.$router.push({
          name: "search",
          params: { q: query }
        });
      }
    }
  }
};
</script>