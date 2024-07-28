<template>
    <div class="space-y-4">
        <div class="w-full">
            <div class="flex flex-row justify-between text-grayDarkest">
                <h1 class="font-main uppercase text-xl">{{ title }}</h1>
                <div class="h-6 w-6 flex justify-center items-center rounded-full">
                    <FontAwesomeIcon :icon="['fas', 'arrows-left-right']" class="text-sm" />
                </div>
            </div>
        </div>
        <div class="w-full relative">
            <div class="w-full overflow-x-auto relative px-8 hidescrollbar">
                <div class="relative bg-black rounded-md p-8 flex flex-nowrap justify-start space-x-32 md:space-x-64 block w-max font-main text-sm text-grayLightPrimary">
                    <!-- Slots for dynamic content -->
                    <slot></slot>
                </div>
            </div>
            <div class="h-full absolute top-0 right-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            <div class="h-full absolute top-0 left-0 w-8 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
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