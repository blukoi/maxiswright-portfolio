<template>
    <div class="relative z-20 w-full bg-white">
        <div class="container mx-auto px-4 md:px-0 py-32 md:py-64 border-grayLightPrimary border-t space-y-32">
            <ContentIntroducing :bgColor="bgColor"></ContentIntroducing>
            <slot></slot>
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