<template>
  <div
    class="d-flex flex-column"
    style="margin: 0 auto; align-items: center; max-width: 150px"
  >
    <v-skeleton-loader
      v-if="imageLoad.loaded || !exists.esiste"
      type="image"
      style="margin: 0 auto"
      height="150px"
      width="150px"
    ></v-skeleton-loader>
    <v-hover v-else v-slot:default="{ hover }">
      <v-img
        :src="album.cover"
        :elevation="hover ? 10 : 2"
        alt="Immagine album"
        :title="album.title"
      ></v-img>
    </v-hover>

    <p class="text-center text--primary ma-2">{{ album.title }}</p>
  </div>
</template>

<script>
import imgLoaderMixin from "../mixins/imgLoaderMixin";
export default {
  name: "imgAlbum",
  mixins: [imgLoaderMixin],
  props: { album: Object },
  data() {
    return {
      imageLoad: { loaded: true },
      exists: { esiste: true },
    };
  },
  created() {
    this.waitImg(this.album.cover, this.imageLoad, this.exists);
  },
};
</script>
<style scoped></style>
