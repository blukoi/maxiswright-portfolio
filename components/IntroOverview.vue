<template>
    <div id="overviewSection" ref="headerRef" class="col-span-1 md:col-span-2 border border-white rounded-md font-main text-grayDarker text-sm">
        <div class="w-full flex flex-row justify-between items-center px-4 md:px-8 h-20">
            <h1 class="font-title text-2xl text-grayDarkest">Overview</h1>
            <button class="button flex flex-row gap-4 pl-0 md:pl-1 text-grayDarker items-center rounded-sm bg-transparent hover:bg-grayDarker hover:text-white font-main" @click="toggle">
                <p class="uppercase text-xs tracking-widest hidden md:inline-block">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                <div class="h-6 w-6 flex justify-center items-center rounded-full bg-grayDarker text-grayLightPrimary">
                    <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                </div>
            </button>
        </div>

        <div v-show="isExpanded" class="grid grid-cols-1 md:grid-cols-2">
            <div class="col-span-1 md:col-span-2 h-px mx-4 md:mx-8 bg-white"></div>

            <div class="col-span-1 flex flex-col p-4 md:p-8 space-y-8">
                <div class="space-y-4">
                    <h3 class="font-bold uppercase">Challenges & Solutions</h3>
                    <div class="pl-4 md:pl-8 space-y-4">
                        <slot name="challenges"></slot>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="font-bold uppercase">Concept Summary</h3>
                    <div class="pl-4 md:pl-8 space-y-4">
                        <slot name="concept"></slot>
                    </div>
                </div>
            </div>

            <div class="col-span-1 flex flex-col p-4 md:p-8 space-y-8">
                <div class="space-y-4">
                    <h3 class="font-bold uppercase">Role</h3>
                    <div class="pl-4 md:pl-8 space-y-4">
                        <slot name="role"></slot>
                    </div>
                </div>
                <div class="space-y-4">
                    <h3 class="font-bold uppercase">Process</h3>
                    <div class="pl-4 md:pl-8 space-y-4">
                        <slot name="process"></slot>
                    </div>
                </div>
            </div>

            <div class="col-span-1 md:col-span-2 flex flex-row justify-end items-center px-4 md:px-8 h-20">
                <button class="button flex flex-row gap-4 pl-0 md:pl-1 text-grayMiddle items-center rounded-sm bg-transparent hover:bg-grayMiddle hover:text-white font-main" @click="toggle">
                    <p class="uppercase text-xs tracking-widest">{{ isExpanded ? 'Hide' : 'Read More' }}</p>
                    <div class="h-6 w-6 flex justify-center items-center rounded-full bg-grayMiddle text-grayLightPrimary">
                        <FontAwesomeIcon :icon="['fas', isExpanded ? 'caret-up' : 'caret-down']" class="text-sm" />
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false // Controls the visibility of the content
        };
    },
    methods: {
        toggle() {
            this.isExpanded = !this.isExpanded;
            this.$nextTick(() => {
                if (!this.isExpanded && this.$refs.headerRef) {
                    const top = this.$refs.headerRef.offsetTop;
                    window.scrollTo({ top, behavior: 'smooth' });
                }
            });
        }
    }
}
</script>

<!-- EXAMPLE OF HOW TO USE
 

<IntroOverview v-if="!isConcise">
    <template #challenges>
        <ul class="list-disc list-outside pl-4 space-y-4">
            <li>LISTED</li>
            <li>LISTED</li>
        </ul>
    </template>
    <template #concept>
        <p>CONTENT</p>
    </template>
    <template #role>
        <p>CONTENT</p>
        <p class="italic">CONTENT</p>
    </template>
    <template #process>
        <p>CONTENT</p>
        <PillsAlone :items="['RESEARCH', 'ANALYSIS']"></PillsAlone>
    </template>
</IntroOverview>
                
 -->