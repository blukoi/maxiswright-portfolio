<template>
    <div class="px-4 py-2.5 w-max rounded-full border border-grayDarker bg-grayLighter flex flex-row items-center space-x-3 font-main">
        <div id="AvailableLight" class="h-3 w-3 rounded-full bg-mint"></div>
        <p class="font-sm font-normal">Available for work</p>
    </div>
</template>

<style>
#AvailableLight {
    animation: pulsate-animation 1.5s ease-out infinite;
}

@keyframes pulsate-animation {
    0% {
        transform: scale(1);
        opacity: .8;
    }
    50% {
        transform: scale(1.2);
        opacity: 1;
    }
    100% {
        transform: scale(1);
        opacity: .8;
    }
}
</style>