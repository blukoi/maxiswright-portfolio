<template>
    <div class="relative w-full bg-white">
        <div class="container mx-auto px-4 md:px-0 border-grayLightPrimary">
            <div class="flex flex-row justify-between align-center grid grid-cols-6 gap-y-64 gap-x-0">
                <div :ref="headerRef" class="sticky top-14 z-40 col-span-6 flex flex-row justify-start items-center px-4 md:px-8 gap-6 text-white border-black border border-t-4" :class="bgColor">
                    <div class="h-full border-black border-r pr-4 md:pr-8 flex flex-row justify-start items-center">
                        <h3 class="font-title title-bold pt-0.5 text-xl md:text-2xl">{{ headerRef }}/{{ totalProcess }}</h3>
                    </div>
                    <div class="w-12 h-12 hidden md:inline-block relative">
                        <FontAwesomeIcon :icon="[iconPack, iconName]" class="text-2xl absolute left-1/2 top-1/2" style="transform: translate(-50%, -50%);" />
                    </div>
                    <h1 class="font-title title-bold pt-0.5 text-xl md:text-2xl">{{ title }}</h1>
                </div>
                <div class="col-span-6 -mt-32 space-y-32 md:space-y-64 pb-32 md:pb-64">
                    <slot></slot>
                </div>
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
        // },
        // isConcise: {
        //     type: Boolean,
        //     default: true,
        // },
        // visibilityMode: {
        //     type: Number,
        //     required: true
        },
        totalProcess: {
            type: String,
            default: '',
        }
    },
    // data() {
    //     return {
    //         isExpanded: false // Controls the visibility of the content
    //     };
    // },
    computed: {
        // isVisible() {
        //     switch (this.visibilityMode) {
        //         case 1: // Always visible
        //             return true;
        //         case 2: // Visible only when isConcise is true
        //             return this.isConcise;
        //         case 3: // Visible only when isConcise is false
        //             return !this.isConcise;
        //         default:
        //             return true;
        //     }
        // },
        uniqueHeaderRef() {
            return `header-${this._uid}`;  // Creating a unique ref for each component instance
        }
    },
    // methods: {
    //     toggle() {
    //         this.isExpanded = !this.isExpanded;
    //     },
    //     toggleAndScrollUp() {
    //         this.isExpanded = !this.isExpanded;
    //         this.$nextTick(() => {
    //             if (!this.isExpanded) {
    //                 const headerElement = this.$refs[this.headerRef];
    //                 if (headerElement) {
    //                     const elementTop = this.getTotalOffsetTop(headerElement);
    //                     const viewportHeight = window.innerHeight;
    //                     const scrollToPosition = elementTop - (viewportHeight / 2) + (headerElement.offsetHeight / 2);
    //                     window.scrollTo({ top: scrollToPosition, behavior: 'smooth' });
    //                 }
    //             }
    //         });
    //     },
    //     getTotalOffsetTop(elem) {
    //         let offsetTop = 0;
    //         while (elem) {
    //             offsetTop += elem.offsetTop;
    //             elem = elem.offsetParent;
    //         }
    //         return offsetTop;
    //     }
    // }
}
</script>

<style scoped>
</style>