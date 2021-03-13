export default {
    methods: {
        waitImg(src, imgLoad, exists, imgData) {
            this.loading = false;
            const img = new Image();
            img.src = src;

            img.onerror = () => {
                exists.esiste = false;
            }
            img.onload = () => {
                imgLoad.loaded = false;
                if (imgData != undefined) {
                    imgData.width = img.naturalWidth;
                    imgData.height = img.naturalHeight;
                }
            }
        }
    },
}