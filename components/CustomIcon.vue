<template>
    <div class="relative" :class="iconSize">
        <FontAwesomeIcon :icon="[iconPack, iconName]" class="absolute top-1/2 left-1/2" style="transform: translateX(-50%) translateY(-50%);" :class="textSize" :style="extraTransform" />
    </div>
</template>

<script>
export default {
    props: {
        iconSize: {
            type: String,
            required: true,
        },
        textSize: {
            type: String,
            required: true,
        },
        iconPack: {
            type: String,
            default: 'fas',
        },
        iconName: {
            type: String,
            required: true,
        },
        extraTransform: {
            type: String,
            default: '',
        }
    }
}
</script>