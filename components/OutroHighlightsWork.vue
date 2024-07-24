<template>
    <div class="relative z-20 w-full bg-white">
        <div class="container mx-auto px-4 md:px-0 py-32 md:py-64 border-grayLightPrimary border-t space-y-64">
            <ContentIntroducing :bgColor="bgColor"></ContentIntroducing>
            <div class="grid grid-cols-1 md:grid-cols-6 gap-x-16 gap-y-64">
                <div class="col-span-1 md:col-span-4 col-start-1 md:col-start-2">
                    <slot name="central"></slot>
                </div>
                <div class="col-span-1 md:col-span-6">
                    <slot name="full"></slot>
                </div>
            </div>
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