<template>
    <div class="space-y-16">
        <div class="flex flex-col justify-center" :class="imageParent">
            <img :srcset="getSrcset" :sizes="sizes" :src="srcset.small" :alt="altText"/>
        </div>
        <div class="w-60 md:w-96 shrink-0 inline-block space-y-4">
            <h3 class="text-white font-bold uppercase">{{ title }}</h3>
            <div v-if="$slots.caption">
                <slot name="caption" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        srcset: {
            type: Object,
            default: () => ({
                small: '/default/path/to/image-small.jpg',
                medium: '/default/path/to/image-medium.jpg',
                large: '/default/path/to/image-large.jpg'
            })
        },
        sizes: {
            type: String,
            default: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px'
        },
        altText: {
            type: String,
            default: 'ALT'
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
    computed: {
        getSrcset() {
            return `${this.srcset.small} 480w, ${this.srcset.medium} 768w, ${this.srcset.large} 1024w`;
        }
    }
}
</script>



<!-- 


<ScrollerImage
    :srcset="{
        small: '/path/to/image-small.jpg',
        medium: '/path/to/image-medium.jpg',
        large: '/path/to/image-large.jpg'
    }"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1200px"
    title="High-Resolution Image Display"
    alt-text="A detailed view of the interactive interface"
    imageParent="h-64 md:h-120"
>
    <template #caption>
        <p>Detailed imagery helps highlight our technological advancements.</p>
    </template>
</ScrollerImage>
    
  
-->