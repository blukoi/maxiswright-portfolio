<template>
    <picture>
        <source :srcset="srcsetLarge" media="(min-width: 1024px)">
        <source :srcset="srcsetMedium" media="(min-width: 768px)">
        <source :srcset="srcsetSmall" media="(min-width: 480px)">
        <img :src="srcsetSmall" :alt="altText" :style="imageStyle" class="overflow-none" :class="additionalStyles">
    </picture>
</template>

<script>
export default {
    props: {
        srcsetSmall: {
            type: String,
            required: true
        },
        srcsetMedium: {
            type: String,
            required: true
        },
        srcsetLarge: {
            type: String,
            required: true
        },
        altText: {
            type: String,
            default: ''
        },
        imageStyle: {
            type: Object,
            default: () => ({})
        },
        additionalStyles: {
            type: String,
            default: ""
        }
    }
}
</script>
