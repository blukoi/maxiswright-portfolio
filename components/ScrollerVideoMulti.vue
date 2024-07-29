<template>
    <div class="space-y-16">
        <div class="space-x-4 md:space-x-8 flex flex-row justify-center" :class="videosParentAndSpacing">
            <slot name="media"></slot>
        </div>
        <div class="w-60 md:w-96 shrink-0 inline-block space-y-8">
            <div class="space-y-4 flex flex-col justify-start">
                <slot name="thumbs"></slot>
            </div>
            <slot name="caption"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        videosParentAndSpacing: {
            type: String,
            default: 'h-64 md:h-120 w-full'
        }
    }
}
</script>