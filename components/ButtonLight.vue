<template>
    <nuxt-link :to="link" class="notch notch-border border px-4 py-2 font-main font-sm bg-white border-black hover:bg-mint focus:bg-mint active:bg-mint focus:border-white text-grayDarkest hover:text-white focus:text-white active:text-white">
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