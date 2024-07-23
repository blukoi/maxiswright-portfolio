<template>
    <div class="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-6 gap-x-16 gap-y-32">
        <div class="col-span-1 md:col-span-4 md:col-start-2 rounded-md font-title text-2xl p-4 text-white space-y-8 mb-16 md:mb-32" :class="bgColor">
            <h1 class="w-full rounded-sm bg-white text-grayDarkest text-center">{{ how }}</h1>
            <p class="w-full pb-4 text-center">{{ direction }}</p>
        </div>
        <div class="col-span-1 md:col-span-6 rounded-md md:rounded-none p-4 md:p-0 bg-grayLightPrimary md:bg-transparent grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
            <div class="col-span-1 order-2 md:order-1 pl-4 md:pl-0 space-y-8">
                <h3 class="font-main font-bold text-sm uppercase">{{ title }}</h3>
                <slot name="caption"></slot>
            </div>
            <div class="col-span-1 md:col-span-2 col-start-1 md:col-start-2 order-1 md:order-2 rounded-sm md:rounded-md">
                <slot name="media"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        how: {
            type: String,
            default: 'How might we...'
        },
        direction: {
            type: String,
            default: '...DIRECTION'
        },
        title: {
            type: String,
            default: 'CAPTION TITLE'
        },
        bgColor: {
            type: String,
            default: ' '
        },
    }
}
</script>