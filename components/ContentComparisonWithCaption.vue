<template>
    <div class="w-full bracketing bracket-tl bracket-br grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-8 p-4 font-main text-sm">
        <div class="col-span-1 space-y-8 pl-4 md:pl-0 order-2 lg:order-1 text-grayDarker">
            <h3 class="font-bold uppercase text-grayDarkest">{{ title }}</h3>
            <div>
                <slot name="caption"></slot>
            </div>
        </div>
        <div class="col-span-1 md:col-span-2 order-1 lg:order-2">
            <div class="w-full flex flex-row space-x-2 font-bold">
                <div class="notch-small bg-grayMiddle w-max h-8 button">
                    <button
                    :class="[
                        'w-full h-8 flex place-items-center px-4 font-main font-bold button',
                        isBeforeActive
                        ? 'bg-grayLighter text-grayDarkest'
                        : 'sweep-hover'
                    ]"
                    @click="showBefore"
                    >
                    Before
                    </button>
                </div>
                <div class="notch-small bg-grayMiddle w-max h-8 button">
                    <button
                    :class="[
                        'w-full h-8 flex place-items-center px-4 font-main font-bold button',
                        !isBeforeActive
                        ? 'bg-grayLighter text-grayDarkest'
                        : 'sweep-hover'
                    ]"
                    @click="showAfter"
                    >
                    After
                    </button>
                </div>
            </div>
            <div class="relative">
                <div 
                    :class="[
                    'p-4 bg-grayLighter static',
                    !isBeforeActive ? 'opacity-0' : ''
                    ]"
                >
                    <slot name="beforeSlot"></slot>
                </div>
                <div 
                    :class="[
                    'p-4 bg-grayLighter absolute top-0 left-0',
                    isBeforeActive ? 'opacity-0' : ''
                    ]"
                >
                    <slot name="afterSlot"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: ' ',
        },
    },
    data() {
        return {
        isBeforeActive: true,  // "Before" is active initially
        };
    },
    methods: {
        showBefore() {
        this.isBeforeActive = true
        },
        showAfter() {
        this.isBeforeActive = false
        },
    },
}
</script>

<!-- <script>
document.addEventListener('DOMContentLoaded', () => {
    const beforeButton = document.getElementById('beforeButton');
    const afterButton  = document.getElementById('afterButton');
    const beforeMedia  = document.getElementById('beforeMedia');
    const afterMedia   = document.getElementById('afterMedia');

    // Show "Before" content on click
    beforeButton.addEventListener('click', () => {
        beforeButton.classList.remove('sweep-hover')
        beforeButton.classList.add('bg-grayLighter', 'text-grayDarkest');
        afterButton.classList.remove('bg-grayLighter', 'text-grayDarkest');
        afterButton.classList.add('sweep-hover')

        beforeMedia.classList.remove('opacity-0');
        afterMedia.classList.add('opacity-0');
    });

    // Show "After" content on click
    afterButton.addEventListener('click', () => {
        afterButton.classList.remove('sweep-hover')
        afterButton.classList.add('bg-grayLighter', 'text-grayDarkest');
        beforeButton.classList.remove('bg-grayLighter', 'text-grayDarkest');
        beforeButton.classList.add('sweep-hover')

        beforeMedia.classList.add('opacity-0');
        afterMedia.classList.remove('opacity-0');
    });
});
</script> -->

<style scoped>

.sweep-hover {
  background: linear-gradient(#00AB8F 0 0) calc(100% - var(--p,0%)) / var(--p,0%) no-repeat;
  transform: scale(1) rotate(0deg);
  color: #000000;
  transition: transform 0.4s, background-size 0.4s, background-position 0s, color 0.4s;
}

.sweep-hover:hover {
  --p: 100%;
  color: #d9d9d9;
}

</style>