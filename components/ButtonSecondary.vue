<template>
    <nuxt-link :to="link" class="bg-transparent text-black hover:text-white focus:text-white active:text-white hover:font-semibold">
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