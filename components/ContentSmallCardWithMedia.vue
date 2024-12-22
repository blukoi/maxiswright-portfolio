<template>
    <div class="bracketing bracket-tl bracket-br">
        <div class="bg-transparent p-4 flex flex-col space-y-4 text-grayDarkest">
            <div class="aspect-square">
                <slot name="media"></slot>
            </div>
            <div class="space-y-4">
                <slot name="caption"></slot>
            </div>
        </div>
    </div>
</template>