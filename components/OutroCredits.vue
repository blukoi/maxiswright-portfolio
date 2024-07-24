<template>
    <div class="relative z-20 bg-grayLightPrimary py-32">
        <div class="w-full space-y-4">
            <div class="container mx-auto px-4 md:px-0">
                <div class="flex flex-row justify-between text-grayDarkest">
                    <h1 class="font-title text-xl">{{ title }}</h1>
                    <div class="h-6 w-6 flex justify-center items-center rounded-full">
                        <FontAwesomeIcon :icon="['fas', 'arrows-left-right']" class="text-sm" />
                    </div>
                </div>
            </div>
            <ContentSmallScroller>
                <slot></slot>
            </ContentSmallScroller>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'TITLE'
        }
    }
}
</script>