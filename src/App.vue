<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app :disable-resize-watcher="true">
      <v-list>
        <router-link to="/">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-home-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to="/about">
          <v-list-item link>
            <v-list-item-action>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>About</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app color="primary" light>
      <v-app-bar-nav-icon v-if="burger" @click.stop="drawer = !drawer" />
      <v-app-bar-nav-icon v-else @click.stop="navigateBack()">
        <v-icon>mdi-arrow-left</v-icon>
      </v-app-bar-nav-icon>

      <v-toolbar-title>{{ brand }}</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view
        @snack="snackbarOn"
        :key="$route.fullPath"
        @toggleBurger="toggleBurger"
        @brand="changeBranding"
      />
      <v-snackbar v-model="snackbar" :timeout="timeout">
        {{ snackTxt }}
        <template v-slot:action="{ attrs }">
          <v-btn color="primary" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    snackbar: false,
    snackTxt: "",
    burger: true,
    drawer: false,
    brand: "",
    timeout: 4000
  }),
  created: function() {
    this.$vuetify.theme.dark = true;
  },
  methods: {
    snackbarOn(msg) {
      this.snackTxt = msg;
      this.snackbar = true;
    },
    toggleBurger(mode) {
      if (mode == "back") {
        this.burger = false;
      } else {
        this.burger = true;
      }
    },
    navigateBack() {
      this.$router.go(-1);
    },
    changeBranding(branding) {
      this.brand = branding;
    }
  }
};
</script>

<style>
html {
  --scrollbarBG: #2b251d;
  --thumbBG: #FEAB2E;
}
body::-webkit-scrollbar {
  width: 12px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG);
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}
a {
  text-decoration: none;
}
.v-main {
  padding-top: 40px !important;
}
.main {
  padding-left: 0 !important;
}
.centered {
  margin: 0 auto;
}
.row {
  width: 100%;
  margin: 0 auto !important;
}
</style>