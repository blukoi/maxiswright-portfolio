<template>
    <nuxt-link :to="link" class="border-l border-black px-4 py-5 h-full font-main bg-transparent hover:bg-mint focus:bg-mint text-black hover:text-white focus:text-white active:text-white">
        {{ label }}
    </nuxt-link>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>