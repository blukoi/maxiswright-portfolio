<template>
    <div class="notch bg-white text-grayDarker p-4 font-main text-sm w-96 xl:w-112 space-y-4 max-h-fit">
        <p class="font-bold">{{ title }}</p>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>