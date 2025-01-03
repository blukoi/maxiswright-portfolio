<template>
    <img :src="imgSrc" :alt="imgAlt" class="h-32 w-32 md:h-48 md:w-48">
</template>

<script>
export default{
    props: {
        imgSrc: {
            type: String,
            required: true,
        },
        imgAlt: {
            type: String,
            required: true,
        }
    }
}
</script>