<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 bg-grayLightPrimary md:bg-transparent p-4 md:p-0 rounded-md md:rounded-none font-main text-sm">
        <div class="col-span-1 space-y-8 pl-4 md:pl-0 order-2 lg:order-1 text-grayDarker">
            <h3 class="font-bold uppercase text-grayDarkest">{{ title }}</h3>
            <div class="pl-0 md:pl-8">
                <slot name="caption"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 rounded-sm md:rounded-md order-1 lg:order-2" :class="bgColor">
            <div class="w-full h-full px-16 py-16 flex flex-col text-center justify-center items-center font-title text-2xl space-y-4" :class="textColor">
                <FontAwesomeIcon :icon="[iconPack, iconName]" :class="iconSize" />
                <slot name="callout"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        bgColor: {
            type: String,
            required: true,
        },
        textColor: {
            type: String,
            required: true,
        },
        iconSize: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true
        },
        iconPack: {
            type: String,
            required: true,
            default: 'fab' // Set default to 'fab' but it can be overridden
        },
    }
}
</script>