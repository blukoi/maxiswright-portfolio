<template>
    <div class="container mx-auto px-4 md:px-0 relative">
        <div class="w-full overflow-x-auto relative pl-8 pr-8">
            <div class="flex flex-nowrap justify-start space-x-64 bg-black p-8 rounded-md">
                <!-- Slots for dynamic content -->
                <slot></slot>
            </div>
        </div>
        <div class="h-full absolute top-0 right-0 w-8 bg-gradient-to-l from-transparent to-black pointer-events-none"></div>
        <div class="h-full absolute top-0 left-0 w-8 bg-gradient-to-r from-transparent to-black pointer-events-none"></div>
    </div>
</template>