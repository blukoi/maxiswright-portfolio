<template>
    <div class="w-full content-center z-10 bg-white relative">
        <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1">
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 my-32 text-2xl font-title title-bold">

                <div class="col-span-1">
                    <h1 class="text-grayDarkest">More —</h1>
                </div>

                <nuxt-link v-if="linksVisibility[0]" :to="currentProject.buttonLink" class="notch col-span-1 md:col-span-2 bg-grayDarker hover:bg-mint hover:border-mint hover:border-2 px-8 py-6 flex flex-row items-center space-x-4 text-white">
                    <div class="h-8 w-8 flex justify-center items-center">
                        <FontAwesomeIcon :icon="currentProject.categoryIcon.split(' ')" class="text-2xl" />
                    </div>
                    <h1 class="pt-1">{{ currentProject.title }}</h1>
                </nuxt-link>

                <div class="col-span-1 md:col-span-2 md:col-start-2 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

                    <nuxt-link v-if="linksVisibility[1]" to="/work" class="notch col-span-1 button-link block overflow-hidden relative hover:border-mint hover:border-2">
                        <div class="relative w-full h-20">
                            <img src="/Generic/gradient1.png" alt="Background" class="background-image">
                            <img src="/Generic/gradient1.png" alt="Foreground" class="foreground-image">
                        </div>
                        <div class="title-container absolute w-full h-full left-8 top-0 flex items-center">
                            <h1 class="pt-1 text-white">Work</h1>
                        </div>
                    </nuxt-link>
                    
                    <nuxt-link v-if="linksVisibility[2]" to="/sideprojects" class="notch col-span-1 button-link block overflow-hidden relative hover:border-mint hover:border-2">
                        <div class="relative w-full h-20">
                            <img src="/Generic/gradient2.png" alt="Background" class="background-image">
                            <img src="/Generic/gradient2.png" alt="Foreground" class="foreground-image">
                        </div>
                        <div class="title-container absolute w-full h-full left-8 top-0 flex items-center">
                            <h1 class="pt-1 text-white">Side Projects</h1>
                        </div>
                    </nuxt-link>
                    
                    <nuxt-link v-if="linksVisibility[3]" to="/links" class="notch col-span-1 button-link block overflow-hidden relative hover:border-mint hover:border-2">
                        <div class="relative w-full h-20">
                            <img src="/Generic/gradient3.png" alt="Background" class="background-image">
                            <img src="/Generic/gradient3.png" alt="Foreground" class="foreground-image">
                        </div>
                        <div class="title-container absolute w-full h-full left-8 top-0 flex items-center">
                            <h1 class="pt-1 text-white">Links</h1>
                        </div>
                    </nuxt-link>
                
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    currentProjectId: {
      type: String,
      required: true
    },
    linksVisibility: {
      type: Array,
      default: () => [true, true, true, true]  // Adjust as necessary
    }
  },
  data() {
    return {
      projects: require('~/Assets/projects.json')
    };
  },
  computed: {
    currentProject() {
      // This will find the project by ID or default to the first project if not found
      return this.projects.find(project => project.id === this.currentProjectId) || this.projects[0];
    }
  }
}
</script>

<style>
.background-image, .foreground-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  object-fit: cover;
}

.foreground-image {
  mix-blend-mode: color-burn;
  opacity: 0;
}

.button-link:hover .foreground-image {
  opacity: 1;
}
</style>