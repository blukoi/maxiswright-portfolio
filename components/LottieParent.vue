<template>
    <div class="w-full h-max notch flex justify-center" :class="bgColor">
        <div ref="lottieContainer" class="lottie"></div>
    </div>
</template>

<script>
import lottie from 'lottie-web';

export default {
    props: {
        animationData: {
            type: Object,
            default: () => ({})
        },
        bgColor: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            lottieInstance: null,
        };
    },
    mounted() {
        this.lottieInstance = lottie.loadAnimation({
            container: this.$refs.lottieContainer, // Make sure this ref matches the template
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: this.animationData
        });
    },
    beforeDestroy() {
        if (this.lottieInstance) {
            this.lottieInstance.destroy(); // Proper cleanup
        }
    }
}
</script>

<style>
.lottie {
    width: 100%;
    height: 100%;
}
</style>
  