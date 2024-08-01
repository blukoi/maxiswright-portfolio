<template>
    <div class="video-container">
        <video autoplay loop muted playsinline class="video-cover">
            <source 
            v-for="source in videoSources" 
            :key="source.src" 
            :src="source.src" 
            :type="source.type" 
            :media="source.media">
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
.video-container {
    position: relative;
    width: 100%; /* Container width - can be adjusted or responsive */
    height: 75vh; /* Container height - can be viewport height or another value */
    overflow: visible;
}

@media (min-width: 768px) {
    .video-container {
        height: 100vh; /* Increased height for medium devices */
    }
}

.video-cover {
    width: 100%;
    height: 100%;
    object-fit: cover; /* This is key to maintaining aspect ratio while filling container */
    position: absolute; /* Positions the video absolutely within its container */
    top: 0;
    left: 0;
}
</style>