<template>
    <nuxt-link :to="link" class="px-3 py-2 bg-transparent hover:bg-black focus:bg-black active:bg-mint focus:border-white text-black hover:text-white focus:text-white active:text-white rounded-sm">
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