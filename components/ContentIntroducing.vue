<template>
    <div class="w-full mb-32 flex justify-center">
        <div class="text-center px-3 py-2 notch-small" :class="bgColor">
            <h3 class="text-2xl font-title title-bold pt-1 text-white">Introducing</h3>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        bgColor: {
            type: String,
            default: ' '
        },
    }
}
</script>