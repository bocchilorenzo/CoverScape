export default {
    methods: {
        waitImg(src, imgLoad) {
            this.loading = false;
            const img = new Image();
            img.src = src;

            img.onload = () => {
                imgLoad.loaded = false;
            };
        }
    },
}