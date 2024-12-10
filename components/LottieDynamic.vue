<template>
    <div class="w-full h-max rounded-md flex justify-center">
        <div ref="lottieContainer" class="lottie"></div>
    </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    props: {
        animationPath: {
            type: String,
            required: true
        }
    },
    data() {
        return {
        lottieInstance: null
        };
    },
    watch: {
        animationPath(newVal) {
        this.loadAnimation(newVal);
        }
    },
    mounted() {
        this.loadAnimation(this.animationPath);
    },
    beforeDestroy() {
        if (this.lottieInstance) {
        this.lottieInstance.destroy();
        }
    },
    methods: {
        loadAnimation(path) {
        if (this.lottieInstance) {
            this.lottieInstance.destroy();
        }
        import(`@/Assets/animations/${path}`)
            .then((animationData) => {
                this.lottieInstance = lottie.loadAnimation({
                    container: this.$refs.lottieContainer,
                    renderer: 'svg',
                    loop: true,
                    autoplay: true,
                    animationData: animationData.default
                });
            })
        }
    }
}
</script>

<style>
.lottie {
    width: 100%;
    height: auto;
    max-width: 100%;
}
</style>