<template>
    <div class="col-span-1 grid grid-cols-1 gap-4">
        <ul class="text-black font-main text-sm list-none flex flex-row flex-wrap gap-1">
            <li v-for="(item, index) in items" :key="index" class="px-4 py-2 rounded-full bg-white font-main text-xs text-black inline-block">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
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



<PillsAlone 
    :items="['LIST', 'LIST']">
</PillsAlone>



-->