<template>
    <div class="w-full">
      <div class="h-auto">
        <div>
            <div class="bg-whiteFaded backdrop-filter backdrop-blur-sm sticky top-14 flex flex-row items-end z-40">
                <div
                    v-for="(project, index) in highlightedProjects"
                    :key="project.title + '-tab'"
                    class="w-12 flex-auto border-black"
                    :class="{
                    'px-0 border-0': index === selectedProjectIndex,
                    'pr-px border-b': index < selectedProjectIndex,
                    'pl-px border-b': index > selectedProjectIndex
                    }"
                >
                    <div
                        class="button notch border-black w-full"
                        :class="{
                        'h-10 border border-b-0 notch-border bg-white text-black': index === selectedProjectIndex,
                        'h-9 bg-grayLighter text-grayDarkest': index !== selectedProjectIndex,
                        }"
                        @click="selectedProjectIndex = index"
                    >
                        <button 
                            class="button h-full w-full project-tab relative flex flex-row justify-center place-items-center" 
                            :class="{
                            'pt-1': index === selectedProjectIndex,
                            'pt-0 sweep-hover': index !== selectedProjectIndex
                            }"
                        >
                            <FontAwesomeIcon
                            :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]"
                            class="text-lg"
                            />
                        </button>
                    </div>
                </div>
            </div>

            <!-- The Currently Selected Project's Content -->
            <div 
                v-if="activeProject" 
                class="relative border border-black p-2 lg:p-4 bg-white z-20 -mt-px"
            >
                <div class="w-full h-max notch overflow-hidden">
                    <transition name="wipe" mode="out-in">
                        <div
                            :key="activeProject.title"
                            :class="activeProject.color" 
                            class="project-container notch"
                        >
                            <nuxt-link
                                :to="activeProject.buttonLink"
                                class="project-child grid grid-cols-1 gap-8 p-8 text-white"
                            >
                                <div class="flex justify-start items-center">
                                  <FontAwesomeIcon :icon="['fas', 'arrow-right-to-bracket']" class="text-2xl text-whiteFaded mr-4" />
                                  <h1 class="font-title title-bold text-xl pt-1">
                                    {{ activeProject.title }}
                                  </h1>
                                </div>
            
                                <!-- Media (Lottie, Video, or Image) -->
                                <div class="overflow-hidden z-20">
                                    <div v-if="activeProject.animation">
                                        <LottieDynamic :animation-path="activeProject.animation" />
                                    </div>
            
                                    <div v-else-if="activeProject['video-lg']">
                                        <VideoPlayer
                                        :videoSources="[
                                            { src: activeProject['video-lg'], type: 'video/mp4' },
                                            { src: activeProject['video-md'], type: 'video/mp4' },
                                            { src: activeProject['video-sm'], type: 'video/mp4' }
                                        ]"
                                        />
                                    </div>
            
                                    <img
                                        v-else
                                        :src="activeProject.image"
                                        :alt="activeProject.title"
                                    />
                                </div>
            
                                <div class="space-y-8">
                                    <p class="font-main text-grayLightPrimary font-sm">
                                        {{ activeProject.caption }}
                                    </p>
            
                                    <ul class="flex flex-row flex-wrap gap-px">
                                        <li
                                        v-for="tag in activeProject.researchtags"
                                        :key="tag"
                                        class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5"
                                        >
                                        {{ tag }}
                                        </li>
                                        <li
                                        v-for="tag in activeProject.designtags"
                                        :key="tag"
                                        class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5"
                                        >
                                        {{ tag }}
                                        </li>
                                        <li
                                        v-for="tag in activeProject.impacttags"
                                        :key="tag"
                                        class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5"
                                        >
                                        {{ tag }}
                                        </li>
                                    </ul>
                                </div>
                            </nuxt-link>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
        <!-- <nuxt-link v-for="project in highlightedProjects" :key="project.title" :to="project.buttonLink" :class="project.color" class="notch col-span-1 overflow-hidden project-container">
          <div class="project-thumbnail py-8 lg:py-16 px-4 sm:px-8 lg:px-16 h-full project-child">
            <div class="w-full space-y-8 overflow-hidden flex flex-col space-y-8">
              <h1 class="font-title title-bold text-xl text-white flex flex-col justify-items-start">
                <span class="w-max mb-4 h-10 px-4 flex flex-row items-center bg-white text-mint rounded-full space-x-4 z-30">
                    <FontAwesomeIcon :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]" class="text-lg" />
                    <p class="font-main text-sm font-bold">{{ project.category }}</p>
                </span>
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

                
                <ul class="flex flex-row flex-wrap gap-px">
                  <li v-for="tag in project.researchtags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.designtags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                  <li v-for="tag in project.impacttags" :key="tag" class="text-whiteFaded border-whiteFaded border font-main text-xs px-2.5 py-1 pb-1.5">{{ tag }}</li>
                </ul>
              </div>
            </div>
          </div>
        </nuxt-link> -->
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      projects: require('~/Assets/projects.json'),
      selectedProjectIndex:0
    };
  },
  computed: {
    highlightedProjects() {
      return this.projects
        .filter(p => p.highlight === true && p.completed === true)
        .reverse();
    },
    activeProject() {
      return this.highlightedProjects[this.selectedProjectIndex] || null;
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
  transform: scale(1.05) skewY(-2deg);
  --p: 100%;
}

/* The element transitions from a zero-width clip-path to 100% width, creating a "wipe" effect */

/* 1. Control timing & easing for the clip-path property */
.wipe-enter-active, .wipe-leave-active {
  transition: clip-path 0.4s ease; /* Adjust duration/ease as desired */
}

/* 2. Entering element: starts fully clipped (invisible) */
.wipe-enter {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}
/* Transitioning to fully revealed state */
.wipe-enter-to {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}

/* 3. Leaving element: starts fully visible */
.wipe-leave {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
/* Transitions back to fully clipped */
.wipe-leave-to {
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
}

.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #323232;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #FFFFFF;
}
</style>