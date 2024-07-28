<template>
    <div class="space-y-16">
        <div class="space-y-4 flex flex-col justify-center" :class="imageParent">
            <div v-for="(image, index) in srcset" :key="index" class="rounded-sm">
                <img :srcset="getImageSrcset(image)" :sizes="sizes" :src="image.small" :alt="image.altText || altText" class="rounded-sm"/>
            </div>
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
        srcset: {
            type: Array,
            default: () => [{
                small: '/default/path/to/image-small.jpg',
                medium: '/default/path/to/image-medium.jpg',
                large: '/default/path/to/image-large.jpg',
                altText: 'ALT'
            }]
        },
        sizes: {
            type: String,
            default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px'
        },
        altText: {
            type: String,
            default: 'Default alt text'
        },
        title: {
            type: String,
            default: 'TITLE'
        },
        imageParent: {
            type: String,
            default: 'h-64 md:h-120 w-full'
        }
    },
    methods: {
        getImageSrcset(image) {
            return `${image.small} 480w, ${image.medium} 768w, ${image.large} 1024w`;
        }
    }
}
</script>


<!-- HOW TO USE


<ScrollerImageMulti
    :srcset="[
        {
            small: '/path/to/first-image-small.jpg',
            medium: '/path/to/first-image-medium.jpg',
            large: '/path/to/first-image-large.jpg',
            altText: 'Description of first image'
        },
        {
            small: '/path/to/second-image-small.jpg',
            medium: '/path/to/second-image-medium.jpg',
            large: '/path/to/second-image-large.jpg',
            altText: 'Description of second image'
        },
        {
            small: '/path/to/third-image-small.jpg',
            medium: '/path/to/third-image-medium.jpg',
            large: '/path/to/third-image-large.jpg',
            altText: 'Description of third image'
        }
    ]"
    title="Gallery of Designs"
    image-parent="h-80 md:h-160 w-full"
>
    <template #caption>
        <p>This gallery showcases various designs and concepts developed over the project.</p>
    </template>
</ScrollerImageMulti>
    
  
-->