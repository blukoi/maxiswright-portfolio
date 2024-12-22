<template>
    <div class="col-span-1 grid grid-cols-1 gap-4">
        <h1 class="font-title text-2xl text-grayLightPrimary">{{ sectionName }}</h1>
        <ul class="ml-8 text-grayLightPrimary font-main text-sm list-none flex flex-row flex-wrap gap-1">
            <li v-for="(item, index) in items" :key="index" class="px-4 py-2 bg-grayMiddle font-main text-xs text-white inline-block">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        sectionName: {
            type: String,
            required: true // This prop is mandatory
        },
        items: {
            type: Array,
            required: true // This prop is mandatory and must be an array
        }
    }
}
</script>

<style>
</style>



<!-- HOW TO USE



<CopyPills 
    section-name="SECTION"
    :items="['LIST', 'LIST']">
</CopyPills>



-->