<template>
    <div class="space-y-16">
        <div :class="`h-${height} w-${width} flex flex-col justify-center`">
            <img :srcset="getSrcset" :sizes="sizes" :src="srcset.small" :alt="altText" />
        </div>
        <div class="w-96 shrink-0 inline-block space-y-4">
            <h3 class="text-white font-bold uppercase">{{ title }}</h3>
            <slot name="caption"></slot> <!-- Slots for flexible caption content -->
        </div>
    </div>
</template>

<script>
export default {
    props: {
        srcset: {
            type: Object,
            required: true,
            default: () => ({
                small: '/path/to/default-small.jpg',
                medium: '/path/to/default-medium.jpg',
                large: '/path/to/default-large.jpg'
            })
        },
        sizes: {
            type: String,
            default: '(max-width: 480px) 480px, (max-width: 768px) 768px, 1024px'
        },
        altText: {
            type: String,
            default: 'Default image description'
        },
        title: {
            type: String,
            default: 'Default Image Title'
        },
        height: {
            type: Number,
            default: 160
        },
        width: {
            type: Number,
            default: 120
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


<image-content
  :srcset="{
    small: '/path/to/image-small.jpg',
    medium: '/path/to/image-medium.jpg',
    large: '/path/to/image-large.jpg'
  }"
  title="Custom Image Title"
  alt-text="Detailed description of the image"
>
  <template #caption>
    <p>Additional text about the image.</p>
  </template>
</image-content>
    
  
-->