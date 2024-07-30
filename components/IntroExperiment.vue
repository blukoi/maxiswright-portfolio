<template>
    <div class="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
        <div class="col-span-1 space-y-8">

            <CopyIntro section-name="Project">
                <template #copy>
                    <slot name="project"></slot>
                </template>
            </CopyIntro>
            <slot name="info"></slot>
            <slot name="tools"></slot>

        </div>
        <div class="col-span-1 space-y-8">

            <CopyIntro section-name="Outcome & Learnings">
                <template #copy>
                    <slot name="outcome"></slot>
                </template>
            </CopyIntro>

        </div>
    </div>
</template>

<script>
</script>