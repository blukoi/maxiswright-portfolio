<template>
    <a :href="link" class="notch h-16 p-4 flex flex-row justify-start items-center bg-mint hover:bg-black text-white gap-4" >
        <div class="h-8 w-8 flex justify-center items-center">
            <!-- Allow dynamic icon packs and icons -->
            <FontAwesomeIcon :icon="[iconPack, iconName]" class="text-xl" />
        </div>
        <h1 class="font-title title-bold pt-1 text-xl">{{ label }}</h1>
    </a>
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
