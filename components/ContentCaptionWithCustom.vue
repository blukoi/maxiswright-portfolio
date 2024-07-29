<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 bg-transparent font-main text-sm">
        <div class="col-span-1 space-y-8 pl-4 md:pl-0 text-grayDarker">
            <h3 class="font-bold uppercase text-grayDarkest">{{ title }}</h3>
            <div v-if="$slots.caption" class="pl-0 md:pl-8">
                <slot name="caption"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 lg:col-span-3 overflow-none space-y-4 md:space-y-8">
            <slot name="custom"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ' ',
        },
        caption: {
            type: String,
            default: ' ',
        }
    }
}
</script>