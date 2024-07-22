<template>
    <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        <div class="col-span-1 space-y-8">

            <CopyIntro section-name="Project">
                <template #copy>
                    <slot name="project"></slot>
                </template>
            </CopyIntro>
            <CopyIntro section-name="Direction">
                <template #copy>
                    <slot name="direction"></slot>
                </template>
            </CopyIntro>
            <CopyIntro v-if="showDisclaimer" section-name="Disclaimer">
                <template #copy>
                    <slot name="disclaimer"></slot>
                </template>
            </CopyIntro>

        </div>
        <div class="col-span-1 space-y-8">

            <slot name="info"></slot>
            <slot name="tools"></slot>
            <slot name="concise"></slot>

        </div>
    </div>
</template>

<script>
export default {
    props: {
        showDisclaimer: {
            type: Boolean,
            default: true  // Default value to show, change as needed
        }
    }
}
</script>

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