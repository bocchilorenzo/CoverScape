export default {
    methods: {
        waitImg(src, imgLoad, exists) {
            this.loading = false;
            const img = new Image();
            img.src = src;

            img.onerror = () => {
                exists.esiste = false;
            }
            img.onload = () => {
                imgLoad.loaded = false;
            }
        }
    },
}