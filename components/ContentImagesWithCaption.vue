<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 p-4 font-main text-sm bracketing bracket-tl bracket-br">
        <div class="col-span-1 space-y-8 pl-4 md:pl-0 order-2 lg:order-1 text-grayDarker">
            <h3 class="font-bold uppercase text-grayDarkest">{{ title }}</h3>
            <div>
                <slot name="caption"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 bg-white md:bg-transparent order-1 lg:order-2 flex flex-wrap justify-center items-center p-4 overflow-none" :class="spacing">
            <div 
                v-for="(image, index) in images" 
                :key="index" 
            >
                <img :src="image.src" :alt="image.alt" class="h-auto shadow-black" :class="imgSizing">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ' '
        },
        images: {
            type: Array,
            default: () => []
        },
        spacing: {
            type: String,
            default: 'space-y-4 space-x-4'
        },
        imgSizing: {
            type: String,
            required: true,
        }
    }
}
</script>