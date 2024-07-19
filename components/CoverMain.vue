<template>
    <div>
        <div 
        v-for="(project, index) in highlightedProjects" :key="project.title"
             :class="{'bg-grayDarkest': !isOdd(index), 'bg-white': isOdd(index)}" 
             class="w-full content-center z-10">
            <div class="container px-4 sm:px-0 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16 py-32">
                <div class="col-span-1">
                    <div class="ml-8 w-max h-10 px-4 flex flex-row items-center bg-mint text-white border-2 border-white rounded-full space-x-4">
                        <FontAwesomeIcon :icon="[project.categoryIcon.split(' ')[0], project.categoryIcon.split(' ')[1]]" class="text-xl" />
                        <p class="font-main uppercase tracking-widest text-sm">{{ project.category }}</p>
                    </div>
                </div>
                <div class="col-span-1 lg:col-span-2 lg:order-3 lg:-mt-32 lg:pt-6">
                    <div class="rounded-md overflow-hidden">
                        <img :src="project.image" :alt="project.title">
                    </div>
                </div>
                <div class="col-span-1 lg:col-start-1 lg:order-2">
                    <div>
                        <h1 
                        :class="{'text-grayLighter': !isOdd(index), 'text-grayDarker': isOdd(index)}"
                            class="ml-8 lg:ml-0 font-title text-2xl">{{ project.title }}</h1>
                        <div 
                        :class="{'text-grayLightPrimary': !isOdd(index), 'text-grayDarker': isOdd(index)}"
                             class="ml-8 font-main font-sm font-light mt-4 lg:mt-8 mb-8 lg:mb-16">
                            <p>
                                {{ project.caption }}
                            </p>
                        </div>
                        <div class="ml-8 py-2">
                            <!-- Dynamic component for button -->
                            <component :is="buttonType(index)" :label="'Read More'" :link="project.buttonLink"></component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      projects: require('~/Assets/projects.json')
    };
  },computed: {
  highlightedProjects() {
    const filteredProjects = this.projects.filter(p => p.type === this.type && p.completed === true);
    
    return filteredProjects;
  }
},
  methods: {
    isOdd(index) {
      return index % 2 !== 0;
    },
    buttonType(index) {
      return this.isOdd(index) ? 'ButtonDark' : 'ButtonLight';
    }
  }
}
</script>
