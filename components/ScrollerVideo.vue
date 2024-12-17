<template>
    <div class="space-y-16">
        <div class="flex flex-col justify-center" :class="videoParent">
            <video autoplay loop muted playsinline >
                <source v-for="source in videoSources" :key="source.src" :src="source.src" :type="source.type">
            </video>
        </div>
        <div class="w-60 md:w-96 shrink-0 inline-block space-y-4">
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
            default: () => [{
                src: '/default/path/to/video.mp4',
                type: 'video/mp4'
            }]
        },
        title: {
            type: String,
            default: 'TITLE'
        },
        videoParent: {
            type: String,
            default: 'h-64 md:h-120'
        }
    }
}
</script>




<!-- HOW TO USE IT
 

<ScrollerVideo
:videoSources="[
        { src: '/path/to/video-480p.mp4', type: 'video/mp4' },
        { src: '/path/to/video-720p.mp4', type: 'video/mp4' },
        { src: '/path/to/video-1080p.mp4', type: 'video/mp4' }
    ]"
    title="Interactive Video Experience"
    videoParent="h-64 md:h-120"
>
    <template #caption>
        <p>This video showcases the feature in detail.</p>
    </template>
</ScrollerVideo>
    
  
-->