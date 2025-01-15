<template>
    <div class="notch h-16 w-full bg-mint flex place-items-center">
        <a :href="link" class="notch w-full h-16 p-4 flex flex-row justify-start items-center gap-4 sweep-hover" >
            <div class="h-8 w-8 flex justify-center items-center">
                <!-- Allow dynamic icon packs and icons -->
                <FontAwesomeIcon :icon="[iconPack, iconName]" class="text-xl" />
            </div>
            <h1 class="font-title title-normal pt-1 text-xl">{{ label }}</h1>
        </a>
    </div>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            required: true
        },
        iconName: {
            type: String,
            required: true
        },
        iconPack: {
            type: String,
            required: true,
            default: 'fab' // Set default to 'fab' but it can be overridden
        },
        label: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.sweep-hover {
  background: linear-gradient(#000000 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #FFFFFF;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #00AB8F;
}
</style>