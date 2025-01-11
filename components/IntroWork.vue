<template>
    <div class="col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-16">
        <div class="col-span-1 md:col-span-2 space-y-8">

            <div class="border-black border border-t-4 bg-white -mt-24 p-4 md:px-8">
                <CopyIntro section-name="Overview">
                    <template #copy>
                        <slot name="overview"></slot>
                    </template>
                </CopyIntro>
            </div>

        </div>
        <div class="hidden md:block md:col-span-1 h-full"></div>
        <div v-if="$slots.problem" class="col-span-1 space-y-8">

            <h3 class="font-title title-normal text-grayDarkest text-2xl top-hash-mark-lightgray">
                Problem
            </h3>
            <slot name="problem"></slot>

        </div>
        <div v-if="$slots.goals" class="col-span-1 space-y-8">

            <h3 class="font-title title-normal text-grayDarkest text-2xl top-hash-mark-lightgray">
                Goals
            </h3>
            <slot name="goals"></slot>

        </div>
        <div v-if="$slots.solution" class="col-span-1 space-y-8">

            <h3 class="font-title title-normal text-grayDarkest text-2xl top-hash-mark-lightgray">
                Solution
            </h3>
            <slot name="solution"></slot>

        </div>
        <div v-if="$slots.disclaimer" class="col-span-1 md:col-span-3 space-y-8 text-xs">

            <h3 class="font-main font-bold text-grayDarkest inline">
                Disclaimer — 
            </h3>
            <slot name="disclaimer" class="inline"></slot>

        </div>
    </div>
</template>

<!-- EXAMPLE OF HOW TO USE


<IntroWork :showDisclaimer="true">
    <template #project>
        The 2035 Apple Car: imagining evolved experiences for next-gen electric vehicles
    </template>
    <template #direction>
        How might we design seamless automotive experiences which support Apple’s existing ecosystem?
    </template>
    <template #disclaimer>
        <span class="italic">This project is a conceptual design exercise and is not officially affiliated with or endorsed by Apple Inc. In addition, myself and my team are not employed by, or affiliated with, Apple Inc. All trademarks and copyrights are the property of their respective owners. Any images used are displayed for illustrative and/or research purposes.</span>
    </template>
    <template #info>
        <CopyPills 
            section-name="Info"
            :items="['Automotive UX', '9 Weeks', 'October - December 2023', '5 Team Members']">
        </CopyPills>
    </template>
    <template #tools>
        <CopyPills 
            section-name="Tools"
            :items="['Miro', 'Figma', 'SolidWorks', 'KeyShot', 'Adobe Premiere', 'Adobe Audition', 'ElevenLabs']">
        </CopyPills>
    </template>
    <template #concise>
        <ConciseSwitch v-model="isConcise"></ConciseSwitch>
    </template>
</IntroWork>
                
 -->