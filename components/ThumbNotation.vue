<template>
    <div class="bg-transparent rounded-sm flex flex-row justify-start items-start w-full space-x-4 text-grayDarker">
        <div class="w-8 h-8 relative rounded-full" :class="colorOptions">
            <FontAwesomeIcon :icon="[iconPack, iconName]" class="text-md absolute top-1/2 left-1/2" style="transform: translateX(-50%) translateY(-50%);" />
        </div>
        <div class="my-0.5 pt-1 flex-1 min-w-0">
            <p class="font-main break-words" :class="textStyles">
                <slot></slot>
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        // comment: {
        //     type: String,
        //     required: true,
        // },
        colorOptions: {
            type: Array,
            default: () => ['bg-grayDarker', 'text-white'],
        },
        iconPack: {
            type: String,
            default: 'fas',
        },
        iconName: {
            type: String,
            required: true,
        },
        textStyles: {
            type: String,
            default: 'font-bold',
        }
    }
}
</script>