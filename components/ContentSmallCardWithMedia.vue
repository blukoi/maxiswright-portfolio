<template>
    <div class="notch bg-grayLightPrimary p-4 flex flex-col space-y-4 text-grayDarkest">
        <div class="aspect-square">
            <slot name="media"></slot>
        </div>
        <div class="pl-4 space-y-4">
            <slot name="caption"></slot>
        </div>
    </div>
</template>