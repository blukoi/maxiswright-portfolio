<template>
    <div class="container mx-auto px-4 md:px-0 relative">
        <div class="w-full overflow-x-auto relative px-8 hidescrollbar">
            <div class="relative bg-black notch-large p-8 flex flex-nowrap justify-start space-x-32 md:space-x-64 block w-max font-main text-sm text-grayLightPrimary">
                <!-- Slots for dynamic content -->
                <slot></slot>
            </div>
        </div>
        <div class="h-full absolute top-0 right-4 md:right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        <div class="h-full absolute top-0 left-4 md:left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
    </div>
</template>

<style>

/* Hide scrollbar for Chrome, Safari and Opera */
.hidescrollbar::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.hidescrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

</style>