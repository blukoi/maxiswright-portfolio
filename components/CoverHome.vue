<template>
    <div class="space-y-8">
        <h1 class="text-2xl font-title text-grayDarkest mt-0 md:-mt-3.5">Highlights —</h1>
        <div v-for="project in highlightedProjects" :key="project.title" class="project-thumbnail">
            <div class="w-full rounded-md bg-white p-4 space-y-8 overflow-hidden">
                <div class="flex flex-col -space-y-10">
                    <div class="-ml-4 w-max h-10 pl-4 pr-4 flex flex-row items-center bg-mint text-white ring-white ring-2 rounded-r-full space-x-4 z-30">
                        <FontAwesomeIcon :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]" class="text-xl" />
                        <p class="font-main uppercase tracking-widest text-sm font-bold">{{ project.category }}</p>
                    </div>
                    <div class="rounded-sm overflow-hidden z-20">
                        <img :src="project.image" :alt="project.title">
                    </div>
                </div>
                <div class="space-y-8">
                    <h1 class="ml-4 md:ml-0 font-title text-2xl text-grayDarkest">{{ project.title }}</h1>
                    <div class="ml-4 md:ml-8 font-main text-grayDarker font-sm">
                        <p>
                            {{ project.caption }}
                        </p>
                    </div>

                    <!-- TAGS -->
                    <div class="ml-4 md:ml-8 flex flex-row flex-wrap gap-2">
                      <div>
                        <ul class="flex flex-row flex-wrap gap-2">
                          <li v-for="tag in project.researchtags" :key="tag" class="bg-grayDarker text-white bg-opacity-50 rounded-full font-main text-xs px-2.5 py-1">{{ tag }}</li>
                          <li v-for="tag in project.designtags" :key="tag" class="bg-grayDarker text-white bg-opacity-50 rounded-full font-main text-xs px-2.5 py-1">{{ tag }}</li>
                          <li v-for="tag in project.impacttags" :key="tag" class="bg-grayDarker text-white bg-opacity-50 rounded-full font-main text-xs px-2.5 py-1">{{ tag }}</li>
                        </ul>
                      </div>

                      <!-- <div v-if="project.designtags.length > 0">
                        <ul class="flex flex-row flex-wrap space-x-2">
                        </ul>
                      </div>

                      <div v-if="project.impacttags.length > 0">
                        <ul class="flex flex-row flex-wrap space-x-2">
                        </ul>
                      </div> -->
                    </div>

                    <div class="ml-4 md:ml-8 py-2">
                        <ButtonDark :label="'Read More'" :link="project.buttonLink" />
                    </div>
                </div>
            </div>
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

<!-- <style>
.project-thumbnail {
  margin-bottom: 32px;
}
</style> -->