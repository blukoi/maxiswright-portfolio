<template>
    <div class="space-y-16">
        <div :class="`h-${height} w-${width} flex flex-col justify-center`">
            <video controls :height="height">
                <source v-for="source in videoSources" :key="source.src" :src="source.src" :type="source.type">
            </video>
        </div>
        <div class="w-96 shrink-0 inline-block space-y-4">
            <h3 class="text-white font-bold uppercase">{{ title }}</h3>
            <slot name="caption"></slot> <!-- Slots for flexible caption content -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videoSources: {
            type: Array,
            required: true,
            default: () => []
        },
        title: {
            type: String,
            default: 'Default Video Title'
        },
        height: {
            type: Number,
            default: 160
        },
        width: {
            type: Number,
            default: 120
        }
    }
}
</script>




<!-- HOW TO USE IT
 

<video-content
  :video-sources="[
    { src: '/path/to/video-480p.mp4', type: 'video/mp4' },
    { src: '/path/to/video-720p.mp4', type: 'video/mp4' },
    { src: '/path/to/video-1080p.mp4', type: 'video/mp4' }
  ]"
  title="Custom Video Title"
>
  <template #caption>
    <p>Detailed explanation about the video content.</p>
  </template>
</video-content>
    
  
-->