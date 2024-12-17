<template>
    <div ref="highlightElement" class="highlight-sweep notch-bottom p-4 border-grayDarkest border-l-4 flex-auto w-full flex flex-col space-y-4 text-grayDarkest font-main" :class="{ animate: isVisible }" :style="{'--highlight-color': highlightColor}">
        <h3 class="font-bold">
            {{ title }} —
        </h3>
        <div class="space-y-4">
            <slot name="copy"></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        },
        highlightColor: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isVisible: false,
        };
    },
    mounted() {
        const options = {
        root: null, // viewport
        rootMargin: '0px 0px -200px 0px', // triggers ~50px before bottom of viewport
        threshold: 0 // when any part is visible
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
            // Element is in view, trigger animation
            this.isVisible = true;
            // Once visible, you can unobserve if you only want the animation once
            observer.unobserve(this.$refs.highlightElement);
            }
        });
        }, options);

        observer.observe(this.$refs.highlightElement);
    }
}
</script>

<style scoped>
@keyframes sweep {
  0% {
    background-size: 0% 100%;
  }
  100% {
    background-size: 100% 100%;
  }
}

.highlight-sweep {
  display: inline-block;
  background: linear-gradient(to right, var(--highlight-color, #fcd34d) 0%, var(--highlight-color, #fcd34d) 100%);
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 0% 100%;
}

.animate {
  animation: sweep 1.0s ease-in-out forwards;
}
</style>

<!-- HOW TO USE
 

<ContentTakeaway
    :title="TITLE"
    highlightColor="bg-postitBlue"
>
    <template #title>Original Vision Statement:</template>
    <template #copy>
        <p>Apple is dedicated to the empowerment of man—to making personal computing accessible to each and every individual so as to help change the way we think, work, learn, and communicate.</p>
    </template>
</ContentTakeaway>


#title DOES NOT NEED any tags (h3 or p as the slot is already inside an h3 tag)

#copy DOES NEED tags (p or otherwise)


 -->