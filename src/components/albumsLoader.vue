<template>
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
</template>

<script>
export default {
  name: "albumsLoader",
};
</script>
