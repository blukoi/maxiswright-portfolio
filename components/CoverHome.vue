<template>
    <div class="space-y-8">
        <h1 class="text-2xl font-title text-grayDarkest mt-0 md:-mt-3.5">Highlights —</h1>
        <div v-for="project in highlightedProjects" :key="project.title" class="project-thumbnail">
            <div class="w-full rounded-md bg-white p-4 space-y-8">
                <div class="flex flex-col -space-y-5">
                    <div class="rounded-sm overflow-hidden">
                        <img :src="project.image" :alt="project.title">
                    </div>
                    <div class="ml-4 md:ml-8 w-max h-10 px-4 flex flex-row items-center bg-mint text-white border-2 border-white rounded-full space-x-4">
                        <FontAwesomeIcon :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]" class="text-xl" />
                        <p class="font-main uppercase tracking-widest text-sm">{{ project.category }}</p>
                    </div>
                </div>
                <div class="space-y-8">
                    <h1 class="ml-4 md:ml-0 font-title text-2xl text-grayDarkest">{{ project.title }}</h1>
                    <div class="ml-4 md:ml-8 font-main text-grayDarker font-sm">
                        <p>
                            {{ project.caption }}
                        </p>
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
      return this.projects.filter(p => p.highlight === true && p.completed === true);
    }
  }
}
</script>

<!-- <style>
.project-thumbnail {
  margin-bottom: 32px;
}
</style> -->