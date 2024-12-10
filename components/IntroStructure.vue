<template>
    <div class="w-full bg-white border-t border-black relative z-20 pb-32">
        <div class="container mx-auto px-4 md:px-0 pt-16">
            <div class="w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8">
                <IntroWork>
                    <template #overview>
                        <slot name="overview"></slot>
                    </template>
                    <template #problem>
                        <slot name="problem"></slot>
                    </template>
                    <template #goals>
                        <slot name="goals"></slot>
                    </template>
                    <template #solution>
                        <slot name="solution"></slot>
                    </template>
                    <template #disclaimer>
                        <slot name="disclaimer"></slot>
                    </template>
                </IntroWork>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showDisclaimer: {
            type: Boolean,
            default: true  // Default value to show, change as needed
        }
    }
}
</script>