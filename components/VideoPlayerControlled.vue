<template>
    <div>
        <video 
            :autoplay="autoplay" 
            :loop="loop" 
            :muted="muted" 
            :controls="controls"
            class="full-size-video aspect-auto" 
            :class="roundedLvl"
        >
            <source 
                v-for="source in videoSources" 
                :key="source.src" 
                :src="source.src" 
                :type="source.type" 
                :media="source.media"
            >
            Your browser does not support the video tag.
        </video>
    </div>
</template>
  
<script>
export default {
    props: {
      videoSources: {
        type: Array,
        required: true,
        validator(sources) {
          return sources.every(source => 'src' in source && 'type' in source);
        }
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      loop: {
        type: Boolean,
        default: true
      },
      muted: {
        type: Boolean,
        default: true
      },
      controls: {
        type: Boolean,
        default: false // Controls are off by default
      },
      roundedLvl: {
        type: String,
        required: true
      }
    },
    watch: {
      volume(newVolume, oldVolume) {
        const videoElement = this.$el.querySelector('video');
        if (videoElement) videoElement.volume = newVolume;
      },
      playbackRate(newRate, oldRate) {
        const videoElement = this.$el.querySelector('video');
        if (videoElement) videoElement.playbackRate = newRate;
      }
    }
}
</script>
  
  <style scoped>
  .full-size-video {
      width: 100%; /* Full width of the container */
      height: 100%; /* Maintain aspect ratio */
      max-height: 100vh; /* Optionally limit the height to the viewport */
      object-fit: cover; /* Use cover to maintain aspect without stretching */
  }
  </style>
  
  <!-- HOW TO USE
  
  
<VideoPlayerControlled 
    :autoplay=false 
    :loop=false 
    :muted=false 
    :controls=true
    roundedLvl="rounded-md" 
    :videoSources="[
        { src: '/Work/EV/x_AppleVulcan_1080.mp4', type: 'video/mp4' },
        { src: '/Work/EV/x_AppleVulcan_720.mp4', type: 'video/mp4' },
        { src: '/Work/EV/x_AppleVulcan_480.mp4', type: 'video/mp4' }
    ]">
</VideoPlayerControlled>
  
  
  -->