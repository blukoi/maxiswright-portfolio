<template>
    <div class="w-full py-8">
      <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px">
        <nuxt-link v-for="project in highlightedProjects" id="projectContainer" :key="project.title" :to="project.buttonLink" :class="project.color" class="notch-large col-span-1 overflow-hidden">
          <div id="projectChild" class="project-thumbnail py-8 lg:py-16 px-4 sm:px-8 lg:px-16 h-full">
            <div class="w-full space-y-8 overflow-hidden flex flex-col space-y-8">
              <h1 class="top-hash-mark-lightgray pt-1 font-title title-normal text-3xl text-white flex flex-col justify-items-start">
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
                <!-- <LottieParent v-if="project.animation" bgColor="bg-applecarBlue" :animation-data="animationData"></LottieParent> -->
                <img v-else :src="project.image" :alt="project.title">
              </div>
              <div class="space-y-4">
                <p class="font-main text-grayLightPrimary font-sm">
                    {{ project.caption }}
                </p>

                <!-- TAGS -->
                <ul class="flex flex-row flex-wrap gap-px">
                  <li v-for="tag in project.researchtags" :key="tag" class="bg-whiteFaded text-grayDarkest bg-opacity-50 font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.designtags" :key="tag" class="bg-whiteFaded text-grayDarkest bg-opacity-50 font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.impacttags" :key="tag" class="bg-whiteFaded text-grayDarkest bg-opacity-50 font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                </ul>
              </div>

              <!-- <div class="w-full flex justify-start py-2">
                  <ButtonDark :label="'Read More'" :link="project.buttonLink" />
              </div> -->
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

<style>
#projectContainer #projectChild {
  transform: scale(1);
  background: linear-gradient(to right, black 0%, black 100%);
  background-repeat: no-repeat;
  background-position: left center;
  background-size: 0% 100%;
  transition: transform 0.5s ease-in-out 0.1s, background-size 0.5s ease-in-out 0.1s;
}

#projectContainer:hover #projectChild {
  transform: scale(1.05);
  background-size: 100% 100%;
}
</style>