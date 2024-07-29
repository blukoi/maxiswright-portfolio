<template>
    <div class="bg-transparent rounded-sm flex flex-row justify-start items-center h-10 pl-2 pr-4 w-max space-x-4 text-grayDarker">
        <div class="w-10 h-10 relative bg-good text-white rounded-sm">
            <FontAwesomeIcon :icon="['fas', 'thumbs-up']" class="text-xl absolute top-1/2 left-1/2" style="transform: translateX(-50%) translateY(-50%);" />
        </div>
        <p class="font-main my-0.5 font-bold">{{ comment }}</p>
    </div>
</template>

<script>
export default {
    props: {
        comment: {
            type: String,
            required: true,
        }
    }
}
</script>