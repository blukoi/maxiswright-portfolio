<template>
    <div class="space-y-16">
        <div class="space-8-4 flex flex-row justify-center" :class="imageParent">
            <slot name="media"></slot>
        </div>
        <div class="w-60 md:w-96 shrink-0 inline-block space-y-4">
            <h3 class="text-white font-bold uppercase">{{ title }}</h3>
            <slot name="caption"></slot> <!-- Slots for flexible caption content -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'TITLE'
        },
        imageParent: {
            type: String,
            default: 'h-64 md:h-120 w-full'
        }
    }
}
</script>