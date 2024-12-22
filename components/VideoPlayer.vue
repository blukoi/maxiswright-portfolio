<template>
  <div>
    <video autoplay loop muted playsinline class="full-size-video aspect-auto">
      <source 
      v-for="source in videoSources" :key="source.src"
              :src="source.src" :type="source.type" :media="source.media">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
  props: {
    'videoSources': {
      type: Array,
      required: true,
      validator(sources) {
        return sources.every(source => 'src' in source && 'type' in source);
      }
    }
  }
}
</script>

<style scoped>
.full-size-video {
  width: 100%; /* Full width of the container */
  height: 100%; /* Maintain aspect ratio */
  max-height: 100vh; /* Optionally limit the height to the viewport */
  object-fit: contain;
}
</style>

<!-- HOW TO USE


<VideoPlayer
  :videoSources="[
    { src: '/Brand/Hero_Animated_Full.mp4', type: 'video/mp4' },
    { src: '/Brand/Hero_Animated_960.mp4', type: 'video/mp4' },
    { src: '/Brand/Hero_Animated_720.mp4', type: 'video/mp4' },
    { src: '/Brand/Hero_Animated_480.mp4', type: 'video/mp4' }
    ]">
</VideoPlayer>


-->