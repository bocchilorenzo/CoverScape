<template>
    <div
        class="d-flex flex-column"
        style="margin: 0 auto; align-items: center; max-width: 150px"
    >
        <v-hover v-slot:default="{ hover }">
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
export default {
    name: 'imgAlbum',
    props: { album: Object },
}
</script>
<style scoped></style>
