<template>
    <nuxt-link :to="link" class="px-3 py-2 font-main bg-grayLightPrimary hover:bg-mint focus:bg-mint active:bg-mint focus:border-white text-grayDarkest hover:text-white focus:text-white active:text-white rounded-sm">
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