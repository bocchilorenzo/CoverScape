<template>
  <v-row no-gutters>
    <v-col
      v-for="album in albums"
      :key="album.albumId"
      xl="2"
      lg="2"
      md="3"
      sm="4"
      class="pb-3 px-1 col-6"
      style="margin:0 auto"
    >
      <router-link
        :to="{
                    name: 'deezer',
                    path: '/deezer/:id',
                    params: { id: album.albumId },
                    props: true,
                }"
        v-if="mode == 'deezer'"
      >
        <imgAlbum :album="album" :id="album.albumId" />
      </router-link>
      <router-link
        :to="{
                    path: '/itunes/:idArtist/:collectionId',
                    name: 'itunes',
                    params: { idArtist: album.artistId, collectionId: album.albumId },
                    props: true,
                }"
        v-else-if="mode == 'itunes'"
      >
        <imgAlbum :album="album" :id="album.albumId" />
      </router-link>
      <router-link
        :to="{
                    path: '/reddit/:id',
                    name: 'reddit',
                    params: { id: album.albumId },
                    props: true,
                }"
        v-else
      >
        <imgAlbum :album="album" :id="album.albumId" />
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import imgAlbum from "./imgAlbum";

export default {
  name: "imgContainer",
  props: { albums: Array, mode: String },
  components: { imgAlbum }
};
</script>

<style></style>
