<template>
    <div class="col-span-1 grid grid-cols-1 gap-4">
        <h1 class="font-title title-bold text-2xl text-grayDarkest">{{ sectionName }}</h1>
        <p class="ml-4 md:ml-0 text-grayMiddle font-main text-sm">
            <slot name="copy"> </slot>
        </p>
    </div>
</template>

<script>
export default {
    props: {
        sectionName: {
            type: String,
            required: true // This prop is mandatory
        }
    }
}
</script>

<style>
</style>



<!-- HOW TO USE



<CopyIntro section-name="SECTION">
    <template v-slot:copy>
        TEXT <span>ADD ADDITIONAL STYLING IF NECESSARY</span
    </template>
</CopyIntro>



-->