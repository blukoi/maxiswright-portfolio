<template>
    <div>
        <div class="w-full relative h-160 md:h-180 filter drop-shadow-md">
            <div ref="parallaxImage" :class="mediaBackground" class="fixed top-0 left-0 w-full h-full h-64 flex place-items-center">
                <slot name="media" />
            </div>
            <div class="absolute top-0 left-0 w-full h-full bg-transparent">
                <div class="container mx-auto px-4 sm:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-x-16">
                    <div class="col-span-1 lg:col-span-2 bg-white border border-black bracketing bracket-tl bracket-br bracket-tl-callout bracket-br-callout mt-20 pl-8 pr-4 py-6">
                        <h1 class="font-title title-bold text-xl gradient-text pt-1" :class="bgColor">
                            <slot name="title" />
                        </h1>
                    </div>
                    <div class="col-span-1 lg:col-span-2 flex flex-col md:flex-row space-y-1 space-x-0 md:space-y-0 md:space-x-2">
                        <h3 class="border-black border border-l-4 bg-white w-max h-full font-bold text-black px-4 py-2 text-xs place-items-center">
                            <FontAwesomeIcon :icon="['fas', 'circle-info']" class="text-sm pr-2" />
                            Info
                        </h3>
                        <slot name="info" />
                    </div>
                    <div class="col-span-1 lg:col-span-2 flex flex-col md:flex-row space-y-1 space-x-0 md:space-y-0 md:space-x-2">
                        <h3 class="border-black border border-l-4 bg-white w-max h-full font-bold text-black px-4 py-2 text-xs place-items-center">
                            <FontAwesomeIcon :icon="['fas', 'screwdriver-wrench']" class="text-sm pr-2" />
                            Tools
                        </h3>
                        <slot name="tools" />
                    </div>
                </div>
            </div>
        </div>
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
    },
    // mounted() {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // beforeDestroy() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },
    // methods: {
    //     handleScroll() {
    //         const scrolled = window.scrollY;
    //         const offset = scrolled * 0.5;
    //         if (this.$refs.parallaxImage) {
    //             this.$refs.parallaxImage.style.transform = `translateY(${offset}px)`;
    //         }
    //     }
    // },
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