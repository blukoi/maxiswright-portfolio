<template>
    <div>
        <div class="fixed top-0 w-full h-50vh z-0">
            <div class="w-full h-20 bg-black relative z-10"></div>
            <div class="w-full bg-black">
                <div class="w-full bg-black relative z-10">
                    <div class="container mx-auto px-4 md:px-0 pt-4 md:pt-20 pb-4">
                        <h1 class="font-title text-3xl gradient-text" :class="bgColor">
                            <slot name="title"></slot>
                        </h1>
                    </div>
                </div>
                <div class="w-full h-80 md:h-112 flex z-0 relative" :class="mediaBackground">
                    <slot name="media"></slot>
                </div>
            </div>
        </div>
        <div class="w-full h-112 md:h-160 bg-transparent inline-block"></div>
    </div>
</template>

<script>
export default{
    props: {
        bgColor: {
            type: String,
            default: ' '
        },
        mediaBackground: {
            type: String,
            default: "bg-grayDarkest"
        }
    }
}
</script>

<!-- HOW TO USE
 

<IntroTitle>
    <template #title>{{ project.title }} —</template>
    <template #media>
        <VideoCover
        :videoSources="[
            { src: '/Work/EV/0_MeterAutonomous_Full.mp4', type: 'video/mp4' },
            { src: '/Work/EV/0_MeterAutonomous_1080.mp4', type: 'video/mp4' },
            { src: '/Work/EV/0_MeterAutonomous_480.mp4', type: 'video/mp4' },
            ]">
        </VideoCover>
    </template>
</IntroTitle>


<script>
import projects from '~/Assets/projects.json';

export default {
    data() {
        return {
        projects: require('~/Assets/projects.json'),
        };
    },
    computed: {
        project() {
            const id = '1'
            // Find the project that matches the ID
            return projects.find(p => p.id === id) || {};
        }
    },
}
</script>


 -->