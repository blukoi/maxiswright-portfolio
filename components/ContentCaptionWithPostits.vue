<template>
    <div class="w-full space-y-8 md:space-y-16 font-main text-sm bracketing bracket-tl bracket-br p-4">
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
            <div class="col-span-1 space-y-8 text-grayDarker">
                <h3 class="uppercase font-bold text-grayDarkest">{{ title }}</h3>
                <div v-if="$slots.caption" class="space-y-4">
                    <slot name="caption"></slot>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 gap-4 xl:gap-16 items-start" :class="gridCols">
            <slot name="postits"></slot>
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
        gridCols: {
            type: String,
            required: true,
        }
    }
}
</script>