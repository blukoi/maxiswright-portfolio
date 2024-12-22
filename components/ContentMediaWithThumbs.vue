<template>
    <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 p-4 font-main text-sm bracketing bracket-tl bracket-br">
        <div class="col-span-1 order-2 lg:order-1 flex flex-col items-start">
            <div class="space-y-4">
                <slot name="thumbs"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 order-1 lg:order-2">
            <slot name="media"></slot>
        </div>
    </div>
</template>

<script>
</script>