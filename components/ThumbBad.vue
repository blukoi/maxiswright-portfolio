<template>
    <div class="text-white rounded-sm flex flex-row justify-start items-center h-10 pl-2 pr-4 w-max space-x-4 text-white bg-bad">
        <div class="w-6 h-6 relative">
            <FontAwesomeIcon :icon="['fas', 'thumbs-down']" class="text-xl absolute top-1/2 left-1/2" style="transform: translateX(-50%) translateY(-50%);" />
        </div>
        <p class="font-main font-bold uppercase my-0.5">{{ comment }}</p>
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