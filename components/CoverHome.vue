<template>
    <div class="w-full py-8">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px">
        <nuxt-link v-for="project in highlightedProjects" :key="project.title" :to="project.buttonLink" :class="project.color" class="notch-large col-span-1 overflow-hidden project-container">
          <div class="project-thumbnail py-8 lg:py-16 px-4 sm:px-8 lg:px-16 h-full project-child">
            <div class="w-full space-y-8 overflow-hidden flex flex-col space-y-8">
              <h1 class="font-title title-bold text-xl text-white flex flex-col justify-items-start">
                <!-- <span class="w-max mb-4 h-10 px-4 flex flex-row items-center bg-white text-mint rounded-full space-x-4 z-30">
                    <FontAwesomeIcon :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]" class="text-lg" />
                    <p class="font-main text-sm font-bold">{{ project.category }}</p>
                </span> -->
                {{ project.title }}
              </h1>
              <div class="overflow-hidden z-20">
                <div v-if="project.animation">
                  <LottieDynamic :animation-path="project.animation"/>
                </div>
                <div v-else-if="project['video-lg']">
                  <VideoPlayer
                  :videoSources="[
                      { src: project['video-lg'], type: 'video/mp4' },
                      { src: project['video-md'], type: 'video/mp4' },
                      { src: project['video-sm'], type: 'video/mp4' },
                      ]">
                  </VideoPlayer>
                </div>
                <img v-else :src="project.image" :alt="project.title">
              </div>
              <div class="space-y-4">
                <p class="font-main text-grayLightPrimary font-sm">
                    {{ project.caption }}
                </p>

                <!-- TAGS -->
                <ul class="flex flex-row flex-wrap gap-px">
                  <li v-for="tag in project.researchtags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.designtags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.impacttags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                </ul>
              </div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      projects: require('~/Assets/projects.json')
    };
  },
  computed: {
    highlightedProjects() {
      return this.projects
        .filter(p => p.highlight === true && p.completed === true)
        .reverse();
    }
  }
}
</script>

<style scoped>
.project-container .project-child {
  background: linear-gradient(#000000 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) skewY(0deg);
  transition: transform 0.4s, background-size 0.4s, background-position 0s;
}

.project-container:hover .project-child {
  transform: scale(1.1) skewY(-3deg);
  --p: 100%;
}
</style>