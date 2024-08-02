<template>
    <div id="blockQuote" class="font-main text-sm" :class="colorStyles">
        <div>
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-16 gap-y-1 p-4 md:p-0">
                <div class="col-span-1 md:col-span-2 md:col-start-2 p-8 text-center space-y-8">
                    <div class="w-full flex flex-row justify-start opacity-50">
                        <CustomIcon 
                            iconSize="w-12 h-12" 
                            textSize="text-5xl" 
                            iconPack="fas" 
                            iconName="quote-left"
                        />
                    </div>
                    <h3 class="italic text-2xl md:text-3xl">{{ blockQuote }}</h3>
                    <div class="w-full flex flex-row justify-end opacity-50">
                        <CustomIcon 
                            iconSize="w-12 h-12" 
                            textSize="text-5xl" 
                            iconPack="fas" 
                            iconName="quote-right"
                        />
                    </div>
                </div>
                <div v-if="$slots.caption" class="col-span-1 md:col-span-2 md:col-start-2 space-y-8 pl-4 md:pl-0 pb-8 opacity-100">
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
        blockQuote: {
            type: String,
            default: ' ',
        },
        colorStyles: {
            type: String,
            default: 'bg-white',
        }
    }
}
</script>

<style scoped>
#blockQuote {
    position: relative;
    left: 50%;
    right: 50%;
    transform: translateX(-50%);
    width: 100vw;
}
</style>