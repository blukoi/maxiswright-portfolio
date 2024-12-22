<template>
    <div class="w-full bracketing bracket-tl bracket-br grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 p-4 font-main text-sm">
        <div class="col-span-1 space-y-8 pl-4 md:pl-0 order-2 lg:order-1 text-grayDarker">
            <h3 class="font-bold uppercase text-grayDarkest">{{ title }}</h3>
            <div>
                <slot name="caption"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 order-1 lg:order-2">
            <slot name="media"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ' ',
        },
    }
}
</script>