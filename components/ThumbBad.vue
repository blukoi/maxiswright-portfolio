<template>
    <div class="text-white flex flex-row justify-start items-center h-10 w-max space-x-2">
        <div class="w-6 h-6 p-4 rounded-full relative bg-bad">
            <FontAwesomeIcon :icon="['fas', 'thumbs-down']" class="text-xl absolute top-1/2 left-1/2" style="transform: translateX(-50%) translateY(-50%);" />
        </div>
        <p class="font-main font-bold tracking-wide mb-0.5">{{ comment }}</p>
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