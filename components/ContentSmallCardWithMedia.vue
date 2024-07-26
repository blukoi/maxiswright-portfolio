<template>
    <div class="bg-grayLightPrimary rounded-md p-4 flex flex-col space-y-8 text-grayDarkest">
        <div class="rounded-sm aspect-square">
            <slot name="media"></slot>
        </div>
        <div class="pl-4 space-y-4">
            <slot name="caption"></slot>
        </div>
    </div>
</template>