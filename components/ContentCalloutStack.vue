<template>
    <div id="callOut" class="font-main text-sm" :class="colorStyles">
        <div>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-1 p-4 md:p-0 py-16 md:py-16" :class="textStyles">
                <div class="col-span-1 md:col-span-3 md:col-start-2 p-8 text-center space-y-16">
                    <h3 class="text-xl md:text-2xl">{{ callout1 }}</h3>
                    <div class="w-full flex flex-row justify-center">
                        <FontAwesomeIcon :icon="[iconPack, iconName]" :class="iconSize" />
                    </div>
                    <h3 class="font-bold text-xl md:text-2xl">{{ callout2 }}</h3>
                </div>
                <div v-if="$slots.caption" class="col-span-1 md:col-span-3 md:col-start-2 space-y-8 pl-4 md:pl-0 pb-8 opacity-100">
                    <div class="pl-0 md:pl-8 italic text-xs font-normal">
                        <slot name="caption"></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        callout1: {
            type: String,
            default: ' ',
        },
        callout2: {
            type: String,
            default: ' ',
        },
        colorStyles: {
            type: String,
            default: 'bg-white',
        },
        textStyles: {
            type: String,
            default: 'text-white',
        },
        iconSize: {
            type: String,
            required: true,
        },
        iconName: {
            type: String,
            required: true,
            default: 'arrow-down-long'
        },
        iconPack: {
            type: String,
            required: true,
            default: 'fas'
        },
    }
}
</script>

<style scoped>
#callOut {
    position: relative;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 100vw;
}
</style>