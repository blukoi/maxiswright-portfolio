<template>
    <div v-if="isVisible" class="relative w-full bg-white">
        <div class="container mx-auto px-4 md:px-0 py-8 md:py-16 border-grayLightPrimary border-t">
            <div class="flex flex-row justify-between align-center grid grid-cols-6 md:grid-cols-3 gap-y-64 gap-x-0">
                <div :ref="headerRef" class="col-span-5 md:col-span-2 rounded-sm md:rounded-md flex flex-row justify-start items-center px-4 md:px-8 py-2 md:py-4 gap-6 text-white" :class="bgColor">
                    <div class="w-12 h-12 text-3xl hidden md:inline-block relative">
                        <FontAwesomeIcon :icon="[iconPack, iconName]" class="text-3xl absolute left-1/2 top-1/2" style="transform: translate(-50%, -50%);" />
                    </div>
                    <h1 class="font-title text-2xl">{{ title }}</h1>
                </div>
                <div class="col-span-1 flex flex-row justify-end items-center">
                    <button class="button flex flex-row gap-4 pl-0 md:pl-1 text-grayDarker items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white font-main" @click="toggle">
                        <p class="uppercase text-xs tracking-widest hidden md:inline-block">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                        <div class="h-6 w-6 flex justify-center items-center rounded-full bg-grayDarker text-white">
                            <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                        </div>
                    </button>
                </div>
                <transition name="fade">
                    <div v-show="isExpanded" class="col-span-6 md:col-span-3 space-y-32 md:space-y-64">
                        <slot></slot>
                        <div class="w-full flex flex-row justify-end items-center">
                            <button class="button flex flex-row gap-4 pl-0 md:pl-1 text-grayMiddle items-center rounded-sm bg-transparent hover:bg-grayMiddle hover:text-white font-main" @click="toggleAndScrollUp">
                                <p class="uppercase text-xs tracking-widest">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                                <div class="h-6 w-6 flex justify-center items-center rounded-full bg-grayMiddle text-white">
                                    <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                                </div>
                            </button>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        bgColor: {
            type: String,
            required: true,
        },
        iconPack: {
            type: String,
            default: 'fas',
        },
        iconName: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        headerRef: {
            type: String,
            required: true,
        },
        isConcise: {
            type: Boolean,
            default: true,
        },
        visibilityMode: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isExpanded: false // Controls the visibility of the content
        };
    },
    computed: {
        isVisible() {
            switch (this.visibilityMode) {
                case 1: // Always visible
                    return true;
                case 2: // Visible only when isConcise is true
                    return this.isConcise;
                case 3: // Visible only when isConcise is false
                    return !this.isConcise;
                default:
                    return true;
            }
        },
        uniqueHeaderRef() {
            return `header-${this._uid}`;  // Creating a unique ref for each component instance
        }
    },
    methods: {
        toggle() {
            this.isExpanded = !this.isExpanded;
        },
        toggleAndScrollUp() {
            this.isExpanded = !this.isExpanded;
            this.$nextTick(() => {
                if (!this.isExpanded) {
                    const headerElement = this.$refs[this.headerRef];
                    if (headerElement) {
                        const elementTop = this.getTotalOffsetTop(headerElement);
                        const viewportHeight = window.innerHeight;
                        const scrollToPosition = elementTop - (viewportHeight / 2) + (headerElement.offsetHeight / 2);
                        window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
                    }
                }
            });
        },
        getTotalOffsetTop(elem) {
            let offsetTop = 0;
            while (elem) {
                offsetTop += elem.offsetTop;
                elem = elem.offsetParent;
            }
            return offsetTop;
        }
    }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* <- This is the new Vue 2.1.8 syntax for v-leave */ {
    opacity: 0;
}
</style>