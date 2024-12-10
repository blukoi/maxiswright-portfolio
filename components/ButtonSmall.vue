<template>
    <nuxt-link :to="link" class="px-3 py-2 font-main bg-transparent hover:bg-black focus:bg-black active:bg-mint focus:border-white text-black hover:border-px hover:border-white hover:border-solid hover:text-white focus:text-white active:text-white">
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