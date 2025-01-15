<template>
    <div class="w-full bg-white py-16 md:py-32 space-y-32 relative z-20">
        <div class="container mx-auto px-4 md:px-0 grid grid-cols-1 md:grid-cols-6 gap-x-16 gap-y-32">
            <div class="col-span-1 md:col-span-6">
                <ContentMediaWithCaption
                    :title="title"
                >
                    <template #caption>
                        <slot name="caption"></slot>
                    </template>
                    <template #media>
                        <slot name="media"></slot>
                    </template>
                </ContentMediaWithCaption>
            </div>
            <div class="col-span-1 md:col-span-4 md:col-start-2 flex flex-col place-items-center space-y-4 mb-16 md:mb-32">
                <div class="font-main italic font-bold text-3xl leading-10 p-8 text-white space-y-8 flex flex-col place-items-center" :class="bgColor">
                    <div class="h-12 w-12 flex justify-center items-center">
                        <!-- Allow dynamic icon packs and icons -->
                        <FontAwesomeIcon :icon="['fas', 'arrow-down-long']" class="text-4xl" />
                    </div>
                    <!-- <h1 class="w-full bg-white text-grayDarkest text-center pt-1">{{ how }}</h1> -->
                    <p class="w-full text-center pb-1">{{ direction }}</p>
                </div>
                <div v-if="note" class="font-main text-xs text-grayMiddle">
                    <p>{{ note }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: {
        how: {
            type: String,
            default: 'How might we...'
        },
        direction: {
            type: String,
            default: '...DIRECTION'
        },
        title: {
            type: String,
            default: 'CAPTION TITLE'
        },
        bgColor: {
            type: String,
            default: ' '
        },
        note: {
            type: String,
            default: '',
        }
    }
}
</script>