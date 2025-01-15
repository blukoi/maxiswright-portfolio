<template>
    <div class="w-full space-y-8">
        <div class="text-xl font-title title-bold text-grayDarkest">
            <slot name="title">Missing Title</slot> <!-- Slot for title -->
        </div>
        <p class="text-sm font-main ml-8 text-grayDarker">
            <slot name="content">Missing Copy</slot> <!-- Slot for content -->
        </p>
    </div>
</template>