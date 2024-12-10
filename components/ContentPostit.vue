<template>
    <div class="notch-small flex-auto w-full p-4 pl-8 flex flex-col space-y-4 text-grayDarkest font-main" :class="postitColor">
        <h3 v-if="$slots.title" class="font-bold">
            <slot name="title"></slot>
        </h3>
        <div class="space-y-4">
            <slot name="copy"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        postitColor: {
            type: String,
            required: true
        }
    }
}
</script>

<!-- HOW TO USE
 

<ContentPostit
    postitColor="bg-postitYellow"
>
    <template #title>Original Vision Statement:</template>
    <template #copy>
        <p>Apple is dedicated to the empowerment of man—to making personal computing accessible to each and every individual so as to help change the way we think, work, learn, and communicate.</p>
    </template>
</ContentPostit>


#title DOES NOT NEED any tags (h3 or p as the slot is already inside an h3 tag)

#copy DOES NEED tags (p or otherwise)


 -->