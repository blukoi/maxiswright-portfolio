<template>
    <picture>
        <source :srcset="srcsetLarge" media="(min-width: 768px)">
        <source :srcset="srcsetMedium" media="(min-width: 480px)">
        <source :srcset="srcsetSmall" media="(min-width: 0px)">
        <img :src="srcsetSmall" :alt="altText" :style="imageStyle" class="rounded-sm overflow-none">
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
        }
    }
}
</script>

<!-- HOW TO USE


<ImageSmall
    srcset-small="/path/to/image-small.jpg"
    srcset-medium="/path/to/image-medium.jpg"
    srcset-large="/path/to/image-large.jpg"
    alt-text="A descriptive alternative text for the image"
    :image-style="{ width: '100%', height: 'auto' }"
/>
    
 -->