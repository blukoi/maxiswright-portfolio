<template>
    <div class="w-full space-y-8 md:space-y-16 font-main text-sm">
        <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-16">
            <div class="col-span-1 pl-8 md:pl-0 space-y-8 text-grayDarker">
                <h3 class="uppercase font-bold">{{ title }}</h3>
                <div class="space-y-4 pl-0 md:pl-8">
                    <slot name="caption"></slot>
                </div>
            </div>
        </div>
        <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 xl:gap-16 items-start">
            <slot name="notes"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        }
    }
}
</script>