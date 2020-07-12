<template>
  <v-main id="main">
    <v-row justify="center">
      <v-img src="../assets/logo.png" alt="CoverScape logo" max-width="150px"></v-img>
    </v-row>
    <searchBar @snack="snack" />
  </v-main>
</template>

<script>
import searchBar from "../components/searchbar";
export default {
  name: "Home",
  title() {
    return `${this.pageTitle}`;
  },
  data() {
    return {
      input: "",
      pageTitle: "CoverScape"
    };
  },
  components: {
    searchBar
  },
  created: function() {
    this.$emit("toggleBurger", "home");
    this.$emit("brand", "Home");
  },
  methods: {
    snack(msg) {
      this.$emit("snack", msg);
    }
  }
};
</script>

<style scoped>
#main {
  padding-left: 0 !important;
}
</style>
